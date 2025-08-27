import ProjectList from "../features/projects/ProjectList";
import { useProjects } from "../features/projects/useProjects";
import PageTitle from "../ui/PageTitle";

function Projects() {
  const { projects } = useProjects();
  return (
    <>
      <PageTitle title="Projects (WIP)" subtitle="Basically school projects" />
      <ProjectList projects={projects} />
    </>
  );
}

export default Projects;
