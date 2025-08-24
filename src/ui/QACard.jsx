import { motion, stagger } from "motion/react";
import { fadeInFromBottom, fadeInFromLeft } from "../utils/animationVariants";
function QACard({ title, children }) {
  return (
    <motion.li
      variants={fadeInFromBottom}
      transition={{ delayChildren: stagger(0.2) }}
    >
      <motion.h2
        variants={fadeInFromBottom}
        className="mb-6 text-xl font-semibold tracking-wide underline"
      >
        Q: {title}
      </motion.h2>
      <motion.div variants={fadeInFromLeft} className="ml-8 max-w-2xl">
        {children}
      </motion.div>
    </motion.li>
  );
}

export default QACard;
