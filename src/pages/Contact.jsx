import { Link } from "react-router-dom";
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
import { usePreferences } from "../contexts/PreferencesProvider";
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
      <Section>
        <SectionHeader>Extras</SectionHeader>
        <Section className="flex flex-col items-center justify-center gap-4">
          <p className="text-slate-500 italic">
            You've seen this all before, so here's some extra stuff
          </p>
          <LoadingAnimation />
          <p className="text-center">
            By the way, this isn't loading anything.{" "}
            {reducedMotion
              ? "You have motion off so it's not really fun to watch."
              : "I'm just showing the cool animation."}
          </p>

          <Link
            to="/i-want-to-break-this-website"
            className="text-semibold mx-auto tracking-wide text-red-500"
          >
            Boring. I want to cause an error, because I can.
          </Link>
          <p>
            You are currently <AuthStatusTag />
          </p>
          <LoginLogoutButton />
        </Section>
      </Section>
    </>
  );
}

export default Contact;
