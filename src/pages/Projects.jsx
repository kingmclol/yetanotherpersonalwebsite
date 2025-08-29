import ProjectList from "../features/projects/ProjectList";
import { useProjects } from "../features/projects/useProjects";
import PageTitle from "../ui/PageTitle";

function Projects() {
  const { projects, isLoading } = useProjects();
  return (
    <>
      <PageTitle title="Projects" subtitle="Basically school projects" />
      <ProjectList projects={projects} isLoading={isLoading} />
    </>
  );
}

export default Projects;
