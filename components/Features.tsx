"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { features } from "@/lib/data";
import { useReducedMotion } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";

export default function Features() {
  const reducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const totalHeight = rect.height - window.innerHeight;
        if (totalHeight <= 0) return;

        const scrolled = -rect.top;
        const progress = Math.min(Math.max(scrolled / totalHeight, 0), 1);
        const idx = Math.min(
          Math.floor(progress * features.length),
          features.length - 1
        );
        setActiveIndex(idx);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="relative">
      <div className="py-16">
        <SectionHeading
          label="Features"
          title="What we do best"
          description="Our core capabilities, refined through years of crafting digital experiences."
        />
      </div>

      <div
        ref={containerRef}
        className="relative"
        style={{ height: `${features.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Progress bar */}
          <div className="absolute left-6 right-6 top-4 z-20 h-0.5 rounded-full bg-white/10 sm:left-8 sm:right-8">
            <div
              className="h-full rounded-full bg-accent transition-all duration-300 ease-out"
              style={{
                width: `${((activeIndex + 1) / features.length) * 100}%`,
              }}
            />
          </div>

          {/* Step indicators */}
          <div className="absolute left-6 right-6 top-8 z-20 flex justify-between sm:left-8 sm:right-8">
            {features.map((f, i) => (
              <div
                key={f.id}
                className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold transition-all duration-300"
                style={{
                  backgroundColor:
                    i <= activeIndex ? "rgba(200,162,255,0.2)" : "#1c1c1c",
                  color: i <= activeIndex ? "#c8a2ff" : "#fff",
                  transform: `scale(${i <= activeIndex ? 1 : 0.8})`,
                  opacity: i <= activeIndex ? 1 : 0.3,
                }}
              >
                {i + 1}
              </div>
            ))}
          </div>

          {/* Cards */}
          <div className="flex h-full items-center justify-center px-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={
                  reducedMotion
                    ? { opacity: 1 }
                    : { opacity: 0, y: 30, scale: 0.95 }
                }
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={
                  reducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: -20, scale: 0.98 }
                }
                transition={
                  reducedMotion
                    ? { duration: 0.01 }
                    : { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
                }
                className="w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-2xl sm:max-w-md"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={features[activeIndex].image}
                    alt={features[activeIndex].title}
                    fill
                    sizes="(max-width: 640px) 90vw, 448px"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: `linear-gradient(135deg, ${features[activeIndex].accent}40, transparent)`,
                    }}
                  />
                </div>
                <div className="p-6">
                  <div
                    className="mb-2 inline-block rounded-full px-3 py-1 text-xs font-semibold"
                    style={{
                      backgroundColor: `${features[activeIndex].accent}15`,
                      color: features[activeIndex].accent,
                    }}
                  >
                    0{features[activeIndex].id}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {features[activeIndex].title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {features[activeIndex].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
