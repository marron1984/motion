"use client";

import SubPage, { AnimatedSection } from "@/components/SubPage";
import { useLocale } from "@/lib/locale-context";

function Content() {
  const { t } = useLocale();
  const tm = t.pages.terms;

  return (
    <>
      <AnimatedSection>
        <h1 className="mb-2 text-2xl font-bold text-white sm:text-3xl">{tm.title}</h1>
        <p className="mb-10 text-xs text-text-muted">{tm.lastUpdated}</p>
      </AnimatedSection>

      <div className="flex flex-col gap-8">
        {tm.sections.map((s, i) => (
          <AnimatedSection key={s.heading} delay={Math.min(i * 0.04, 0.3)}>
            <h2 className="mb-2 text-base font-bold text-gold">{s.heading}</h2>
            <p className="text-sm leading-relaxed text-text-muted">{s.body}</p>
          </AnimatedSection>
        ))}
      </div>
    </>
  );
}

export default function TermsContent() {
  return (
    <SubPage>
      <Content />
    </SubPage>
  );
}
