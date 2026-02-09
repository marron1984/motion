"use client";

import { motion } from "framer-motion";
import { useReducedMotion, useInView } from "@/lib/hooks";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

const smooth = [0.25, 0.46, 0.45, 0.94] as const;

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  const reducedMotion = useReducedMotion();
  const [ref, inView] = useInView(0.3);

  return (
    <div ref={ref} className="mb-10 px-6 sm:px-8 md:px-12">
      <motion.div
        className="mb-2 flex items-center gap-2"
        initial={reducedMotion ? {} : { opacity: 0, x: -8 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4, ease: smooth }}
      >
        <motion.div
          className="h-[1px] bg-gold/40"
          initial={{ width: 0 }}
          animate={inView ? { width: 24 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: smooth }}
        />
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold/60">
          {label}
        </p>
      </motion.div>

      <div className="overflow-hidden">
        <motion.h2
          className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl"
          initial={reducedMotion ? {} : { y: "100%" }}
          animate={inView ? { y: "0%" } : {}}
          transition={{ duration: 0.55, delay: 0.05, ease: [0.33, 1, 0.68, 1] }}
        >
          {title}
        </motion.h2>
      </div>

      {description && (
        <motion.p
          className="mt-3 max-w-md text-sm leading-relaxed text-text-muted sm:text-base"
          initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.15, ease: smooth }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
