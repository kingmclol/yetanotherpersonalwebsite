import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { fadeInFromBottom } from "../../utils/animationVariants";
import { HiPlus } from "react-icons/hi2";

const MotionLink = motion.create(Link);

function ProjectCardEmpty() {
  return (
    <MotionLink
      to="/project/new"
      variants={fadeInFromBottom}
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className="flex min-h-96 cursor-pointer flex-col items-center justify-center rounded-xl border-4 border-slate-600 bg-inherit text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-400"
    >
      {/* <h2 className="font-extrabold text-8xl tracking-wider">ADD</h2> */}
      <HiPlus className="h-24 w-24" strokeWidth={3} />
    </MotionLink>
  );
}

export default ProjectCardEmpty;
