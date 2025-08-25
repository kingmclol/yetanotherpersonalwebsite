import { motion } from "motion/react";
import { fadeInFromBottom } from "../utils/animationVariants";
import TypeWriterText from "../ui/TypeWriterText";
import { usePreferences } from "../contexts/PreferencesProvider";

function About() {
  const { reducedMotion } = usePreferences();
  return (
    <>
      <motion.h1
        variants={fadeInFromBottom}
        initial="initial"
        animate="animate"
        className="tacking-wide text-center text-4xl font-bold"
      >
        {!reducedMotion ? (
          <TypeWriterText loop={false} words={["About Me"]} />
        ) : (
          "About Me"
        )}
      </motion.h1>
    </>
  );
}

export default About;
