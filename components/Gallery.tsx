"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PanInfo } from "framer-motion";
import Image from "next/image";
import { useReducedMotion, useInView } from "@/lib/hooks";
import { gentleSpring } from "@/lib/motion";
import { useLocale } from "@/lib/locale-context";
import SectionHeading from "./SectionHeading";

const portfolioImages = [
  { id: 1, title: "奈良春日 鹿のや", titleEn: "Nara Kasuga Kanoya", src: "/images/photos/photo-6.jpg", alt: "Kanoya hotel sign", width: 600, height: 1000 },
  { id: 2, title: "スイートルーム A", titleEn: "Suite Room A", src: "/images/photos/photo-2.jpg", alt: "Luxury suite with beds", width: 800, height: 600 },
  { id: 3, title: "L'Artisan カウンター", titleEn: "L'Artisan Counter", src: "/images/photos/photo-20.jpg", alt: "Restaurant counter", width: 800, height: 600 },
  { id: 4, title: "スイートルーム B", titleEn: "Suite Room B", src: "/images/photos/photo-9.jpg", alt: "Suite with gold runners", width: 800, height: 600 },
  { id: 5, title: "シェフの技", titleEn: "Chef's Craft", src: "/images/photos/photo-25.jpg", alt: "Chef plating gourmet dish", width: 800, height: 600 },
  { id: 6, title: "個室ダイニング", titleEn: "Private Dining", src: "/images/photos/photo-22.jpg", alt: "Private dining room", width: 600, height: 1000 },
  { id: 7, title: "バスルーム", titleEn: "Bathroom", src: "/images/photos/photo-14.jpg", alt: "Luxury bathroom vanity", width: 800, height: 600 },
  { id: 8, title: "スイートルーム C", titleEn: "Suite Room C", src: "/images/photos/photo-10.jpg", alt: "Suite with striped runners", width: 800, height: 600 },
  { id: 9, title: "和牛カツ", titleEn: "Wagyu Katsu", src: "/images/photos/photo-31.jpg", alt: "Wagyu beef katsu", width: 800, height: 600 },
  { id: 10, title: "オープンキッチン", titleEn: "Open Kitchen", src: "/images/photos/photo-21.jpg", alt: "Restaurant with chef", width: 800, height: 600 },
  { id: 11, title: "ダイニング全景", titleEn: "Dining Overview", src: "/images/photos/photo-23.jpg", alt: "Private dining wide view", width: 800, height: 600 },
  { id: 12, title: "日本酒", titleEn: "Sake Service", src: "/images/photos/photo-33.jpg", alt: "Sake being poured", width: 800, height: 600 },
  { id: 13, title: "おもてなし", titleEn: "Hospitality Details", src: "/images/photos/photo-17.jpg", alt: "Luxury towels", width: 800, height: 600 },
  { id: 14, title: "トリュフ料理", titleEn: "Truffle Dish", src: "/images/photos/photo-28.jpg", alt: "Truffle and uni dish", width: 600, height: 1000 },
  { id: 15, title: "カウンター席", titleEn: "Counter Seating", src: "/images/photos/photo-27.jpg", alt: "Restaurant counter angle", width: 800, height: 600 },
  { id: 16, title: "L'Artisan 看板", titleEn: "L'Artisan Sign", src: "/images/photos/photo-19.jpg", alt: "L'Artisan Kanoya lit sign", width: 800, height: 600 },
  { id: 17, title: "コーヒーセット", titleEn: "Coffee Amenities", src: "/images/photos/photo-12.jpg", alt: "Keurig coffee and tea set", width: 800, height: 600 },
  { id: 18, title: "奈良の紅葉", titleEn: "Nara Autumn", src: "/images/photos/photo-18.jpg", alt: "Autumn foliage with deer", width: 800, height: 600 },
];

