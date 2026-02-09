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
  const [ref, inView] = useInView(0.2);

  return (
    <div ref={ref} className="mb-10 px-6 sm:px-8 md:px-12">
      <motion.div
        initial={reducedMotion ? {} : { opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-2 flex items-center gap-2">
          <div className="h-[1px] w-6 bg-gold/40" />
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold/60">
            {label}
          </p>
        </div>

        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
          {title}
        </h2>

        {description && (
          <p className="mt-3 max-w-md text-sm leading-relaxed text-text-muted sm:text-base">
            {description}
          </p>
        )}
      </motion.div>
    </div>
  );
}
