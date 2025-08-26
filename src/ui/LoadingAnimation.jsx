import { motion } from "motion/react";
import { FaReact } from "react-icons/fa6";
import { usePreferences } from "../contexts/PreferencesProvider";
import TypeWriterText from "./TypeWriterText";

function LoadingAnimation() {
  const { reducedMotion } = usePreferences();
  const AnimatedIcon = motion.create(FaReact);
  return (
    <div className="flex flex-col items-center justify-center">
      <AnimatedIcon
        animate={!reducedMotion ? { rotate: 360 } : false}
        transition={{
          type: "spring",
          visualDuration: 1,
          bounce: 0.25,
          repeat: Infinity,
          repeatDelay: 1,
        }}
        className="h-16 w-16"
      />
      {!reducedMotion ? (
        <p className="w-20">
          Loading
          <TypeWriterText
            words={["..."]}
            delay={500}
            delayNextWord={0}
            delayHoldWord={500}
            delayDelete={0}
            showCursor={false}
          />
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default LoadingAnimation;
