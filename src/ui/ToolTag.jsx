import { motion } from "motion/react";
import { fadeIn } from "../utils/animationVariants";

function ToolTag({ tool, isMain = false }) {
  const colors = isMain
    ? "border-purple-900 bg-purple-700 text-white"
    : "bg-slate-600 text-slate-100 border-slate-700";
  return (
    <motion.li
      variants={fadeIn}
      className={`rounded-full border-2 px-2 py-0.5 text-sm font-semibold tracking-wider uppercase ${colors} `}
    >
      {tool}
    </motion.li>
  );
}

export default ToolTag;
