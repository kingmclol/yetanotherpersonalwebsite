import { motion, stagger } from "motion/react";
import { noAnimation } from "../utils/animationVariants";

function Section({
  children,
  className,
  animateOnce = false,
  staggerChildren = 0.2,
  delayChildren = 0,
  variants = noAnimation,
  layout = false,
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
      layout={layout}
    >
      {children}
    </motion.div>
  );
}

export default Section;
