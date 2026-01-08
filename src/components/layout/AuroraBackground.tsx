"use client";

import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#050505]">
      {/* Primary Green Aurora - DESKTOP ONLY */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [-20, 20, -20],
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="hidden md:block absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-alsaha-green blur-[150px] rounded-full opacity-20"
      />

      {/* Secondary Deep Aurora - DESKTOP ONLY */}
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
          x: [20, -20, 20],
          y: [20, -20, 20],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="hidden md:block absolute top-[40%] right-[-10%] w-[60vw] h-[60vw] bg-[#5da335] blur-[180px] rounded-full opacity-10"
      />

      {/* Mobile Static Fallback - OPTIMIZED */}
      <div className="md:hidden absolute top-[-10%] left-[-10%] w-[120%] h-[50%] bg-[#72BF44] blur-[100px] opacity-[0.08] rounded-full pointer-events-none" />

      {/* Bottom Ambience */}
      <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-[#050505] to-transparent" />
    </div>
  );
}
