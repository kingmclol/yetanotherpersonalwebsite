import LoadingAnimation from "../../ui/LoadingAnimation";
import Section from "../../ui/Section";
import { fadeInFromLeft, noAnimation } from "../../utils/animationVariants";
import ProjectCard from "./ProjectCard";
function ProjectList({ projects }) {
  return (
    <div className="flex min-w-xl items-center justify-center">
      {!projects ? (
        <div>
          <LoadingAnimation />
        </div>
      ) : projects.length === 0 ? (
        <Section
          variants={fadeInFromLeft}
          className="flex w-xl flex-col items-center justify-center gap-8"
        >
          <img
            src="/amber_upset.webp"
            alt="oh no sticker"
            className="mx-auto h-32 w-32"
          />
          <h1 className="text-center text-xl font-bold tracking-wide">
            I couldn't find any project data??? RIP my Supabase???
          </h1>
        </Section>
      ) : (
        <Section variants={noAnimation} className="grid grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Section>
      )}
    </div>
  );
}

export default ProjectList;
