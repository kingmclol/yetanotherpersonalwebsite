import { motion, stagger } from "motion/react";
import { fadeInFromBottom, fadeInFromLeft, noAnimation } from "../utils/animationVariants";
import SectionList from "./SectionList";
function QACard({ title, children, variants = noAnimation }) {
  return (
    <motion.div
      variants={variants}
      transition={{ delayChildren: stagger(0.2) }}
    >
      <motion.h2
        variants={fadeInFromBottom}
        className="mb-6 text-xl font-semibold tracking-wide underline"
      >
        Q: {title}
      </motion.h2>
      <SectionList
        childVariants={fadeInFromLeft}
        childrenUseViewport
        className="ml-8 max-w-2xl space-y-4"
        childClassName="justify-left"
      >
        {children}
      </SectionList>
    </motion.div>
  );
}

export default QACard;
