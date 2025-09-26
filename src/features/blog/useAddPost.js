import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createPost as addPostApi } from "../../services/apiPosts";

export function useAddPost() {
  const navigate = useNavigate();
  const { mutate: addPost, isPending: isAdding } = useMutation({
    mutationFn: (newPost) => addPostApi(newPost),
    onSuccess: (newPost) => {
      toast.success("Post created successfully!");
      navigate(`/blog/${newPost.id}`, { replace: true });
    },
  });
  return { addPost, isAdding };
}
