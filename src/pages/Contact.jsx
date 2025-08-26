import { Link } from "react-router-dom";
import contacts from "../data/contacts";
import ContactCard from "../ui/ContactCard";
import Divider from "../ui/Divider";
import LoadingAnimation from "../ui/LoadingAnimation";
import PageTitle from "../ui/PageTitle";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import SectionList from "../ui/SectionList";
function Contact() {
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
            By the way, this isn't loading anything. I'm just showing the animation
          </p>

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
