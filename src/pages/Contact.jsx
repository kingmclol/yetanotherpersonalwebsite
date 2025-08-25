import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Divider from "../ui/Divider";
import Section from "../ui/Section";
import { fadeInFromBottom, fadeInFromLeft } from "../utils/animationVariants";
import TypeWriterText from "../ui/TypeWriterText";
import { usePreferences } from "../contexts/PreferencesProvider";
function Contact() {
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
          <TypeWriterText loop={false} words={["Contacts"]} />
        ) : (
          "Contacts"
        )}
      </motion.h1>
      <Section>
        <motion.p variants={fadeInFromLeft}>
          Contact links in bigger format here
        </motion.p>
        <motion.p variants={fadeInFromLeft}>just because I can</motion.p>
        <motion.p variants={fadeInFromLeft}>and so more animations</motion.p>
      </Section>
      <Divider />
      <Link
        to="/i-want-to-break-this-website"
        className="text-semibold tracking-wide text-red-500"
      >
        Boring. I want to cause an error, because I can.
      </Link>
    </>
  );
}

export default Contact;
