import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProject as updateProjectApi } from "../../services/apiProjects";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export function useUpdateProject() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: updateProject, isPending: isUpdating } = useMutation({
    mutationFn: ({ id, updatedProject }) =>
      updateProjectApi(id, updatedProject),
    onSuccess: (updatedProject) => {
      toast.success("Updated project successfully");
      queryClient.invalidateQueries(["projects"]);
      queryClient.invalidateQueries(["project", updatedProject.slug]);
      navigate("/projects");
    },
    onError: (error) => {
      toast.error(`Failed to update project: ${error.message}`);
    },
  });

  return { updateProject, isUpdating };
}
