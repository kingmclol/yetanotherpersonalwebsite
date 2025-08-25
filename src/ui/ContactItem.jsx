import { getContactIcon } from "../utils/getContactIcon";
import Anchor from "./Anchor";

function ContactItem({ contact }) {
  const Icon = getContactIcon(contact.name);
  return (
    <Anchor href={contact.url}>
      <Icon />
      {contact.name}
    </Anchor>
  );
  // return (
  //   <a
  //     className="flex items-center gap-1 hover:cursor-pointer hover:text-zinc-300 hover:underline"
  //     href={contact.url}
  //     target="_blank"
  //   >
  //     <span>
  //       <Icon />
  //     </span>
  //     {contact.name}
  //   </a>
  // );
}

export default ContactItem;
