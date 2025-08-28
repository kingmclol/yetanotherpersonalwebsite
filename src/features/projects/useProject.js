import { useQuery } from "@tanstack/react-query";
import { getProjectBySlug } from "../../services/apiProjects";

export function useProject(slug) {
  const {
    data: project,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ["project", slug],
    queryFn: () => getProjectBySlug(slug),
  });

  return { project, isLoading, error };
}
