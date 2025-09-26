import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { fadeInFromBottom } from "../../utils/animationVariants";

const MotionLink = motion.create(Link);

function BlogCardEmpty() {
  return (	
    <MotionLink
      to="/blog/new"
      variants={fadeInFromBottom}
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className="flex 
			min-h-32
			cursor-pointer flex-col items-center justify-center rounded-xl border-4 border-slate-600 bg-inherit text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-400"
    >
      <p className="text-3xl font-extrabold tracking-wider">
        create new post
      </p>
    </MotionLink>
  );
}

export default BlogCardEmpty;
