"use client";

import { motion } from "framer-motion";
import { useReducedMotion, useInView } from "@/lib/hooks";
import { fadeIn, reducedMotionVariants } from "@/lib/motion";

export default function Footer() {
  const reducedMotion = useReducedMotion();
  const [ref, inView] = useInView(0.3);
  const variants = reducedMotion ? reducedMotionVariants : fadeIn;

  return (
    <motion.footer
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="border-t border-border px-6 py-8 sm:px-8"
    >
      <div className="mx-auto flex max-w-md flex-col items-center gap-4 text-center">
        <p className="text-xs text-text-muted">
          Designed with motion in mind.
        </p>
        <div className="flex gap-6">
          {["Twitter", "GitHub", "Dribbble"].map((name) => (
            <button
              key={name}
              className="text-xs text-text-muted transition-colors active:text-accent"
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
