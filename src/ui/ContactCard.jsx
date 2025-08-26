import { motion } from "motion/react";
import { fadeInFromLeft } from "../utils/animationVariants";
import { getContactIcon } from "../utils/getContactIcon";
import LinkCard from "./LinkCard";
function ContactCard({ contact }) {
  const { name, comment, url } = contact;
  const Icon = getContactIcon(name);
  return (
    <LinkCard name={name} comment={comment} href={url} Icon={Icon} />
    // <motion.a
    //   href={url}
    //   variants={fadeInFromLeft}
    //   whileHover={{ scale: 1.08 }}
    //   whileTap={{ scale: 0.95 }}
    //   className="flex gap-4 rounded-lg bg-slate-800 px-4 py-2 hover:text-slate-100"
    //   target="_blank"
    // >
    //   <Icon className="h-12 w-12" />
    //   <div>
    //     <h3 className="text-xl font-bold tracking-wide underline">
    //       {name}
    //     </h3>
    //     <p className="text-slate-400">{comment}</p>
    //   </div>
    // </motion.a>
  );
}

export default ContactCard;
