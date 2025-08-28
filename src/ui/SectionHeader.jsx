import { motion } from "motion/react";
import { fadeInFromBottom } from "../utils/animationVariants";
function SectionHeader({ children, textSize = "2xl" }) {
  return (
    <motion.h2
      variants={fadeInFromBottom}
      className={`mb-4 text-center text-${textSize} mx-auto max-w-lg font-semibold tracking-wide`}
    >
      {children}
    </motion.h2>
  );
}
export default SectionHeader;
