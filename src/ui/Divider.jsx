import { motion } from "motion/react";
import { fadeInFromBottom } from "../utils/animationVariants";
function getClassName(spacing) {
  switch (spacing) {
    case "tiny":
      return "py-2";
    case "small":
      return "py-4";
    case "medium":
      return "py-8";
    case "large":
      return "py-16";
    default:
      console.error("Divider spacing preset does not exist:", spacing);
      return "py-8";
  }
}
function Divider({
  animateOnce = false,
  spacing = "medium",
  noAnimate = false,
}) {
  return (
    <motion.div
      variants={fadeInFromBottom}
      initial={!noAnimate ? "initial" : ""}
      whileInView={!noAnimate ? "animate" : ""}
      viewport={{
        once: animateOnce,
      }}
      className={getClassName(spacing)}
    >
      <div className="text-bold mx-auto h-0.5 w-4/5 rounded-full bg-slate-400"></div>
    </motion.div>
  );
}

export default Divider;
