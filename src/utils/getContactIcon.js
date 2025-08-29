import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdBrokenImage } from "react-icons/md";
// Honestly there's definitely a better way to handle this mapping lol
// Probably store the svgs in the contacts data + place them in assets

/**
 * Maps contact service names to their corresponding icons.
 * @param {string} serviceName - The name of the service.
 * @returns {JSX.Element} The icon component for the specified service.
 */
export function getContactIcon(serviceName) {
  switch (serviceName.toLowerCase()) {
    case "github":
      return FaGithub;
    case "instagram":
      return FaInstagram;
    case "linkedin":
      return FaLinkedin;
    case "email":
      return IoMdMail;
    case "discord":
      return FaDiscord;
    default:
      console.log(`Icon for ${serviceName} not accounted for.`);
      return MdBrokenImage;
  }
}
