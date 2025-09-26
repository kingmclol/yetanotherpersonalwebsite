import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { deleteProject as deleteProjectApi } from "../../services/apiProjects";

export function useDeleteProject() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    mutate: deleteProject,
    isPending: isDeleting,
    error,
  } = useMutation({
    mutationFn: deleteProjectApi,
    onSuccess: (data) => {
      // Seems like the project page is mounted for just a moment before we navigate away, so a request is fired
      // and of course gets no data. So cancel the request well that doesn't work
      // Fuck it i'm going to just try to stop it somehow
      // Nope i can't stop it time to just live with it now
      queryClient.invalidateQueries({
        queryKey: ["project", data.slug],
        exact: true,
      });
      queryClient.cancelQueries({
        queryKey: ["project", data.slug],
        exact: true,
      });

      // RIP project page so go back to projects
      navigate("/projects", { replace: true });

      // Remove project from query cache
      // Technically maybe possible to take projects query then filter out the deleted project
      // But like i'm the only one tho can delete stuff anyways so no point
      queryClient.invalidateQueries(["projects"]);
      queryClient.removeQueries({
        queryKey: ["project", data.slug],
        exact: true,
      });

      toast.success(`Deleted ${data.title}`);
    },
    onError: () => {
      toast.error("Failed to delete project");
    },
  });

  return { deleteProject, isDeleting, error };
}
