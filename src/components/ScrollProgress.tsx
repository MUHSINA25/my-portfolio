import { motion, useScroll, useSpring } from "framer-motion";

/** Thin gradient bar fixed at the top of the viewport reflecting scroll progress. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500"
      style={{ scaleX }}
    />
  );
}
