import { useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import { motion } from "motion/react";
import { HiOutlineUsers } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Divider from "../../ui/Divider";
import { fadeInFromBottom } from "../../utils/animationVariants";
import ProjectImage from "./ProjectImage";

const MotionLink = motion.create(Link);
function ProjectCard({ project }) {
  const {
    start_date: startDate,
    end_date: endDate,
    title,
    image: imagePath,
    team_size: teamSize,
    slug,
    description,
    tagline,
  } = project;
  const queryClient = useQueryClient();
  return (
    <MotionLink
      to={`/project/${slug}`}
      onClick={() => queryClient.setQueryData(["project", slug], project)}
      variants={fadeInFromBottom}
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className="flex min-h-96 cursor-pointer flex-col rounded-xl border-4 border-slate-600 bg-slate-700 transition-colors hover:border-slate-400"
    >
      <div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-800">
        <ProjectImage alt={title} image={imagePath} />
      </div>
      <div className="flex flex-1 flex-col justify-between px-4 py-4">
        <div>
          <h2 className="mb-2 text-center text-2xl font-semibold tracking-wide text-slate-200">
            {title}
          </h2>
          <p className="text-md text-center text-slate-400 italic">
            {tagline && `"${tagline}"`}
          </p>
          <Divider noAnimate spacing="tiny" />
          <p className="line-clamp-3 px-4 whitespace-pre-wrap">{description}</p>
        </div>
      </div>
      <div className="flex justify-between px-4 py-2 text-gray-400">
        <div className="flex items-center gap-2">
          <HiOutlineUsers /> {teamSize === 1 ? "solo" : teamSize}
        </div>
        <div>
          {format(new Date(startDate), "MMM yyyy")} &mdash;{" "}
          {endDate ? format(new Date(endDate), "MMM yyyy") : "now"}
        </div>
      </div>
    </MotionLink>
  );
}

export default ProjectCard;
