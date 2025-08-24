import { motion } from "motion/react";
import { fadeInFromBottom } from "../utils/animationVariants";
function Divider({ animateOnce = false }) {
  return (
    <motion.div
      variants={fadeInFromBottom}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: animateOnce,
      }}
      className="py-8"
    >
      <div className="text-bold mx-auto h-0.5 w-4/5 rounded-full bg-slate-400"></div>
    </motion.div>
  );
}

export default Divider;
