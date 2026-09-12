import LoadingAnimation from "../../ui/LoadingAnimation";
import Section from "../../ui/Section";
import SectionList from "../../ui/SectionList";
import { fadeInFromBottom, fadeInFromLeft, noAnimation } from "../../utils/animationVariants";
import ProjectCard from "./ProjectCard";
import ProjectCardEmpty from "./ProjectCardEmpty";
function ProjectList({ projects, isLoading }) {
  return (
    <div className="flex min-w-xl items-center justify-center">
      {isLoading ? (
        <div>
          <LoadingAnimation />
        </div>
      ) : projects.length === 0 ? (
        <SectionList
          key="nodata"
          layout
          className="flex w-xl flex-col items-center justify-center gap-8"
          childVariants={fadeInFromBottom}
        >
          <img
            src="/amber_upset.webp"
            alt="oh no sticker"
            className="mx-auto h-32 w-32"
          />
          <h1 className="text-center text-xl font-bold tracking-wide">
            I couldn't find any project data??? RIP my Supabase???
          </h1>
        </SectionList>
      ) : (
        <SectionList
          key={projects.map((p) => `${p.id}:${p.updated_at}`).join(",")}
          className="grid lg:grid-cols-2 gap-4 items-stretch"
          childrenUseViewport
          childVariants={fadeInFromLeft}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          <ProjectCardEmpty />
        </SectionList>
      )}
    </div>
  );
}

export default ProjectList;
