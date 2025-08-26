import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { fadeInFromLeft } from "../utils/animationVariants";

const props = {
  variants: fadeInFromLeft,
  whileHover: {
    scale: 1.08,
  },
  whileTap: {
    scale: 0.95,
  },
  className: "w-full max-w-2xl",
  tabIndex: -1, // so no focusing on the lis
};

// Ffs i literally use it so stop complaining, eslint
// eslint-disable-next-line no-unused-vars
function LinkCard({ href, to, Icon, name, comment }) {
  if (href)
    return (
      <motion.li {...props}>
        <a
          href={href}
          target="_blank"
          className="flex items-center gap-4 rounded-lg bg-slate-800 px-4 py-2 hover:text-slate-100"
        >
          <Icon className="h-12 w-12" />
          <div>
            <h3 className="text-xl font-bold tracking-wide underline">
              {name}
            </h3>
            {comment && <p className="text-slate-400">{comment}</p>}
          </div>
        </a>
      </motion.li>
    );
  else
    return (
      <motion.li {...props}>
        <Link
          to={to}
          className="flex items-center gap-4 rounded-lg bg-slate-800 px-4 py-2 hover:text-slate-100"
        >
          <Icon className="h-12 w-12" />
          <div>
            <h3 className="text-xl font-bold tracking-wide underline">
              {name}
            </h3>
            {comment && <p className="text-slate-400">{comment}</p>}
          </div>
        </Link>
      </motion.li>
    );
}

export default LinkCard;
