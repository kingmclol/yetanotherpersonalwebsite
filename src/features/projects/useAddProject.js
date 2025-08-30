import toast from "react-hot-toast";
import { createProject } from "../../services/apiProjects";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

export function useAddProject() {
  const navigate = useNavigate();
  const { mutate: addProject, isPending: isAdding } = useMutation({
    mutationFn: createProject,
    onSuccess: (data) => {
      toast.success("Project created successfully!");
      navigate(`/project/${data.slug}`, { replace: true });
    },
    onError: (error) => {
      console.error(error);
      toast.error("Failed to create project");
    },
  });

  return { addProject, isAdding };
}
