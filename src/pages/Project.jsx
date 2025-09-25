import { useState } from "react";
import ProjectFullView from "../features/projects/ProjectFullView";
import LoadingAnimation from "../ui/LoadingAnimation";
import ProjectEditor from "../features/projects/ProjectEditor";
import { useParams } from "react-router-dom";
import { useProject } from "../features/projects/useProject";

function Project() {
  const params = useParams();
  const slug = params.slug;
  const { project, isLoading } = useProject(slug);
  const [isEditing, setIsEditing] = useState(false);
  function toggleIsEditing() {
    setIsEditing((prev) => !prev);
  }
  if (isLoading) return <LoadingAnimation />;
  if (project === null) {
    return (
      <p className="text-center">
        Come on now, this project doesn't exist. Stop manually navigating to
        pages.
      </p>
    );
  }
  if (isEditing) {
    return <ProjectEditor project={project} />;
  } else {
    return (
      <ProjectFullView project={project} onStartEditing={toggleIsEditing} />
    );
  }
}

export default Project;
