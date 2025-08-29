import { motion } from "motion/react";
import { HiMiniArrowTopRightOnSquare, HiOutlineUsers } from "react-icons/hi2";
import { useParams } from "react-router-dom";
import Button from "../../ui/Button";
import Divider from "../../ui/Divider";
import LoadingAnimation from "../../ui/LoadingAnimation";
import Modal from "../../ui/Modal";
import Section from "../../ui/Section";
import SectionHeader from "../../ui/SectionHeader";
import ToolTag from "../../ui/ToolTag";
import {
  buttonVariants,
  fadeIn,
  fadeInFromBottom,
  fadeInFromLeft,
  fadeInFromRight,
} from "../../utils/animationVariants";
import { formatDateMonthYear } from "../../utils/helpers";
import ProjectImage from "./ProjectImage";
import { useProject } from "./useProject";
import toast from "react-hot-toast";
import AuthStatusTag from "../auth/AuthStatusTag";
import ProjectDangerZone from "./ProjectDangerZone";
function ProjectFullView() {
  const params = useParams();
  const slug = params.slug;
  const { project, isLoading } = useProject(slug);
  if (isLoading) return <LoadingAnimation />;
  if (project === null)
    return (
      <p>
        Come on now, this project doesn't exist. Stop manually navigating to pages.
      </p>
    );
  const {
    start_date: startDate,
    end_date: endDate,
    title,
    image: imagePath,
    team_size: teamSize,
    external_url: projectUrl,
    description,
    tool_main: mainTool,
    tool_others: otherTools,
  } = project;
  return (
    <>
      <Modal>
        <Modal.Open
          target="image"
          renderButton={(openFunc) => (
            <motion.div
              variants={{ ...fadeInFromBottom, ...buttonVariants }}
              initial="initial"
              animate="animate"
              whileHover="whileHover"
              whileTap="whileTap"
              className="mx-auto mb-6 aspect-[16/9] max-w-xl rounded-lg border-4 border-slate-600 hover:border-slate-400"
              onClick={openFunc}
            >
              <ProjectImage imagePath={imagePath} alt={title} />
            </motion.div>
          )}
        />
        <Modal.Window
          name="image"
          renderChildren={(closeFunc) => (
            <div className="flex flex-col items-center justify-center gap-4">
              <ProjectImage imagePath={imagePath} alt={title} />
              <Button onClick={closeFunc}>Close</Button>
            </div>
          )}
        />
      </Modal>
      <Section variants={fadeInFromBottom}>
        <h2 className="flex justify-center text-2xl font-bold tracking-wider">
          {projectUrl ? (
            <a
              className="flex justify-center hover:underline"
              href={projectUrl}
              target="_blank"
            >
              {title}
              <HiMiniArrowTopRightOnSquare />
            </a>
          ) : (
            title
          )}
        </h2>
      </Section>
      <Section className="mx-auto flex max-w-xl flex-wrap items-center justify-between gap-8">
        <motion.div
          variants={fadeInFromLeft}
          className="flex items-center gap-2 font-semibold"
        >
          <HiOutlineUsers className="h-6 w-6" />{" "}
          {teamSize === 1 ? "solo" : teamSize}
        </motion.div>
        <motion.div
          variants={fadeInFromRight}
          className="text-lg font-semibold tracking-wide"
        >
          {formatDateMonthYear(startDate)} &mdash;{" "}
          {endDate ? formatDateMonthYear(endDate) : "now"}
        </motion.div>
      </Section>
      <Divider variants={fadeIn} spacing="small" />
      <Section
        staggerChildren={0.15}
        className="flex flex-wrap items-center justify-center gap-2"
      >
        <ToolTag tool={mainTool} isMain />
        {otherTools.map((tool) => (
          <ToolTag key={tool} tool={tool} />
        ))}
      </Section>
      <Divider variants={fadeIn} spacing="small" />
      <Section
        variants={fadeInFromBottom}
        className="mx-auto min-h-96 max-w-2xl whitespace-pre-wrap"
      >
        {description}
      </Section>
      <Divider />
      <ProjectDangerZone project={project} />
    </>
  );
}

export default ProjectFullView;
