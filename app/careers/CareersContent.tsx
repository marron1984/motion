"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SubPage, { AnimatedSection } from "@/components/SubPage";
import { useReducedMotion, useInView } from "@/lib/hooks";
import { useLocale } from "@/lib/locale-context";

const smooth = [0.25, 0.46, 0.45, 0.94] as const;

function ValueCard({ title, desc, index }: { title: string; desc: string; index: number }) {
  const reduced = useReducedMotion();
  const [ref, inView] = useInView(0.15);
  return (
    <motion.div
      ref={ref}
      className="rounded-2xl border border-border bg-surface-elevated p-5"
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.06, ease: smooth }}
    >
      <h3 className="mb-2 text-sm font-bold text-gold">{title}</h3>
      <p className="text-sm leading-relaxed text-text-muted">{desc}</p>
    </motion.div>
  );
}

function PositionCard({ title, type, desc, index }: { title: string; type: string; desc: string; index: number }) {
  const reduced = useReducedMotion();
  const [ref, inView] = useInView(0.15);
  return (
    <motion.div
      ref={ref}
      className="rounded-2xl border border-border bg-surface p-5"
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.06, ease: smooth }}
    >
      <h3 className="mb-1 text-base font-bold text-white">{title}</h3>
      <p className="mb-2 text-xs font-medium text-gold/70">{type}</p>
      <p className="text-sm leading-relaxed text-text-muted">{desc}</p>
    </motion.div>
  );
}

function Content() {
  const { t } = useLocale();
  const c = t.pages.careers;

  return (
    <>
      <AnimatedSection>
        <h1 className="mb-4 text-2xl font-bold text-white sm:text-3xl">{c.title}</h1>
        <p className="mb-12 text-sm leading-relaxed text-text-muted">{c.intro}</p>
      </AnimatedSection>

      {/* Values */}
      <AnimatedSection>
        <div className="mb-1 h-[1px] w-6 bg-gold/40" />
        <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold/60">{c.valuesLabel}</h2>
      </AnimatedSection>
      <div className="mb-12 flex flex-col gap-3">
        {c.values.map((v, i) => (
          <ValueCard key={v.title} title={v.title} desc={v.desc} index={i} />
        ))}
      </div>

      {/* Positions */}
      <AnimatedSection>
        <div className="mb-1 h-[1px] w-6 bg-gold/40" />
        <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold/60">{c.positionsLabel}</h2>
      </AnimatedSection>
      <div className="mb-12 flex flex-col gap-4">
        {c.positions.map((p, i) => (
          <PositionCard key={p.title} title={p.title} type={p.type} desc={p.desc} index={i} />
        ))}
      </div>

      {/* Contact CTA */}
      <AnimatedSection delay={0.1}>
        <div className="rounded-2xl border border-gold/20 bg-surface-elevated p-6 text-center">
          <p className="mb-4 text-sm text-text-muted">{c.contactNote}</p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-6 py-2.5 text-sm font-semibold text-gold transition-colors hover:bg-gold/20"
          >
            Contact
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </AnimatedSection>
    </>
  );
}

export default function CareersContent() {
  return (
    <SubPage>
      <Content />
    </SubPage>
  );
}
