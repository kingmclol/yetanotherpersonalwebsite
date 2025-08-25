import { motion } from "motion/react";
import toast from "react-hot-toast";
import { usePreferences } from "../contexts/PreferencesProvider";
import ProjectList from "../features/projects/ProjectList";
import { useProjects } from "../features/projects/useProjects";
import Button from "../ui/Button";
import Divider from "../ui/Divider";
import Modal from "../ui/Modal";
import TypeWriterText from "../ui/TypeWriterText";
import { fadeInFromBottom } from "../utils/animationVariants";

function Projects() {
  const { projects } = useProjects();
  const { reducedMotion } = usePreferences();
  return (
    <div>
      <motion.h1
        variants={fadeInFromBottom}
        initial="initial"
        animate="animate"
        className="tacking-wide text-center text-4xl font-bold"
      >
        {!reducedMotion ? (
          <TypeWriterText loop={false} words={["Projects"]} />
        ) : (
          "Projects"
        )}
      </motion.h1>
      <Divider />
      <button onClick={() => toast.success("Eeee")}>click</button>
      <Modal>
        <Modal.Open
          window={"main"}
          renderButton={(openFunc) => (
            <Button onClick={openFunc}>open modal</Button>
          )}
        />

        <Modal.Window name="main" titleText={"asefs"}>
          test
        </Modal.Window>
      </Modal>
      <ProjectList projects={projects} />
      {/* <ContextMenu>
        <ContextMenu.Toggle id="1" />
        <ContextMenu.Menu>
          <ContextMenu.List id="1">
            <ContextMenu.Button icon={<HiSquare2Stack />}>
              Duplicate
            </ContextMenu.Button>
          </ContextMenu.List>
        </ContextMenu.Menu>
      </ContextMenu> */}
    </div>
  );
}

export default Projects;
