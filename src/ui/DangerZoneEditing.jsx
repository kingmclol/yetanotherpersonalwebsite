import { useNavigate } from "react-router-dom";
import AuthStatusTag from "../features/auth/AuthStatusTag";
import Button from "./Button";
import Modal from "./Modal";
import { useUser } from "../features/auth/useUser";
import LoginForm from "../features/auth/LoginForm";

function DangerZoneEditing({ handleSubmit, onError, isWorking }) {
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        You are currently <AuthStatusTag />
      </div>
      <div className="my-4 flex gap-4">
        <Button type="button" onClick={() => navigate(-1)} disabled={isWorking}>
          Cancel
        </Button>
        <Modal>
          <Modal.Open
            target="login"
            renderButton={(openFunc) => (
              <Button
                disabled={isWorking}
                type={isAuthenticated ? "submit" : "button"}
                onClick={
                  isAuthenticated
                    ? undefined
                    : handleSubmit(
                        // if form valid & not auth then open login modal
                        () => openFunc(),
                        // if form errored toast errors
                        onError,
                      )
                }
                className="rounded-full bg-red-700 px-4 py-2 text-white"
              >
                Save
              </Button>
            )}
          />

          <Modal.Window
            titleText="Your free trial has expired."
            name="login"
            renderChildren={(closeFunc) => <LoginForm onSuccess={closeFunc} />}
          />
        </Modal>
      </div>
    </div>
  );
}

export default DangerZoneEditing;
