"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useReducedMotion } from "@/lib/hooks";
import { useLocale } from "@/lib/locale-context";
import SectionHeading from "./SectionHeading";

export default function Features() {
  const reducedMotion = useReducedMotion();
  const { t } = useLocale();
  const items = t.pillars.items;
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
          Math.floor(progress * items.length),
          items.length - 1
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
  }, [items.length]);

  const f = items[activeIndex];

  return (
    <section id="business" className="relative">
      <div className="py-16">
        <SectionHeading
          label={t.pillars.label}
          title={t.pillars.title}
          description={t.pillars.description}
        />
      </div>

      <div
        ref={containerRef}
        className="relative"
        style={{ height: `${items.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Background glow */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`bg-${activeIndex}`}
              className="pointer-events-none absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 animate-pulse-glow rounded-full blur-[120px]"
                style={{ backgroundColor: `${f.accent}15` }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Progress bar */}
          <div className="absolute left-6 right-6 top-4 z-20 h-1 rounded-full bg-white/5 sm:left-8 sm:right-8">
            <motion.div
              className="h-full rounded-full bg-gold"
              animate={{
                width: `${((activeIndex + 1) / items.length) * 100}%`,
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {/* Step dots */}
          <div className="absolute left-6 right-6 top-10 z-20 flex justify-between sm:left-8 sm:right-8">
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                className="relative flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold"
                animate={{
                  backgroundColor:
                    i <= activeIndex
                      ? `${item.accent}25`
                      : "rgba(28,28,28,0.8)",
                  color: i <= activeIndex ? item.accent : "#555",
                  scale: i === activeIndex ? 1.2 : i < activeIndex ? 1 : 0.8,
                }}
                transition={{
                  duration: 0.4,
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
              >
                {item.num}
                {i === activeIndex && (
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ border: `2px solid ${item.accent}` }}
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
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
                    : { opacity: 0, y: 40, scale: 0.92, rotateX: 8 }
                }
                animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                exit={
                  reducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: -30, scale: 0.96, rotateX: -4 }
                }
                transition={
                  reducedMotion
                    ? { duration: 0.01 }
                    : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                }
                className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-2xl sm:max-w-md"
                style={{ perspective: 1000 }}
              >
                {/* Shimmer line */}
                <div className="absolute left-0 right-0 top-0 z-10 h-[2px] overflow-hidden">
                  <motion.div
                    className="h-full w-1/3"
                    style={{ background: `linear-gradient(90deg, transparent, ${f.accent}, transparent)` }}
                    initial={{ x: "-100%" }}
                    animate={{ x: "300%" }}
                    transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
                  />
                </div>

                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={f.id === 1 ? "/images/photos/photo-1.jpg" : f.id === 2 ? "/images/photos/photo-20.jpg" : "/images/photos/photo-11.jpg"}
                    alt={f.title}
                    fill
                    sizes="(max-width: 640px) 90vw, 448px"
                    className="object-cover"
                  />
                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.25 }}
                    transition={{ duration: 0.8 }}
                    style={{
                      background: `linear-gradient(135deg, ${f.accent}40, transparent 60%)`,
                    }}
                  />
                </div>
                <div className="p-6">
                  <motion.div
                    className="mb-1 inline-block rounded-full px-3 py-1 text-xs font-semibold"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 400, damping: 25 }}
                    style={{
                      backgroundColor: `${f.accent}15`,
                      color: f.accent,
                    }}
                  >
                    {f.subtitle}
                  </motion.div>
                  <motion.h3
                    className="mb-2 text-xl font-bold text-white"
                    initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                  >
                    {f.title}
                  </motion.h3>
                  <motion.p
                    className="text-sm leading-relaxed text-text-muted"
                    initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.4 }}
                  >
                    {f.description}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
