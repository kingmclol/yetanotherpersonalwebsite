import { motion } from "motion/react";
import { useUser } from "./useUser";
function AuthStatusTag() {
  const { isAuthenticated } = useUser();
  // text-green-500, text-red-500
  const glowColor = isAuthenticated ? "#22c55e" : "#ef4444";

  return (
    <motion.span
      animate={{
        textShadow: [
          `0 0 0px ${glowColor}`,
          `0 0 16px ${glowColor}`,
          `0 0 0px ${glowColor}`,
        ],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "loop",
      }}
      className={`font-bold tracking-wide uppercase ${isAuthenticated ? "text-green-500" : "text-red-500"}`}
    >
      {isAuthenticated ? "authenticated" : "unauthenticated"}
    </motion.span>
  );
}

export default AuthStatusTag;
