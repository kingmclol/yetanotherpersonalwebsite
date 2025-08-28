import { useQueryClient } from "@tanstack/react-query";
import { motion } from "motion/react";
import { HiOutlineUsers } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Divider from "../../ui/Divider";
import { fadeInFromBottom } from "../../utils/animationVariants";
import { formatDateMonthYear, getImageUrl } from "../../utils/helpers";

const MotionLink = motion.create(Link);
function ProjectCard({ project }) {
  const {
    id,
    start_date: startDate,
    end_date: endDate,
    title,
    image: imagePath,
    team_size: teamSize,
    slug,
    external_url: projectUrl,
    description,
    tagline,
    tool_main: mainTool,
    tool_others: otherTools,
  } = project;
  const queryClient = useQueryClient();
  return (
    <>
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
        className="flex cursor-pointer flex-col rounded-xl border-4 border-slate-600 bg-slate-700 transition-colors hover:border-slate-400"
      >
        <div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-800">
          {imagePath ? (
            <img
              className="h-full w-full rounded-xl object-cover"
              src={getImageUrl(imagePath)}
              alt={title}
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center text-3xl font-bold tracking-wider uppercase">
              <img
                src="/sucrose_doubt.webp"
                alt="confused image"
                className="h-28 w-28"
              />
              No image set
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col justify-between px-4 py-4">
          <div>
            <h2 className="mb-2 text-center text-2xl font-semibold tracking-wide text-slate-200">
              {title}
            </h2>
            <p className="text-md text-center text-slate-400 italic">
              "{tagline}"
            </p>
            <Divider noAnimate spacing="tiny" />
            <p className="line-clamp-3 px-4 whitespace-pre-wrap">
              {description}
            </p>
          </div>
        </div>
        <div className="flex justify-between px-4 py-2 text-gray-400">
          <div className="flex items-center gap-2">
            <HiOutlineUsers /> {teamSize === 1 ? "solo" : teamSize}
          </div>
          <div>
            {formatDateMonthYear(startDate)} &mdash;{" "}
            {endDate ? formatDateMonthYear(endDate) : "now"}
          </div>
        </div>
      </MotionLink>
    </>
  );
}

export default ProjectCard;
