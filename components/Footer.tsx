"use client";

import { motion } from "framer-motion";
import { useReducedMotion, useInView } from "@/lib/hooks";

const links = ["Twitter", "GitHub", "Dribbble", "Instagram"];

export default function Footer() {
  const reducedMotion = useReducedMotion();
  const [ref, inView] = useInView(0.3);

  return (
    <footer ref={ref} className="relative px-6 py-10 sm:px-8">
      {/* Animated top border glow */}
      <div className="absolute left-6 right-6 top-0 h-[1px] overflow-hidden sm:left-8 sm:right-8">
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-accent/40 to-transparent"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }}
        />
      </div>

      <div className="mx-auto flex max-w-md flex-col items-center gap-6 text-center">
        {/* Logo text */}
        <motion.p
          className="text-sm font-bold tracking-wider text-white/80"
          initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          MOTION
        </motion.p>

        <motion.p
          className="text-xs text-text-muted"
          initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Designed with motion in mind.
        </motion.p>

        {/* Social links with staggered entrance */}
        <div className="flex gap-6">
          {links.map((name, i) => (
            <motion.button
              key={name}
              className="text-xs text-text-muted transition-colors hover:text-accent active:text-accent"
              initial={reducedMotion ? {} : { opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.4 + i * 0.08,
                duration: 0.4,
                ease: "easeOut",
              }}
              whileHover={reducedMotion ? {} : { y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {name}
            </motion.button>
          ))}
        </div>

        <motion.p
          className="text-[10px] text-white/20"
          initial={reducedMotion ? {} : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          &copy; 2025 Motion Studio. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
