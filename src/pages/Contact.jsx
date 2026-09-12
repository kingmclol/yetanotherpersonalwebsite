import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { usePreferences } from "../contexts/PreferencesProvider";
import contacts from "../data/contacts";
import AuthStatusTag from "../features/auth/AuthStatusTag";
import LoginLogoutButton from "../features/auth/LoginLogoutButton";
import ContactCard from "../ui/ContactCard";
import Divider from "../ui/Divider";
import LoadingAnimation from "../ui/LoadingAnimation";
import PageTitle from "../ui/PageTitle";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import SectionList from "../ui/SectionList";
import { fadeInFromLeft } from "../utils/animationVariants";
function Contact() {
  const { reducedMotion } = usePreferences();
  return (
    <>
      <PageTitle title="Contacts" subtitle="Plus extra stuff not in footer" />
      <SectionList>
        {contacts.map((contact) => (
          <ContactCard contact={contact} key={contact.name} />
        ))}
      </SectionList>
      <Divider />
      <Section staggerChildren={0.2}>
        <SectionHeader>Extras</SectionHeader>
        <motion.div
          className="flex flex-col items-center justify-center gap-4"
          variants={fadeInFromLeft}
        >
          <p className="text-slate-500 italic">
            You've seen this all before, so here's some extra stuff
          </p>
          <LoadingAnimation />
          <p className="text-center">
            By the way, this isn't loading anything.{" "}
            {reducedMotion
              ? "You have animations off so it's not fun to watch :("
              : "I'm just showing the cool animation :)"}
          </p>

          <Link
            to="/i-want-to-break-this-website"
            className="text-semibold mx-auto tracking-wide text-red-500"
          >
            Boring. I want to cause an error, because I can!!1!!!1!1!1
          </Link>
        </motion.div>
      </Section>
      <Divider />
      <Section className="text-center" staggerChildren={0.2}>
        <motion.p variants={fadeInFromLeft} className="mb-4">
          You are currently <AuthStatusTag />
        </motion.p>
        <motion.p variants={fadeInFromLeft}>
          <LoginLogoutButton />
        </motion.p>
      </Section>
    </>
  );
}

export default Contact;
