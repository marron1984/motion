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

    const duration = 1200;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [inView, value, reducedMotion]);

  return <>{count}</>;
}

export default function Stats() {
  const reducedMotion = useReducedMotion();
  const [ref, inView] = useInView(0.1);
  const { t } = useLocale();
  const stats = t.stats.items;

  return (
    <section className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 animate-morph bg-gold/[0.02] blur-[100px]" />
      </div>

      <motion.div
        ref={ref}
        className="relative z-10 grid grid-cols-2 gap-4 px-6 sm:grid-cols-4 sm:gap-6 sm:px-8 md:px-12"
        initial={reducedMotion ? {} : { opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3 }}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="relative overflow-hidden rounded-2xl border border-border bg-surface p-5 text-center sm:p-6"
          >
            <div
              className="absolute left-0 right-0 top-0 h-[2px]"
              style={{ backgroundColor: stat.accent }}
            />

            <p className="text-3xl font-black tracking-tight sm:text-4xl" style={{ color: stat.accent }}>
              <AnimatedCounter value={stat.value} inView={inView} reducedMotion={reducedMotion} />
              {stat.suffix}
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-text-muted">
              {stat.label}
            </p>

            <div
              className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full blur-2xl"
              style={{ backgroundColor: `${stat.accent}08` }}
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
