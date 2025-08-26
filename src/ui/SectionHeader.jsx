import { fadeInFromBottom } from "../utils/animationVariants";
import { motion } from "motion/react";
function SectionHeader({ children }) {
  return (
    <motion.h2
      variants={fadeInFromBottom}
      className="mb-4 text-center text-2xl font-semibold tracking-wide"
    >
      {children}
    </motion.h2>
  );
}
export default SectionHeader;
