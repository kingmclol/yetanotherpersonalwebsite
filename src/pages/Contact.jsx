import { Link, useOutletContext } from "react-router-dom";
import ScrollProgress from "../ui/ScrollProgress";
import { motion } from "motion/react";
import { fadeInFromLeft } from "../utils/animationVariants";
import Section from "../ui/Section";
import Divider from "../ui/Divider";
function Contact() {
  const { containerRef } = useOutletContext();
  return (
    <>
      <ScrollProgress containerRef={containerRef} />
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
