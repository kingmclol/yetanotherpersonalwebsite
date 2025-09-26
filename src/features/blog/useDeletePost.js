import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost as deletePostApi } from "../../services/apiPosts";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
export function useDeletePost() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    mutate: deletePost,
    isPending: isDeleting,
    error,
  } = useMutation({
    mutationFn: deletePostApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["post", data.id],
        exact: true,
      });
      navigate("/blog", { replace: true });
      
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.removeQueries({
        queryKey: ["post", data.id],
        exact: true,
      });
      toast.success("Post deleted successfully");
    },
    onError: () => {
      toast.error("Failed to delete post");
    },
  });
  return { deletePost, isDeleting, error };
}
