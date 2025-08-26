import { fadeInFromBottom } from "../utils/animationVariants";
import { motion } from "motion/react";
function SectionHeader({ children, text = "2xl" }) {
  return (
    <motion.h2
      variants={fadeInFromBottom}
      className={`mb-4 text-center text-${text} mx-auto max-w-lg font-semibold tracking-wide`}
    >
      {children}
    </motion.h2>
  );
}
export default SectionHeader;
