import contacts from "../data/contacts";
import ContactItem from "./ContactItem";
function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 text-zinc-400 mt-8 pb-2">
      You've reached the end of the page.
      <div className="flex flex-wrap gap-4">
        {contacts.map((contact) => (
          <ContactItem contact={contact} key={contact.name} />
        ))}
      </div>
    </footer>
  );
}

export default Footer;
