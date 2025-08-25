import { motion, stagger } from "motion/react";
import { fadeInFromLeft } from "../utils/animationVariants";

function Section({
  children,
  className,
  animateOnce = false,
  staggerChildren = 0.2,
  delayChildren = 0,
  variants = fadeInFromLeft,
  duration = 0.4,
}) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="initial"
      whileInView="animate"
      transition={{
        duration,
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
