import { motion } from "motion/react";
import { buttonVariants } from "../utils/animationVariants";

function Button({
  className = "px-4 py-2 bg-slate-700 rounded-full",
  onClick,
  children,
}) {
  return (
    <motion.button
      variants={buttonVariants}
      onClick={() => onClick?.()}
      whileHover="whileHover"
      whileTap="whileTap"
      className={className}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {children}
    </motion.button>
  );
}

export default Button;
