"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useReducedMotion, useInView } from "@/lib/hooks";
import { useLocale } from "@/lib/locale-context";

function AnimatedCounter({
  value,
  inView,
  reducedMotion,
}: {
  value: number;
  inView: boolean;
  reducedMotion: boolean;
}) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    if (reducedMotion) {
      setCount(value);
      return;
    }

    const duration = 1500;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [inView, value, reducedMotion]);

  return <>{count}</>;
}

export default function Stats() {
  const reducedMotion = useReducedMotion();
  const [ref, inView] = useInView(0.2);
  const { t } = useLocale();
  const stats = t.stats.items;

  return (
    <section className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 animate-morph bg-gold/[0.02] blur-[100px]" />
      </div>

      <div
        ref={ref}
        className="relative z-10 grid grid-cols-2 gap-4 px-6 sm:grid-cols-4 sm:gap-6 sm:px-8 md:px-12"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="relative overflow-hidden rounded-2xl border border-border bg-surface p-5 text-center sm:p-6"
            initial={
              reducedMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 16, scale: 0.97 }
            }
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              duration: 0.45,
              delay: i * 0.06,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <motion.div
              className="absolute left-0 right-0 top-0 h-[2px]"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.15 + i * 0.06,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{ backgroundColor: stat.accent, transformOrigin: "left" }}
            />

            <motion.p
              className="text-3xl font-black tracking-tight sm:text-4xl"
              style={{ color: stat.accent }}
            >
              <AnimatedCounter
                value={stat.value}
                inView={inView}
                reducedMotion={reducedMotion}
              />
              {stat.suffix}
            </motion.p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-text-muted">
              {stat.label}
            </p>

            <div
              className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full blur-2xl"
              style={{ backgroundColor: `${stat.accent}08` }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
