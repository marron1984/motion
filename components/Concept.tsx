"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useReducedMotion, useInView } from "@/lib/hooks";
import { useLocale } from "@/lib/locale-context";

export default function Concept() {
  const reducedMotion = useReducedMotion();
  const [ref, inView] = useInView(0.15);
  const { t } = useLocale();

  return (
    <section id="concept" className="relative overflow-hidden py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 animate-morph bg-gold/[0.02] blur-[120px]" />
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-2xl px-6 sm:px-8 md:px-12">
        {/* Label with animated line */}
        <motion.div
          className="mb-6 flex items-center gap-3"
          initial={reducedMotion ? {} : { opacity: 0, x: -10 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="h-[1px] bg-gold/40"
            initial={{ width: 0 }}
            animate={inView ? { width: 32 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold/60">
            {t.concept.label}
          </p>
        </motion.div>

        {/* Title */}
        <div className="overflow-hidden">
          <motion.h2
            className="mb-2 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl"
            initial={reducedMotion ? {} : { y: "100%" }}
            animate={inView ? { y: "0%" } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {t.concept.title}
          </motion.h2>
        </div>

        {/* Lead */}
        <motion.p
          className="mb-8 text-lg font-bold text-gold/80 sm:text-xl"
          initial={reducedMotion ? {} : { opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          {t.concept.lead}
        </motion.p>

        {/* Photo pair */}
        <div className="mb-10 grid grid-cols-2 gap-3">
          <motion.div
            className="relative overflow-hidden rounded-xl"
            style={{ aspectRatio: "4/3" }}
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/images/photos/photo-7.jpg"
              alt="Lounge with kumiko wall"
              fill
              sizes="(max-width: 640px) 50vw, 320px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
          <motion.div
            className="relative overflow-hidden rounded-xl"
            style={{ aspectRatio: "4/3" }}
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/images/photos/photo-8.jpg"
              alt="Suite room"
              fill
              sizes="(max-width: 640px) 50vw, 320px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>

        {/* Body */}
        <motion.p
          className="mb-6 text-sm leading-[2] text-white/60 sm:text-base"
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {t.concept.body1}
        </motion.p>

        <motion.p
          className="text-sm leading-[2] text-white/60 sm:text-base"
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {t.concept.body2}
        </motion.p>

        {/* Decorative line */}
        <motion.div
          className="mt-12 h-[1px] bg-gradient-to-r from-gold/20 via-gold/40 to-gold/20"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </section>
  );
}
