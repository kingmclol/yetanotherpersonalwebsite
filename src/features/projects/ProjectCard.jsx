import { motion } from "motion/react";
import { fadeInFromBottom } from "../../utils/animationVariants";
function ProjectCard({ project }) {
  const {
    id,
    start_date: startDate,
    end_date: end_date,
    title,
    image,
    team_size: teamSize,
    slug,
    external_url: projectUrl,
    description,
    tagline,
    tool_main: mainTool,
    tool_others: otherTools,
  } = project;
  return (
    <motion.div variants={fadeInFromBottom}>
      <p>{title}</p>
      <p>{tagline}</p>
      <p>{description}</p>
      <p>{teamSize}</p>
      <p>{mainTool}</p>
      {otherTools.map((tool, i) => (
        <p key={i}>{tool}</p>
      ))}
    </motion.div>
  );
}

export default ProjectCard;
