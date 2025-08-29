import { motion } from "motion/react";
import { FaReact } from "react-icons/fa";
import { usePreferences } from "../contexts/PreferencesProvider";

const AnimatedIcon = motion.create(FaReact);

function LoadingAnimationMini() {
  const { reducedMotion } = usePreferences();
  return (
    <AnimatedIcon
      className="h-8 w-8"
      animate={!reducedMotion ? { rotate: 360 } : false}
      transition={{
        type: "spring",
        visualDuration: 1,
        bounce: 0.25,
        repeat: Infinity,
        repeatDelay: 1,
      }}
    />
  );
}

export default LoadingAnimationMini;
