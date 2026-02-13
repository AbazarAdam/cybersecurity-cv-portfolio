"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-40 h-1 w-full origin-left bg-gradient-to-r from-neon-blue via-neon-blue-bright to-neon-blue"
      style={{
        scaleX,
        boxShadow: "0 0 10px rgba(0, 191, 255, 0.5), 0 0 20px rgba(0, 191, 255, 0.3)"
      }}
    />
  );
}
