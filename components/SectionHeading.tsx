"use client";

import { motion } from "framer-motion";
import { useReducedMotion, useInView } from "@/lib/hooks";
import { fadeUp, staggerContainer, reducedMotionVariants } from "@/lib/motion";

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
  const [ref, inView] = useInView({ threshold: 0.3 });
  const variants = reducedMotion ? reducedMotionVariants : fadeUp;

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="mb-10 px-6 sm:px-8 md:px-12"
    >
      <motion.p
        variants={variants}
        className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-accent/70"
      >
        {label}
      </motion.p>
      <motion.h2
        variants={variants}
        className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={variants}
          className="mt-3 max-w-md text-sm leading-relaxed text-text-muted sm:text-base"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
