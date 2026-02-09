"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useReducedMotion, useInView } from "@/lib/hooks";
import { useLocale } from "@/lib/locale-context";

export default function Concept() {
  const reducedMotion = useReducedMotion();
  const [ref, inView] = useInView(0.1);
  const { t } = useLocale();

  return (
    <section id="concept" className="relative overflow-hidden py-24">
      {/* Background decoration (CSS only) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 animate-morph bg-gold/[0.02] blur-[120px]" />
      </div>

      <motion.div
        ref={ref}
        className="relative z-10 mx-auto max-w-2xl px-6 sm:px-8 md:px-12"
        initial={reducedMotion ? {} : { opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3 }}
      >
        {/* Label */}
        <div className="mb-6 flex items-center gap-3">
          <div className="h-[1px] w-8 bg-gold/40" />
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold/60">
            {t.concept.label}
          </p>
        </div>

        {/* Title */}
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
          {t.concept.title}
        </h2>

        {/* Lead */}
        <p className="mb-8 text-lg font-bold text-gold/80 sm:text-xl">
          {t.concept.lead}
        </p>

        {/* Photo pair */}
        <div className="mb-10 grid grid-cols-2 gap-3">
          <div className="relative overflow-hidden rounded-xl" style={{ aspectRatio: "4/3" }}>
            <Image src="/images/photos/photo-3.jpg" alt="Hotel exterior" fill sizes="(max-width: 640px) 50vw, 320px" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          <div className="relative overflow-hidden rounded-xl" style={{ aspectRatio: "4/3" }}>
            <Image src="/images/photos/photo-8.jpg" alt="Suite room" fill sizes="(max-width: 640px) 50vw, 320px" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>

        {/* Body */}
        <p className="mb-6 text-sm leading-[2] text-white/60 sm:text-base">{t.concept.body1}</p>
        <p className="text-sm leading-[2] text-white/60 sm:text-base">{t.concept.body2}</p>

        {/* Decorative line */}
        <div className="mt-12 h-[1px] bg-gradient-to-r from-gold/20 via-gold/40 to-gold/20" />
      </motion.div>
    </section>
  );
}
