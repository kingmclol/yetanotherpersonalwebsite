import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import LoginForm from "./LoginForm";
import { useLogout } from "./useLogout";
import { useUser } from "./useUser";

function LoginLogoutButton() {
  const { isAuthenticated } = useUser();
  const { logout, isPending } = useLogout();

  return (
    <Modal>
      {isAuthenticated ? (
        <Button onClick={logout} disabled={isPending}>
          too much power scary
        </Button>
      ) : (
        <Modal.Open
          target="login"
          renderButton={(openFunc) => (
            <Button onClick={openFunc}>but i'm me</Button>
          )}
        />
      )}

      <Modal.Window
        name="login"
        titleText="Prove it."
        renderChildren={(closeFunc) => <LoginForm onSuccess={closeFunc} />}
      />
    </Modal>
  );
}

export default LoginLogoutButton;
