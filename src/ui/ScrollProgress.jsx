import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";
function ScrollProgress({ containerRef }) {
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001,
  });
  useEffect(() => {
    // for some reason on initial render it doesn't always run the onchange for the scrollYProgress or smth
    // So check manually on mount
    if (scrollYProgress.current === 1) setIsComplete(true);
    const unsubscribe = scrollYProgress.on("change", (v) => {
      setIsComplete(v >= 1);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <motion.div
      className="fixed right-0 bottom-0 left-0 z-10 h-1.5 bg-fuchsia-400"
      style={{
        scaleX,
        originX: 0,
      }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
    ></motion.div>
  );
}

export default ScrollProgress;
