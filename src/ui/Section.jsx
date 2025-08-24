import { motion, stagger } from "motion/react";
import { fadeInFromLeft } from "../utils/animationVariants";

const variants = fadeInFromLeft;
function Section({
  children,
  className,
  animateOnce = false,
  staggerChildren = 0.2,
  delayChildren = 0,
}) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="initial"
      whileInView="animate"
      transition={{
        duration: 0.5,
        delayChildren: stagger(staggerChildren, {
          startDelay: delayChildren,
        }),
      }}
      viewport={{
        once: animateOnce,
        amount: "some",
      }}
    >
      {children}
    </motion.div>
  );
}

export default Section;
