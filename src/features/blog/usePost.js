import { useQuery } from "@tanstack/react-query";
import { getPostById } from "../../services/apiPosts";

export function usePost(id) {
  const {
    data: post,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ["post", id],
    queryFn: () => getPostById(id),
  });
  return { post, isLoading, error };
}
