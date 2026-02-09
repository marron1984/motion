"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useReducedMotion } from "@/lib/hooks";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.4, 0.8]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[600px] w-full overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0"
        style={
          reducedMotion
            ? {}
            : { y: imageY, scale: imageScale }
        }
      >
        <Image
          src="/images/hero.svg"
          alt="Hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Overlay gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80"
        style={reducedMotion ? {} : { opacity: overlayOpacity }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-start justify-end px-6 pb-20 sm:px-8 md:px-12 lg:px-20"
        style={reducedMotion ? {} : { y: textY }}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeUp}
          className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent/80 sm:text-sm"
        >
          Motion Portfolio
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="mb-4 max-w-[320px] text-[2rem] font-bold leading-[1.15] tracking-tight text-white sm:max-w-md sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Design that
          <br />
          <span className="text-accent">moves</span> you.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mb-8 max-w-[280px] text-sm leading-relaxed text-white/70 sm:max-w-sm sm:text-base"
        >
          Crafting mobile experiences with thoughtful motion and pixel-perfect detail.
        </motion.p>

        <motion.div variants={fadeUp} className="flex gap-3">
          <button className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition-transform active:scale-95 sm:px-8 sm:text-base">
            View Work
          </button>
          <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-sm transition-transform active:scale-95 sm:px-8 sm:text-base">
            Contact
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
        animate={reducedMotion ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-10 w-6 rounded-full border-2 border-white/30 p-1">
          <motion.div
            className="h-2 w-full rounded-full bg-white/60"
            animate={reducedMotion ? {} : { y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
