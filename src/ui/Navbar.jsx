import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { motion } from "motion/react";
import clsx from "clsx";

const variants = {
  hover: {
    scale: 1.08,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  },
};

const links = [
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Projects",
    to: "/projects",
  },
  {
    label: "Contact",
    to: "/contact",
  },
  {
    label: "Blog",
    to: "/blog",
  },
];

function getNavLinkClass({ isActive }) {
  return clsx(
    "transition-colors px-4 py-2 rounded-full",
    isActive && "bg-sky-500 text-white",
    !isActive && "text-sky-300 hover:bg-slate-700",
  );
}

function Navbar() {
  return (
    <nav className="light:bg-sky-50 flex items-center justify-between border-b-2 border-slate-400 bg-slate-800 px-4 py-2">
      <Logo />
      <ul className="flex gap-4">
        {links.map((link) => (
          <motion.li
            key={link.label}
            variants={variants}
            whileHover="hover"
            whileTap="tap"
            tabIndex={-1}
          >
            <NavLink className={getNavLinkClass} to={link.to}>
              {link.label}
            </NavLink>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
