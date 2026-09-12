import { motion, stagger } from "motion/react";
import { fadeInFromBottom, fadeInFromLeft } from "../utils/animationVariants";
import SectionList from "./SectionList";
function QAList({ children }) {
  return (
    <SectionList
      childVariants={fadeInFromLeft}
      childrenUseViewport

    >{children}</SectionList>

    // <motion.ul
    //   variants={fadeInFromBottom}
    //   className="space-y-8"
    //   whileInView="animate"
    //   initial="initial"
    //   transition={{
    //     delayChildren: stagger(0.2),
    //   }}
    // >
    //   {children}
    // </motion.ul>
  );
}

export default QAList;
