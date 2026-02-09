"use client";

import { motion } from "framer-motion";
import { useReducedMotion, useInView } from "@/lib/hooks";

const words1 = ["DESIGN", "MOTION", "CREATIVE", "MOBILE", "ANIMATION", "PIXEL", "CRAFT", "VISUAL"];
const words2 = ["UX", "INTERFACE", "INTERACTIVE", "DIGITAL", "MODERN", "ELEGANT", "SMOOTH", "FLUID"];

export default function Marquee() {
  const reduced = useReducedMotion();
  const [ref, inView] = useInView(0.1);

  return (
    <motion.section
      ref={ref}
      className="relative overflow-hidden py-10"
      initial={reduced ? {} : { opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Gradient edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

      {/* Row 1 - left */}
      <div className="mb-3 flex whitespace-nowrap">
        <div className={reduced ? "" : "animate-marquee-left"}>
          <div className="flex gap-4">
            {[...words1, ...words1].map((w, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-4 text-2xl font-black tracking-wider text-white/[0.04] sm:text-3xl md:text-4xl"
              >
                {w}
                <span className="inline-block h-2 w-2 rounded-full bg-accent/20" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2 - right, outlined text */}
      <div className="flex whitespace-nowrap">
        <div className={reduced ? "" : "animate-marquee-right"}>
          <div className="flex gap-4">
            {[...words2, ...words2].map((w, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-4 text-2xl font-black tracking-wider sm:text-3xl md:text-4xl"
                style={{
                  WebkitTextStroke: "1px rgba(200,162,255,0.08)",
                  color: "transparent",
                }}
              >
                {w}
                <span className="inline-block h-1.5 w-1.5 rotate-45 bg-accent-hot/15" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
