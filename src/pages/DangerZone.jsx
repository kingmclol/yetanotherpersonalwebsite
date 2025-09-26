import { motion } from "motion/react";
import AuthStatusTag from "../features/auth/AuthStatusTag";
import LoginForm from "../features/auth/LoginForm";
import { useUser } from "../features/auth/useUser";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import { fadeInFromBottom } from "../utils/animationVariants";

function DangerZone({
  resourceType,
  onStartEditing,
  resourceId,
  isDeleting,
  deleteResource,
}) {
  const { isAuthenticated } = useUser();
  return (
    <Section className="flex flex-col items-center justify-center">
      <SectionHeader>Danger Zone</SectionHeader>
      <motion.div variants={fadeInFromBottom}>
        You are currently <AuthStatusTag />
      </motion.div>
      <motion.div variants={fadeInFromBottom} className="my-4 flex gap-4">
        <Button onClick={onStartEditing}>Edit {resourceType}</Button>
        <Modal>
          <Modal.Open
            target="confirmDelete"
            renderButton={(openFunc) => (
              <Button
                onClick={openFunc}
                className="rounded-full bg-red-700 px-4 py-2 text-white"
              >
                Delete {resourceType}
              </Button>
            )}
          />

          <Modal.Window
            name="confirmDelete"
            titleText="Are you sure you want to do this?"
            renderChildren={(closeFunc) => (
              <div>
                <p className="italic">
                  I'm not that dumb. Status: <AuthStatusTag />
                </p>
                <div className="mt-12 flex h-full items-center justify-around text-xl font-semibold tracking-wide">
                  <Button onClick={closeFunc} disabled={isDeleting}>
                    No, I'm not
                  </Button>
                  <Modal.Open
                    target={"login"}
                    renderButton={(openFunc) => (
                      <Button
                        onClick={
                          isAuthenticated
                            ? () => deleteResource(resourceId)
                            : openFunc
                        }
                        className="rounded-full bg-red-700 px-4 py-2 text-white"
                        disabled={isDeleting}
                      >
                        Yep, I'm sure
                      </Button>
                    )}
                  />
                </div>
              </div>
            )}
          />

          <Modal.Window
            titleText="Login first bruh"
            name="login"
            renderChildren={(closeFunc) => <LoginForm onSuccess={closeFunc} />}
          />
        </Modal>
      </motion.div>
    </Section>
  );
}

export default DangerZone;
