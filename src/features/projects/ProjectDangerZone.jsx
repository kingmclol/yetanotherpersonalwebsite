import toast from "react-hot-toast";
import { fadeInFromBottom } from "../../utils/animationVariants";
import Section from "../../ui/Section";
import SectionHeader from "../../ui/SectionHeader";
import { motion } from "motion/react";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import AuthStatusTag from "../auth/AuthStatusTag";
import LoginForm from "../auth/LoginForm";
import { useUser } from "../auth/useUser";
import { useDeleteProject } from "./useDeleteProject";
function ProjectDangerZone({ project }) {
  const { isAuthenticated } = useUser();
  const { isDeleting, deleteProject } = useDeleteProject();
  return (
    <Section className="flex flex-col items-center justify-center">
      <SectionHeader>Danger Zone</SectionHeader>
      <motion.div variants={fadeInFromBottom}>
        You are currently <AuthStatusTag />
      </motion.div>
      <motion.div variants={fadeInFromBottom} className="my-4 flex gap-4">
        <Button onClick={() => toast.error("Did you read the thing bro")}>
          Edit Project
        </Button>
        <Modal>
          <Modal.Open
            target="confirmDelete"
            renderButton={(openFunc) => (
              <Button
                onClick={openFunc}
                className="rounded-full bg-red-700 px-4 py-2 text-white"
              >
                Delete Project
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
                  <Button onClick={closeFunc}>No, I'm not</Button>
                  <Modal.Open
                    target={"login"}
                    renderButton={(openFunc) => (
                      <Button
                        onClick={
                          isAuthenticated
                            ? () => deleteProject(project.id)
                            : openFunc
                        }
                        className="rounded-full bg-red-700 px-4 py-2 text-white"
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

export default ProjectDangerZone;
