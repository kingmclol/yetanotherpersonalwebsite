import { motion } from "motion/react";
import { fadeInFromLeft } from "../utils/animationVariants";
import { getContactIcon } from "../utils/getContactIcon";
function ContactCard({ contact }) {
	const {name, comment, url} = contact
  const Icon = getContactIcon(name);
  return (
    <motion.a
      href={url}
      variants={fadeInFromLeft}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="flex gap-4 rounded-lg bg-slate-800 px-4 py-2"
    >
      <Icon className="h-12 w-12" />
      <div>
        <h3 className="text-xl font-bold tracking-wide underline">
          {name}
        </h3>
        <p className="text-slate-400">{comment}</p>
      </div>
    </motion.a>
  );
}

export default ContactCard;
