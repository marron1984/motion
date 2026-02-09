"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useReducedMotion, useInView } from "@/lib/hooks";
import { LocaleProvider, useLocale } from "@/lib/locale-context";

const smooth = [0.25, 0.46, 0.45, 0.94] as const;

function BackNav() {
  const { t, locale, setLocale } = useLocale();
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2 text-sm text-gold transition-colors hover:text-gold-light">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          {t.pillarDetails.back}
        </Link>
        <div className="flex overflow-hidden rounded-full border border-white/10 text-[11px] font-medium">
          <button onClick={() => setLocale("ja")} className={`px-3 py-1.5 transition-all ${locale === "ja" ? "bg-gold/20 text-gold" : "text-white/40"}`}>JA</button>
          <button onClick={() => setLocale("en")} className={`px-3 py-1.5 transition-all ${locale === "en" ? "bg-gold/20 text-gold" : "text-white/40"}`}>EN</button>
        </div>
      </div>
    </nav>
  );
}

function ServiceCard({ title, desc, index }: { title: string; desc: string; index: number }) {
  const reduced = useReducedMotion();
  const [ref, inView] = useInView(0.15);
  return (
    <motion.div
      ref={ref}
      className="rounded-2xl border border-border bg-surface-elevated p-5 sm:p-6"
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.05, ease: smooth }}
    >
      <h3 className="mb-2 text-base font-bold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-text-muted">{desc}</p>
    </motion.div>
  );
}

function StepCard({ step, title, desc, accent, index }: { step: string; title: string; desc: string; accent: string; index: number }) {
  const reduced = useReducedMotion();
  const [ref, inView] = useInView(0.15);
  return (
    <motion.div
      ref={ref}
      className="flex gap-4"
      initial={reduced ? { opacity: 0 } : { opacity: 0, x: -12 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08, ease: smooth }}
    >
      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full text-sm font-bold" style={{ backgroundColor: `${accent}20`, color: accent }}>
        {step}
      </div>
      <div>
        <h4 className="text-sm font-bold text-white">{title}</h4>
        <p className="text-xs text-text-muted">{desc}</p>
      </div>
    </motion.div>
  );
}

function FeatureBadge({ title, desc, accent, index }: { title: string; desc: string; accent: string; index: number }) {
  const reduced = useReducedMotion();
  const [ref, inView] = useInView(0.15);
  return (
    <motion.div
      ref={ref}
      className="rounded-xl border border-border bg-surface p-4 text-center"
      initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06, ease: smooth }}
    >
      <p className="text-sm font-bold" style={{ color: accent }}>{title}</p>
      <p className="mt-1 text-xs text-text-muted">{desc}</p>
    </motion.div>
  );
}

export default function PillarDetailPage({
  pillar,
}: {
  pillar: "hotel" | "brand" | "franchise";
}) {
  const photoMap = {
    hotel: "/images/photos/photo-1.jpg",
    brand: "/images/photos/photo-20.jpg",
    franchise: "/images/photos/photo-11.jpg",
  };
  const accentMap = {
    hotel: "#c8a2ff",
    brand: "#7dd3fc",
    franchise: "#fca5a5",
  };

  return (
    <LocaleProvider>
      <BackNav />
      <PillarContent pillar={pillar} photo={photoMap[pillar]} accent={accentMap[pillar]} />
    </LocaleProvider>
  );
}

function PillarContent({ pillar, photo, accent }: { pillar: "hotel" | "brand" | "franchise"; photo: string; accent: string }) {
  const { t } = useLocale();
  const reduced = useReducedMotion();
  const [heroRef, heroInView] = useInView(0);
  const d = t.pillarDetails[pillar];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section ref={heroRef} className="relative flex min-h-[60vh] items-end overflow-hidden pb-12 pt-24">
        <div className="absolute inset-0">
          <Image src={photo} alt={d.heroTitle} fill sizes="100vw" priority className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="relative z-10 px-6 sm:px-8 md:px-12">
          <motion.div
            className="mb-3 flex items-center gap-2"
            initial={reduced ? {} : { opacity: 0, x: -10 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, ease: smooth }}
          >
            <div className="h-[1px] w-6" style={{ backgroundColor: accent }} />
            <p className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color: `${accent}99` }}>Business</p>
          </motion.div>
          <motion.h1
            className="mb-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: smooth }}
          >
            {d.heroTitle}
          </motion.h1>
          <motion.p
            className="max-w-lg text-base text-white/60 sm:text-lg"
            initial={reduced ? {} : { opacity: 0, y: 12 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: smooth }}
          >
            {d.heroSub}
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-16 sm:px-8 md:px-12">
        <div className="mx-auto max-w-2xl">
          <IntroText text={d.intro} />
        </div>
      </section>

      {/* Services */}
      <section className="px-6 pb-16 sm:px-8 md:px-12">
        <div className="mx-auto max-w-2xl">
          <SectionLabel text="Services" accent={accent} />
          <div className="mt-6 flex flex-col gap-4">
            {d.services.map((s, i) => (
              <ServiceCard key={s.title} title={s.title} desc={s.desc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Extra section (process / strengths / features) */}
      <section className="px-6 pb-16 sm:px-8 md:px-12">
        <div className="mx-auto max-w-2xl">
          {pillar === "hotel" && (() => {
            const h = t.pillarDetails.hotel;
            return (
              <>
                <SectionLabel text={h.processLabel} accent={accent} />
                <div className="mt-6 flex flex-col gap-5">
                  {h.process.map((p, i) => (
                    <StepCard key={p.step} step={p.step} title={p.title} desc={p.desc} accent={accent} index={i} />
                  ))}
                </div>
              </>
            );
          })()}
          {pillar === "brand" && (() => {
            const b = t.pillarDetails.brand;
            return (
              <>
                <SectionLabel text={b.strengthsLabel} accent={accent} />
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {b.strengths.map((s, i) => (
                    <FeatureBadge key={s.title} title={s.title} desc={s.desc} accent={accent} index={i} />
                  ))}
                </div>
              </>
            );
          })()}
          {pillar === "franchise" && (() => {
            const f = t.pillarDetails.franchise;
            return (
              <>
                <SectionLabel text={f.featuresLabel} accent={accent} />
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {f.features.map((feat, i) => (
                    <FeatureBadge key={feat.title} title={feat.title} desc={feat.desc} accent={accent} index={i} />
                  ))}
                </div>
              </>
            );
          })()}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 sm:px-8 md:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <Link
            href="/#contact"
            className="inline-block rounded-full px-8 py-3.5 text-sm font-bold text-black transition-opacity hover:opacity-90"
            style={{ backgroundColor: accent }}
          >
            {t.pillarDetails.contactCta}
          </Link>
        </div>
      </section>
    </main>
  );
}

function IntroText({ text }: { text: string }) {
  const reduced = useReducedMotion();
  const [ref, inView] = useInView(0.2);
  return (
    <motion.p
      ref={ref}
      className="text-sm leading-[2] text-white/60 sm:text-base"
      initial={reduced ? {} : { opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: smooth }}
    >
      {text}
    </motion.p>
  );
}

function SectionLabel({ text, accent }: { text: string; accent: string }) {
  const reduced = useReducedMotion();
  const [ref, inView] = useInView(0.3);
  return (
    <motion.div
      ref={ref}
      className="flex items-center gap-2"
      initial={reduced ? {} : { opacity: 0, x: -8 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, ease: smooth }}
    >
      <div className="h-[1px] w-6" style={{ backgroundColor: `${accent}66` }} />
      <p className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color: `${accent}99` }}>{text}</p>
    </motion.div>
  );
}
