import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePost as updatePostApi } from "../../services/apiPosts";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useUpdatePost() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: updatePost, isPending: isUpdating } = useMutation({
    mutationFn: ({ id, updatedPost }) => updatePostApi(id, updatedPost),
    onSuccess: (updatedPost) => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({
        queryKey: ["post", updatedPost.id],
        exact: true,
      });
      toast.success("Updated post successfully");
      navigate("/blog");
    },
    onError: (error) => {
      toast.error(`Failed to update post: ${error.message}`);
    },
  });
  return { updatePost, isUpdating };
}
