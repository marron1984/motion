"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useReducedMotion, useInView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";

const cards = [
  { title: "Strategy", desc: "Research-driven insights for digital products.", num: "01", accent: "#c8a2ff" },
  { title: "Design", desc: "Pixel-perfect interfaces that feel alive.", num: "02", accent: "#e879f9" },
  { title: "Development", desc: "Clean, performant code built to last.", num: "03", accent: "#7dd3fc" },
  { title: "Motion", desc: "Animations that bring your product to life.", num: "04", accent: "#fca5a5" },
  { title: "Launch", desc: "Seamless deployment and ongoing support.", num: "05", accent: "#86efac" },
];

export default function HorizontalScroll() {
  const reducedMotion = useReducedMotion();
  const [ref, inView] = useInView(0.1);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20">
      <SectionHeading
        label="Process"
        title="How we work"
        description="Our proven workflow from concept to launch."
      />

      <div ref={ref} className="relative">
        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto px-6 pb-4 sm:gap-5 sm:px-8 md:px-12"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.num}
              className="relative flex-none overflow-hidden rounded-2xl border border-border bg-surface"
              style={{
                width: "min(280px, 75vw)",
                scrollSnapAlign: "start",
              }}
              initial={
                reducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, x: 40, scale: 0.95 }
              }
              animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={reducedMotion ? {} : { y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Large number background */}
              <div className="relative p-6 pb-8">
                <motion.span
                  className="absolute -right-2 -top-4 text-[80px] font-black leading-none"
                  style={{ color: `${card.accent}08` }}
                  initial={reducedMotion ? {} : { opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    delay: 0.3 + i * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  }}
                >
                  {card.num}
                </motion.span>

                {/* Accent dot */}
                <motion.div
                  className="mb-4 h-3 w-3 rounded-full"
                  style={{ backgroundColor: card.accent }}
                  initial={reducedMotion ? {} : { scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{
                    delay: 0.2 + i * 0.1,
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                  }}
                />

                <h3 className="relative mb-2 text-lg font-bold text-white">
                  {card.title}
                </h3>
                <p className="relative text-sm leading-relaxed text-text-muted">
                  {card.desc}
                </p>
              </div>

              {/* Bottom accent bar */}
              <motion.div
                className="h-1"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  backgroundColor: card.accent,
                  transformOrigin: "left",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Gradient edges for scroll hint */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}
