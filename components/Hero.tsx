"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useReducedMotion } from "@/lib/hooks";
import { useLocale } from "@/lib/locale-context";

const floatingShapes = [
  { size: 80, x: "10%", y: "20%", delay: 0, cls: "animate-float-1 bg-gold/[0.06]" },
  { size: 120, x: "75%", y: "15%", delay: 1, cls: "animate-float-2 bg-gold-light/[0.04]" },
  { size: 60, x: "85%", y: "60%", delay: 2, cls: "animate-float-3 bg-gold/[0.04]" },
  { size: 100, x: "20%", y: "70%", delay: 0.5, cls: "animate-float-2 bg-gold-dim/[0.06]" },
  { size: 40, x: "50%", y: "30%", delay: 1.5, cls: "animate-float-1 bg-gold-light/[0.04]" },
];

export default function Hero() {
  const reduced = useReducedMotion();
  const { t } = useLocale();

  const titleLines = [t.hero.catch, t.hero.catchSub];

  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-[#1c1917] via-[#211f1b] to-[#1c1a17]" />

      {/* Hero image */}
      <div className="absolute inset-0">
        <Image
          src="/images/photos/photo-3.jpg"
          alt="DHP HOSPITALITY"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
      </div>

      {/* Morphing blob */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[400px] w-[400px] animate-morph bg-gradient-to-br from-gold/10 via-gold-light/5 to-transparent blur-3xl" />
      </div>

      {/* Floating shapes */}
      {floatingShapes.map((s, i) => (
        <motion.div
          key={i}
          className={`pointer-events-none absolute rounded-full blur-xl ${s.cls}`}
          style={{ width: s.size, height: s.size, left: s.x, top: s.y }}
          initial={reduced ? { opacity: 0.5 } : { opacity: 0, scale: 0 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.2, delay: s.delay + 0.5, ease: "easeOut" }}
        />
      ))}

      {/* Spinning decorative rings */}
      <div className="pointer-events-none absolute right-[-60px] top-[20%] h-[200px] w-[200px] animate-spin-slow rounded-full border border-gold/[0.06] sm:right-[-30px]" />
      <div className="pointer-events-none absolute left-[-40px] bottom-[30%] h-[150px] w-[150px] animate-spin-slow rounded-full border border-gold-light/[0.04]" style={{ animationDirection: "reverse", animationDuration: "30s" }} />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-start justify-end px-6 pb-24 sm:px-8 md:px-12 lg:px-20">
        {/* Label */}
        <motion.div
          className="mb-4 overflow-hidden"
          initial={reduced ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.p
            className="text-xs font-medium uppercase tracking-[0.3em] text-gold/60 sm:text-sm"
            initial={reduced ? {} : { y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            DHP HOSPITALITY
          </motion.p>
        </motion.div>

        {/* Title - line by line reveal */}
        <h1 className="mb-5 flex flex-col gap-1 text-[1.8rem] font-bold leading-[1.2] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          {titleLines.map((line, i) => (
            <span key={i} className="overflow-hidden">
              <motion.span
                className={`inline-block ${i === 1 ? "bg-gradient-to-r from-gold via-gold-light to-gold animate-text-gradient" : ""}`}
                initial={reduced ? {} : { y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.div
          className="mb-8 max-w-[360px] sm:max-w-md"
          initial={reduced ? {} : { opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
        >
          <p className="text-sm leading-relaxed text-white/50 sm:text-base">
            {t.hero.sub1}
          </p>
          <p className="text-sm leading-relaxed text-white/50 sm:text-base">
            {t.hero.sub2}
          </p>
        </motion.div>

        {/* CTA buttons */}
        <div className="flex gap-3">
          <motion.a
            href="#business"
            className="relative overflow-hidden rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-black transition-shadow active:scale-95 sm:px-8 sm:text-base"
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">{t.hero.cta1}</span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
          </motion.a>
          <motion.a
            href="#contact"
            className="rounded-full border border-gold/30 px-7 py-3.5 text-sm font-medium text-gold/90 backdrop-blur-sm active:scale-95 sm:px-8 sm:text-base"
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.35, ease: "easeOut" }}
            whileTap={{ scale: 0.95 }}
          >
            {t.hero.cta2}
          </motion.a>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
        initial={reduced ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
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
      </motion.div>
    </section>
  );
}
