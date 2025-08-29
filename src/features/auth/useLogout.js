import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogout() {
  const queryClient = useQueryClient();
  const {
    mutate: logout,
    error,
    isPending,
  } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("Successfully logged out");
    },
    onError: () => {
      toast.error("Failed to logout, wtf?");
    },
  });

  return { logout, error, isPending };
}
