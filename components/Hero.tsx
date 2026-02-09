"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useReducedMotion } from "@/lib/hooks";
import { useLocale } from "@/lib/locale-context";

export default function Hero() {
  const reduced = useReducedMotion();
  const { t } = useLocale();

  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-[#1c1917] via-[#211f1b] to-[#1c1a17]" />

      {/* Hero image */}
      <div className="absolute inset-0">
        <Image
          src="/images/photos/photo-22.jpg"
          alt="DHP HOSPITALITY"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
      </div>

      {/* Morphing blob (CSS only) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[400px] w-[400px] animate-morph bg-gradient-to-br from-gold/10 via-gold-light/5 to-transparent blur-3xl" />
      </div>

      {/* Spinning decorative rings (CSS only) */}
      <div className="pointer-events-none absolute right-[-60px] top-[20%] h-[200px] w-[200px] animate-spin-slow rounded-full border border-gold/[0.06] sm:right-[-30px]" />
      <div className="pointer-events-none absolute left-[-40px] bottom-[30%] h-[150px] w-[150px] animate-spin-slow rounded-full border border-gold-light/[0.04]" style={{ animationDirection: "reverse", animationDuration: "30s" }} />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* Content — instant display, no delays */}
      <div className="relative z-10 flex h-full flex-col items-start justify-end px-6 pb-24 sm:px-8 md:px-12 lg:px-20">
        <motion.div
          initial={reduced ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gold/60 sm:text-sm">
            DHP HOSPITALITY
          </p>

          <h1 className="mb-5 flex flex-col gap-1 text-[1.8rem] font-bold leading-[1.2] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            <span>{t.hero.catch}</span>
            <span className="bg-gradient-to-r from-gold via-gold-light to-gold animate-text-gradient">
              {t.hero.catchSub}
            </span>
          </h1>

          <div className="mb-8 max-w-[360px] sm:max-w-md">
            <p className="text-sm leading-relaxed text-white/50 sm:text-base">{t.hero.sub1}</p>
            <p className="text-sm leading-relaxed text-white/50 sm:text-base">{t.hero.sub2}</p>
          </div>

          <div className="flex gap-3">
            <a
              href="#business"
              className="relative overflow-hidden rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-black transition-shadow active:scale-95 sm:px-8 sm:text-base"
            >
              {t.hero.cta1}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-gold/30 px-7 py-3.5 text-sm font-medium text-gold/90 backdrop-blur-sm active:scale-95 sm:px-8 sm:text-base"
            >
              {t.hero.cta2}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <motion.div
          animate={reduced ? {} : { y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">Scroll</span>
            <div className="h-8 w-4 rounded-full border border-gold/20">
              <motion.div
                className="mx-auto mt-1 h-2 w-1 rounded-full bg-gold/40"
                animate={reduced ? {} : { y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
