"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { stories } from "@/lib/data";
import { useReducedMotion, useInView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";

function StoryCard({
  story,
  index,
  reducedMotion,
}: {
  story: (typeof stories)[0];
  index: number;
  reducedMotion: boolean;
}) {
  const [ref, inView] = useInView(0.15);

  return (
    <motion.article
      ref={ref}
      initial={
        reducedMotion
          ? { opacity: 0 }
          : { opacity: 0, x: index % 2 === 0 ? -30 : 30, y: 20 }
      }
      animate={
        inView
          ? { opacity: 1, x: 0, y: 0 }
          : {}
      }
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-surface transition-colors active:bg-surface-elevated"
      whileTap={reducedMotion ? {} : { scale: 0.98 }}
      whileHover={reducedMotion ? {} : { y: -4 }}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[3/2] w-full overflow-hidden">
        <Image
          src={story.thumbnail}
          alt={story.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Animated tag badge */}
        <motion.div
          className="absolute bottom-3 left-3"
          initial={reducedMotion ? {} : { scale: 0, y: 10 }}
          animate={inView ? { scale: 1, y: 0 } : {}}
          transition={{
            delay: 0.3 + index * 0.1,
            type: "spring",
            stiffness: 400,
            damping: 20,
          }}
        >
          <span className="rounded-full bg-accent/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-black">
            {story.tag}
          </span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative p-4 sm:p-5">
        {/* Shimmer line on hover */}
        <div className="absolute left-0 right-0 top-0 h-[1px] overflow-hidden">
          <div
            className="h-full w-1/3 translate-x-[-100%] bg-gradient-to-r from-transparent via-accent/40 to-transparent transition-transform duration-700 group-hover:translate-x-[400%]"
          />
        </div>

        <p className="mb-1 text-xs text-text-muted">{story.date}</p>
        <h3 className="mb-2 text-base font-bold leading-snug text-white sm:text-lg">
          {story.title}
        </h3>
        <p className="text-sm leading-relaxed text-text-muted line-clamp-2">
          {story.excerpt}
        </p>
      </div>
    </motion.article>
  );
}

export default function Stories() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="py-20">
      <SectionHeading
        label="Stories"
        title="Latest insights"
        description="Thoughts on design, motion, and building for the mobile web."
      />

      <div className="grid gap-4 px-6 sm:grid-cols-2 sm:gap-5 sm:px-8 md:px-12">
        {stories.map((story, i) => (
          <StoryCard
            key={story.id}
            story={story}
            index={i}
            reducedMotion={reducedMotion}
          />
        ))}
      </div>
    </section>
  );
}
