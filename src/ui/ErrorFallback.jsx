import { motion, stagger } from "motion/react";
import { fadeInFromBottom } from "../utils/animationVariants";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
// Slide in from bottom
const variants = fadeInFromBottom;

function ErrorFallback({ error, resetErrorBoundary }) {
  const navigate = useNavigate();
  function handleReset() {
    // does nothing lol since instead of window.location.replace("/") using navigate instead
    resetErrorBoundary();

    navigate("/");
  }
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <motion.div
        variants={variants}
        transition={{
          delayChildren: stagger(0.1),
        }}
        initial="initial"
        animate="animate"
        className="flex h-3/4 max-h-96 w-3/4 max-w-4xl flex-col justify-around gap-8 border-2 border-slate-700 px-8 py-8"
      >
        <motion.div
          variants={variants}
          className="flex items-center justify-between"
        >
          <h1 className="text-3xl font-bold tracking-wide">
            welp. something went wrong.
          </h1>
          <motion.img
            whileHover={{
              rotate: [0, -10, 10, -6, 12, 0],
              transition: {
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                repeatDelay: 0.5,
              },
            }}
            animate={{ rotate: 0 }}
            className="h-32 w-32"
            src="/ganyu_upset.webp"
            loading="eager"
            alt="crashing out sticker"
          />
        </motion.div>
        <motion.p
          variants={variants}
          className="text-md rounded-lg bg-slate-400 px-4 py-4 text-slate-800"
        >
          {error.message}
        </motion.p>
        <Button
          onClick={handleReset}
          className="mx-auto max-w-52 cursor-pointer rounded-full bg-slate-700 px-4 py-2 hover:bg-slate-600"
        >
          return home
        </Button>
      </motion.div>
    </main>
  );
}

export default ErrorFallback;
