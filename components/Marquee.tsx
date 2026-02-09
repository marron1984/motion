"use client";

import { motion } from "framer-motion";
import { useReducedMotion, useInView } from "@/lib/hooks";
import { useLocale } from "@/lib/locale-context";

export default function Marquee() {
  const reduced = useReducedMotion();
  const [ref, inView] = useInView(0.1);
  const { t } = useLocale();

  return (
    <motion.section
      ref={ref}
      className="relative overflow-hidden py-10"
      initial={reduced ? {} : { opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

      <div className="mb-3 flex whitespace-nowrap">
        <div className={reduced ? "" : "animate-marquee-left"}>
          <div className="flex gap-4">
            {[...t.marquee.row1, ...t.marquee.row1].map((w, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-4 text-2xl font-black tracking-wider text-white/[0.04] sm:text-3xl md:text-4xl"
              >
                {w}
                <span className="inline-block h-2 w-2 rounded-full bg-gold/15" />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex whitespace-nowrap">
        <div className={reduced ? "" : "animate-marquee-right"}>
          <div className="flex gap-4">
            {[...t.marquee.row2, ...t.marquee.row2].map((w, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-4 text-2xl font-black tracking-wider sm:text-3xl md:text-4xl"
                style={{
                  WebkitTextStroke: "1px rgba(201,169,110,0.06)",
                  color: "transparent",
                }}
              >
                {w}
                <span className="inline-block h-1.5 w-1.5 rotate-45 bg-gold/10" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
