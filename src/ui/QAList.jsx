import { motion, stagger } from "motion/react";
import { fadeInFromBottom } from "../utils/animationVariants";
function QAList({ children }) {
  return (
    <motion.ul
      variants={fadeInFromBottom}
      className="space-y-8"
      whileInView="animate"
      initial="initial"
      transition={{
        delayChildren: stagger(0.2),
      }}
    >
      {children}
    </motion.ul>
  );
}

export default QAList;
