import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { noAnimation } from "../utils/animationVariants";

const props = {
  whileHover: {
    scale: 1.08,
  },
  whileTap: {
    scale: 0.95,
  },
  className:
    "w-full max-w-2xl flex items-center gap-4 rounded-lg bg-slate-800 px-4 py-2 hover:text-slate-100",
};

const MotionLink = motion.create(Link);
// Ffs i literally use it so stop complaining, eslint
// eslint-disable-next-line no-unused-vars
function LinkCard({ href, to, Icon, name, comment, variants = noAnimation }) {
  if (href)
    return (
      <motion.a {...props} href={href} target="_blank" variants={variants}>
        <Icon className="h-12 w-12" />
        <div>
          <h3 className="text-xl font-bold tracking-wide underline">{name}</h3>
          {comment && <p className="text-slate-400">{comment}</p>}
        </div>
      </motion.a>
    );
  else
    return (
      <MotionLink {...props} to={to} variants={variants}>
        <Icon className="h-12 w-12" />
        <div>
          <h3 className="text-xl font-bold tracking-wide underline">{name}</h3>
          {comment && <p className="text-slate-400">{comment}</p>}
        </div>
      </MotionLink>
    );
}

export default LinkCard;
