import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Divider from "../ui/Divider";
import Section from "../ui/Section";
import { fadeInFromLeft } from "../utils/animationVariants";
import PageTitle from "../ui/PageTitle";
import LoadingAnimation from "../ui/LoadingAnimation";
import SectionHeader from "../ui/SectionHeader";
import contacts from "../data/contacts";
import ContactCard from "../ui/ContactCard";
function Contact() {
  return (
    <>
      <PageTitle title="Contacts" subtitle="Plus extra stuff not in footer" />
      <Section className="flex flex-col gap-4">
        {/* <motion.p variants={fadeInFromLeft}>
          Contact links in bigger format here
        </motion.p>
        <motion.p variants={fadeInFromLeft}>just because I can</motion.p>
        <motion.p variants={fadeInFromLeft}>and so more animations</motion.p> */}
        {contacts.map((contact) => (
          <ContactCard contact={contact} key={contact.name} />
        ))}
      </Section>
      <Divider />
      <Section>
        <SectionHeader>Extras</SectionHeader>
        <Section className="flex flex-col items-center justify-center gap-4">
          <p className="text-slate-500 italic">
            You've seen this all before, so here's some extra stuff
          </p>
          <LoadingAnimation />
          <p className="text-center">This isn't loading anything by the way</p>

          <Link
            to="/i-want-to-break-this-website"
            className="text-semibold mx-auto tracking-wide text-red-500"
          >
            Boring. I want to cause an error, because I can.
          </Link>
        </Section>
      </Section>
    </>
  );
}

export default Contact;
