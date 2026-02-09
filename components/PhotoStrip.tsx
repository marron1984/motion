"use client";

import Image from "next/image";
import { useReducedMotion } from "@/lib/hooks";

const stripPhotos = [
  { src: "/images/photos/photo-13.jpg", alt: "Japanese ceramics drawer" },
  { src: "/images/photos/photo-15.jpg", alt: "Luxury bathroom" },
  { src: "/images/photos/photo-16.jpg", alt: "Amenity set" },
  { src: "/images/photos/photo-24.jpg", alt: "Chef preparing" },
  { src: "/images/photos/photo-26.jpg", alt: "Wine counter" },
  { src: "/images/photos/photo-13.jpg", alt: "Japanese ceramics drawer" },
  { src: "/images/photos/photo-15.jpg", alt: "Luxury bathroom" },
  { src: "/images/photos/photo-16.jpg", alt: "Amenity set" },
  { src: "/images/photos/photo-24.jpg", alt: "Chef preparing" },
  { src: "/images/photos/photo-26.jpg", alt: "Wine counter" },
];

export default function PhotoStrip() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-8">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

      <div className="flex whitespace-nowrap">
        <div className={reduced ? "" : "animate-marquee-left"} style={{ animationDuration: "40s" }}>
          <div className="flex gap-3">
            {stripPhotos.map((photo, i) => (
              <div
                key={i}
                className="relative h-24 w-36 flex-none overflow-hidden rounded-lg sm:h-32 sm:w-48"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="192px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
