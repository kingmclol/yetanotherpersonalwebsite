import Divider from "../../ui/Divider";
import LoadingAnimation from "../../ui/LoadingAnimation";
import Section from "../../ui/Section";
import { fadeIn, noAnimation } from "../../utils/animationVariants";
import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  return (
    <Section
      className="flex min-h-[300px] min-w-xl items-center justify-center"
      variants={noAnimation}
    >
      {!projects ? (
        <Section variants={fadeIn} key="loading">
          <LoadingAnimation />
        </Section>
      ) : (
        <Section variants={fadeIn} key="projects">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          <ProjectCard project={projects[0]} />
          <ProjectCard project={projects[0]} />
          <ProjectCard project={projects[0]} />
          <ProjectCard project={projects[0]} />
          <ProjectCard project={projects[0]} />
        </Section>
      )}
    </Section>
  );
}

export default ProjectList;
