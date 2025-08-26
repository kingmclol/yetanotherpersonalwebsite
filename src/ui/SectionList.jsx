import { motion, stagger } from "motion/react";
import { noAnimation } from "../utils/animationVariants";

function SectionList({
  children,
  className = "flex flex-col gap-4 justify-center items-center",
  animateOnce = false,
  staggerChildren = 0.2,
  delayChildren = 0,
  variants = noAnimation,
}) {
  return (
    <motion.ul
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
    </motion.ul>
  );
}

export default SectionList;
