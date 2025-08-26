import { motion, stagger } from "motion/react";
import { fadeInFromBottom, noAnimation } from "../utils/animationVariants";

function Section({
  children,
  className,
  animateOnce = false,
  staggerChildren = 0.2,
  delayChildren = 0,
  variants = noAnimation,
}) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="initial"
      whileInView="animate"
      transition={{
        delayChildren: stagger(staggerChildren, {
          startDelay: delayChildren,
        }),
      }}
      exit="exit"
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
