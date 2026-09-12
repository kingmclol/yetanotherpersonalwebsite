import { motion, stagger } from "motion/react";
import { fadeInFromLeft, noAnimation } from "../utils/animationVariants";
import React from "react";

function SectionList({
  children,
  className = "",
  animateOnce = false,
  staggerChildren = 0.15,
  delayChildren = 0,
  childrenUseViewport = false,
  childClassName = "",
  childVariants = fadeInFromLeft,
  variants = noAnimation,
  amount = "some",
}) {
  const items = React.Children.toArray(children);

  const childViewportProps = {
    initial: "initial",
    whileInView: "animate",
    exit: "exit",
    viewport: {
      amount: amount,
      once: animateOnce,
    },
  };

  return (
    <motion.ul
      className={`flex flex-col gap-4 justify-center items-center ${className}`}
      variants={variants}
      initial="initial"
      whileInView="animate"
      transition={{
        delayChildren: stagger(staggerChildren, {
          startDelay: delayChildren,
        }),
      }}
      viewport={{
        once: animateOnce,
        amount: amount,
      }}
    >
      {items.map((el, index) => (
        <motion.li
          key={el?.key ?? index}
          className={`w-full flex items-center justify-center ${childClassName}`}
          variants={childVariants}
          {...(childrenUseViewport ? childViewportProps : {})}
          tabIndex={-1}
        >
          {el}
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default SectionList;
