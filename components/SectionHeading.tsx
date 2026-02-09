"use client";

import { motion } from "framer-motion";
import { useReducedMotion, useInView } from "@/lib/hooks";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  const reducedMotion = useReducedMotion();
  const [ref, inView] = useInView(0.3);

  return (
    <div ref={ref} className="mb-10 px-6 sm:px-8 md:px-12">
      {/* Label with animated line */}
      <motion.div
        className="mb-2 flex items-center gap-2"
        initial={reducedMotion ? {} : { opacity: 0, x: -10 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div
          className="h-[1px] bg-accent/60"
          initial={{ width: 0 }}
          animate={inView ? { width: 24 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent/70">
          {label}
        </p>
      </motion.div>

      {/* Title with clip reveal */}
      <div className="overflow-hidden">
        <motion.h2
          className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl"
          initial={reducedMotion ? {} : { y: "100%" }}
          animate={inView ? { y: "0%" } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h2>
      </div>

      {description && (
        <motion.p
          className="mt-3 max-w-md text-sm leading-relaxed text-text-muted sm:text-base"
          initial={reducedMotion ? {} : { opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
