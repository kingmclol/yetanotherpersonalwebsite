import toast from "react-hot-toast";
import ProjectList from "../features/projects/ProjectList";
import { useProjects } from "../features/projects/useProjects";
import Button from "../ui/Button";
import Divider from "../ui/Divider";
import Modal from "../ui/Modal";
import PageTitle from "../ui/PageTitle";
import Section from "../ui/Section";

function Projects() {
  const { projects } = useProjects();
  return (
    <>
      <PageTitle title="Projects" subtitle="Basically school projects" />
      {/* <button onClick={() => toast.success("Eeee")}>click</button>
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
      </Modal> */}
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
    </>
  );
}

export default Projects;
