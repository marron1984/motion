"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import { features } from "@/lib/data";
import { useReducedMotion } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";

function FeatureCard({
  feature,
  index,
  progress,
  total,
  reducedMotion,
}: {
  feature: (typeof features)[0];
  index: number;
  progress: MotionValue<number>;
  total: number;
  reducedMotion: boolean;
}) {
  const segmentSize = 1 / total;
  const start = index * segmentSize;
  const end = start + segmentSize;

  const opacity = useTransform(progress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, index === total - 1 ? 1 : 0]);
  const scale = useTransform(progress, [start, start + 0.05, end - 0.05, end], [0.92, 1, 1, index === total - 1 ? 1 : 0.95]);
  const y = useTransform(progress, [start, start + 0.05], [40, 0]);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center px-6"
      style={
        reducedMotion
          ? { opacity: 1 }
          : { opacity, scale, y }
      }
    >
      <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-2xl sm:max-w-md">
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={feature.image}
            alt={feature.title}
            fill
            sizes="(max-width: 640px) 90vw, 448px"
            className="object-cover"
          />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: `linear-gradient(135deg, ${feature.accent}40, transparent)`,
            }}
          />
        </div>
        <div className="p-6">
          <div
            className="mb-2 inline-block rounded-full px-3 py-1 text-xs font-semibold"
            style={{
              backgroundColor: `${feature.accent}15`,
              color: feature.accent,
            }}
          >
            0{feature.id}
          </div>
          <h3 className="mb-2 text-xl font-bold text-white">{feature.title}</h3>
          <p className="text-sm leading-relaxed text-text-muted">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Progress indicator
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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
            <motion.div
              className="h-full rounded-full bg-accent"
              style={{ width: progressWidth }}
            />
          </div>

          {/* Step indicators */}
          <div className="absolute left-6 right-6 top-8 z-20 flex justify-between sm:left-8 sm:right-8">
            {features.map((f, i) => (
              <FeatureStep
                key={f.id}
                index={i}
                total={features.length}
                progress={scrollYProgress}
              />
            ))}
          </div>

          {/* Cards */}
          {features.map((feature, i) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={i}
              progress={scrollYProgress}
              total={features.length}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureStep({
  index,
  total,
  progress,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const threshold = index / total;
  const opacity = useTransform(progress, [threshold - 0.05, threshold], [0.3, 1]);
  const scale = useTransform(progress, [threshold - 0.05, threshold], [0.8, 1]);

  return (
    <motion.div
      className="flex h-6 w-6 items-center justify-center rounded-full bg-surface-elevated text-[10px] font-bold text-white"
      style={{ opacity, scale }}
    >
      {index + 1}
    </motion.div>
  );
}