function GalleryGrid({ onSelect }: { onSelect: (index: number) => void }) {
  const reducedMotion = useReducedMotion();
  const [ref, inView] = useInView(0.1);
  const { locale } = useLocale();

  return (
    <div ref={ref} className="grid grid-cols-2 gap-3 px-6 sm:gap-4 sm:px-8 md:grid-cols-3 md:px-12">
      {portfolioImages.map((img, i) => (
        <motion.button
          key={img.id}
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: Math.min(i * 0.04, 0.4), ease: [0.25, 0.46, 0.45, 0.94] }}
          onClick={() => onSelect(i)}
          className="group relative overflow-hidden rounded-xl bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          style={{ aspectRatio: img.width > img.height ? "4/3" : "3/4" }}
          whileTap={{ scale: 0.95 }}
          whileHover={reducedMotion ? {} : { y: -4 }}
        >
          <Image src={img.src} alt={img.alt} fill sizes="(max-width: 640px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-gold/80 text-black opacity-0 transition-all duration-300 group-hover:opacity-100 scale-75 group-hover:scale-100">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-xs font-medium text-white sm:text-sm">{locale === "ja" ? img.title : img.titleEn}</p>
          </div>
        </motion.button>
      ))}
    </div>
  );
}

function GalleryModal({ selectedIndex, onClose }: { selectedIndex: number; onClose: () => void }) {
  const [current, setCurrent] = useState(selectedIndex);
  const reducedMotion = useReducedMotion();
  const constraintsRef = useRef<HTMLDivElement>(null);
  const { locale } = useLocale();
  const total = portfolioImages.length;

  const goNext = useCallback(() => setCurrent((p) => (p + 1) % total), [total]);
  const goPrev = useCallback(() => setCurrent((p) => (p - 1 + total) % total), [total]);

  const handleDragEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      if (Math.abs(info.offset.x) > 60) { info.offset.x > 0 ? goPrev() : goNext(); }
    }, [goNext, goPrev]
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); if (e.key === "ArrowLeft") goPrev(); if (e.key === "ArrowRight") goNext(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, goNext, goPrev]);

  useEffect(() => { document.body.style.overflow = "hidden"; return () => { document.body.style.overflow = ""; }; }, []);

  const img = portfolioImages[current];

  return (
    <motion.div className="fixed inset-0 z-50 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reducedMotion ? 0.01 : 0.3 }}>
      <motion.div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
      <motion.button onClick={onClose} className="absolute right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm" aria-label="Close" initial={reducedMotion ? {} : { scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 20 }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
      </motion.button>
      <div ref={constraintsRef} className="relative z-10 w-full max-w-lg px-6">
        <AnimatePresence mode="wait">
          <motion.div key={current} className="relative w-full overflow-hidden rounded-2xl shadow-2xl" style={{ aspectRatio: `${img.width}/${img.height}` }}
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.85, y: 30 }}
            animate={reducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.85, y: -30 }}
            transition={reducedMotion ? { duration: 0.01 } : gentleSpring}
            drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.2} onDragEnd={handleDragEnd}>
            <Image src={img.src} alt={img.alt} fill sizes="(max-width: 640px) 100vw, 512px" className="pointer-events-none object-cover" priority />
          </motion.div>
        </AnimatePresence>
        <motion.div className="mt-4 flex items-center justify-center gap-1.5" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          {portfolioImages.map((_, i) => (<motion.div key={i} className="h-1.5 rounded-full bg-white" animate={{ width: i === current ? 24 : 6, opacity: i === current ? 1 : 0.3 }} transition={{ duration: 0.3 }} />))}
        </motion.div>
        <motion.div className="mt-3 flex items-center justify-between" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <div>
            <p className="text-base font-semibold text-white">{locale === "ja" ? img.title : img.titleEn}</p>
            <p className="text-xs text-white/50">{current + 1} / {total}</p>
          </div>
          <div className="flex gap-2">
            <button onClick={goPrev} className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white" aria-label="Previous"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
            <button onClick={goNext} className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white" aria-label="Next"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const { t } = useLocale();

  return (
    <section id="portfolio" className="py-20">
      <SectionHeading label={t.portfolio.label} title={t.portfolio.title} description={t.portfolio.description} />
      <GalleryGrid onSelect={setSelected} />
      <AnimatePresence>
        {selected !== null && <GalleryModal selectedIndex={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
