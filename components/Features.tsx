"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useReducedMotion, useInView } from "@/lib/hooks";
import { useLocale } from "@/lib/locale-context";
import SectionHeading from "./SectionHeading";

const pillarRoutes = ["/hotel-development", "/brand-affiliation", "/franchise-management"];

const pillarPhotos = [
  "/images/photos/photo-1.jpg",
  "/images/photos/photo-20.jpg",
  "/images/photos/photo-11.jpg",
];

function PillarCard({
  item,
  index,
  href,
  detailLabel,
}: {
  item: { id: number; num: string; title: string; subtitle: string; description: string; accent: string };
  index: number;
  href: string;
  detailLabel: string;
}) {
  const reducedMotion = useReducedMotion();
  const [ref, inView] = useInView(0.15);

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        className="relative overflow-hidden rounded-2xl border border-border bg-surface-elevated transition-colors hover:border-gold/30"
        initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Top accent bar */}
        <div className="h-[2px]" style={{ backgroundColor: item.accent }} />

        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={pillarPhotos[index]}
            alt={item.title}
            fill
            sizes="(max-width: 640px) 100vw, 448px"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${item.accent}30, transparent 60%)`,
            }}
          />
          {/* Number badge */}
          <div
            className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold backdrop-blur-sm"
            style={{ backgroundColor: `${item.accent}30`, color: item.accent }}
          >
            {item.num}
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <div
            className="mb-2 inline-block rounded-full px-3 py-1 text-xs font-semibold"
            style={{ backgroundColor: `${item.accent}15`, color: item.accent }}
          >
            {item.subtitle}
          </div>
          <h3 className="mb-2 text-lg font-bold text-white sm:text-xl">{item.title}</h3>
          <p className="mb-4 text-sm leading-relaxed text-text-muted">{item.description}</p>
          <span
            className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors"
            style={{ color: item.accent }}
          >
            {detailLabel}
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
        </div>
      </motion.div>
    </Link>
  );
}

export default function Features() {
  const { t } = useLocale();
  const items = t.pillars.items;

  return (
    <section id="business" className="relative py-16">
      <SectionHeading
        label={t.pillars.label}
        title={t.pillars.title}
        description={t.pillars.description}
      />

      <div className="flex flex-col gap-5 px-6 sm:px-8 md:px-12">
        {items.map((item, i) => (
          <PillarCard key={item.id} item={item} index={i} href={pillarRoutes[i]} detailLabel={t.pillars.detailLabel} />
        ))}
      </div>
    </section>
  );
}
