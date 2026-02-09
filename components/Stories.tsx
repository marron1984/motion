"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { stories } from "@/lib/data";
import { useReducedMotion, useInView } from "@/lib/hooks";
import { fadeUp, staggerContainer, reducedMotionVariants } from "@/lib/motion";
import SectionHeading from "./SectionHeading";

function StoryCard({
  story,
  reducedMotion,
}: {
  story: (typeof stories)[0];
  reducedMotion: boolean;
}) {
  const variants = reducedMotion ? reducedMotionVariants : fadeUp;

  return (
    <motion.article
      variants={variants}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-surface transition-colors active:bg-surface-elevated"
      whileTap={reducedMotion ? {} : { scale: 0.98 }}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[3/2] w-full overflow-hidden">
        <Image
          src={story.thumbnail}
          alt={story.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <span className="rounded-full bg-accent/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-black">
            {story.tag}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
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
  const [ref, inView] = useInView(0.1);

  return (
    <section className="py-20">
      <SectionHeading
        label="Stories"
        title="Latest insights"
        description="Thoughts on design, motion, and building for the mobile web."
      />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid gap-4 px-6 sm:grid-cols-2 sm:gap-5 sm:px-8 md:px-12"
      >
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} reducedMotion={reducedMotion} />
        ))}
      </motion.div>
    </section>
  );
}
