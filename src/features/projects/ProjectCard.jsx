import { motion } from "motion/react";
import { fadeInFromBottom } from "../../utils/animationVariants";
import { getImageUrl } from "../../utils/helpers";
import Divider from "../../ui/Divider";
import { format } from "date-fns";
import { HiOutlineUsers } from "react-icons/hi2";
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

  const imageUrl = getImageUrl(imagePath);
  return (
    <motion.div
      variants={fadeInFromBottom}
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className="flex flex-col rounded-xl border-4 border-slate-600 bg-slate-700 transition-colors hover:border-slate-400"
    >
      <div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-800">
        <img
          className="h-full w-full object-cover"
          src={imageUrl}
          alt={title}
        />
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
          <p className="line-clamp-3 px-4">{description}</p>
        </div>
        <div className="mt-2 flex justify-between">
          <p className="flex gap-2 items-center">
            <HiOutlineUsers /> {teamSize === 1 ? "solo" : teamSize}
          </p>
          <div>
            {format(new Date(startDate), "MMM yyyy")} &mdash;{" "}
            {endDate ? format(new Date(endDate), "MMM yyyy") : "now"}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
