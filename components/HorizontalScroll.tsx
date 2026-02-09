"use client";

import { useRef } from "react";
import Image from "next/image";
import { useLocale } from "@/lib/locale-context";
import SectionHeading from "./SectionHeading";

const cardPhotos = [
  "/images/photos/photo-5.jpg",
  "/images/photos/photo-29.jpg",
  "/images/photos/photo-30.jpg",
  "/images/photos/photo-32.jpg",
];

export default function HorizontalScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t } = useLocale();
  const items = t.medical.items;

  return (
    <section id="medical" className="py-20">
      <SectionHeading
        label={t.medical.label}
        title={t.medical.title}
        description={t.medical.description}
      />

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto px-6 pb-4 sm:gap-5 sm:px-8 md:px-12"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {items.map((card, i) => (
            <div
              key={card.title}
              className="relative flex-none overflow-hidden rounded-2xl border border-border bg-surface"
              style={{
                width: "min(300px, 80vw)",
                scrollSnapAlign: "start",
              }}
            >
              {/* Card photo */}
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={cardPhotos[i % cardPhotos.length]}
                  alt={card.title}
                  fill
                  sizes="300px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />
                <div
                  className="absolute bottom-3 left-4 inline-block rounded-full px-3 py-1 text-xs font-bold backdrop-blur-sm"
                  style={{ backgroundColor: `${card.accent}30`, color: card.accent }}
                >
                  {card.price}
                </div>
              </div>

              <div className="relative p-5">
                <h3 className="relative mb-1 text-lg font-bold text-white">{card.title}</h3>
                <p className="mb-3 text-xs font-medium text-gold/60">{card.duration}</p>
                <p className="relative text-sm leading-relaxed text-text-muted">{card.desc}</p>
              </div>

              {/* Bottom accent bar */}
              <div className="h-1" style={{ backgroundColor: card.accent }} />
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}
