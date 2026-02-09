"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PanInfo } from "framer-motion";
import Image from "next/image";
import { galleryImages } from "@/lib/data";
import { useReducedMotion, useInView } from "@/lib/hooks";
import { scaleUp, staggerContainer, reducedMotionVariants, gentleSpring } from "@/lib/motion";
import SectionHeading from "./SectionHeading";

function GalleryGrid({
  onSelect,
}: {
  onSelect: (index: number) => void;
}) {
  const reducedMotion = useReducedMotion();
  const [ref, inView] = useInView(0.1);
  const variants = reducedMotion ? reducedMotionVariants : scaleUp;

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="grid grid-cols-2 gap-3 px-6 sm:gap-4 sm:px-8 md:grid-cols-3 md:px-12"
    >
      {galleryImages.map((img, i) => (
        <motion.button
          key={img.id}
          variants={variants}
          onClick={() => onSelect(i)}
          className="group relative overflow-hidden rounded-xl bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          style={{
            aspectRatio:
              img.width > img.height ? "4/3" : "3/4",
          }}
          whileTap={{ scale: 0.97 }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-xs font-medium text-white sm:text-sm">
              {img.title}
            </p>
          </div>
        </motion.button>
      ))}
    </motion.div>
  );
}

function GalleryModal({
  selectedIndex,
  onClose,
}: {
  selectedIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(selectedIndex);
  const reducedMotion = useReducedMotion();
  const constraintsRef = useRef<HTMLDivElement>(null);
  const total = galleryImages.length;

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleDragEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      if (Math.abs(info.offset.x) > 60) {
        if (info.offset.x > 0) goPrev();
        else goNext();
      }
    },
    [goNext, goPrev]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, goNext, goPrev]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const img = galleryImages[current];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reducedMotion ? 0.01 : 0.3 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors active:bg-white/20"
        aria-label="Close gallery"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {/* Image container */}
      <div ref={constraintsRef} className="relative z-10 w-full max-w-lg px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="relative w-full overflow-hidden rounded-2xl"
            style={{
              aspectRatio: `${img.width}/${img.height}`,
            }}
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
            animate={reducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: -20 }}
            transition={reducedMotion ? { duration: 0.01 } : gentleSpring}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 100vw, 512px"
              className="pointer-events-none object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Info + nav */}
        <motion.div
          className="mt-4 flex items-center justify-between"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div>
            <p className="text-base font-semibold text-white">{img.title}</p>
            <p className="text-xs text-white/50">
              {current + 1} / {total}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={goPrev}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors active:bg-white/20"
              aria-label="Previous image"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={goNext}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors active:bg-white/20"
              aria-label="Next image"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-20">
      <SectionHeading
        label="Gallery"
        title="Selected works"
        description="A curated collection of our finest visual work."
      />

      <GalleryGrid onSelect={setSelected} />

      <AnimatePresence>
        {selected !== null && (
          <GalleryModal
            selectedIndex={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
