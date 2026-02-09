"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useReducedMotion, useInView } from "@/lib/hooks";
import { LocaleProvider, useLocale } from "@/lib/locale-context";
import type { ReactNode } from "react";

const smooth = [0.25, 0.46, 0.45, 0.94] as const;

function SubNav() {
  const { locale, setLocale } = useLocale();
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative h-8 w-8 overflow-hidden rounded-full">
            <Image
              src="/images/photos/photo-6.jpg"
              alt="DHP HOSPITALITY"
              fill
              sizes="32px"
              className="object-cover"
            />
          </div>
          <span className="text-xs font-bold tracking-[0.15em]">
            <span className="text-gold">DHP</span>{" "}
            <span className="font-light text-white/70">HOSPITALITY</span>
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <div className="flex overflow-hidden rounded-full border border-white/10 text-[11px] font-medium">
            <button onClick={() => setLocale("ja")} className={`px-3 py-1.5 transition-all ${locale === "ja" ? "bg-gold/20 text-gold" : "text-white/40"}`}>JA</button>
            <button onClick={() => setLocale("en")} className={`px-3 py-1.5 transition-all ${locale === "en" ? "bg-gold/20 text-gold" : "text-white/40"}`}>EN</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function AnimatedSection({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const reduced = useReducedMotion();
  const [ref, inView] = useInView(0.15);
  return (
    <motion.div
      ref={ref}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: smooth }}
    >
      {children}
    </motion.div>
  );
}

const subPageLinks = [
  { href: "/privacy", labelJa: "プライバシーポリシー", labelEn: "Privacy Policy" },
  { href: "/terms", labelJa: "利用規約", labelEn: "Terms of Use" },
  { href: "/careers", labelJa: "採用情報", labelEn: "Careers" },
];

function SubPageContent({ children }: { children: ReactNode }) {
  const { locale } = useLocale();
  return (
    <main className="min-h-screen bg-background">
      <SubNav />
      <div className="mx-auto max-w-2xl px-6 pb-20 pt-28 sm:px-8">
        {children}
      </div>
      {/* Footer with cross-links */}
      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-5">
            {subPageLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-text-muted transition-colors hover:text-gold"
              >
                {locale === "ja" ? link.labelJa : link.labelEn}
              </Link>
            ))}
          </div>
          <Link href="/" className="inline-flex items-center gap-2 text-xs text-text-muted transition-colors hover:text-gold">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            {locale === "ja" ? "トップに戻る" : "Back to Top"}
          </Link>
        </div>
      </footer>
    </main>
  );
}

export default function SubPage({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <SubPageContent>{children}</SubPageContent>
    </LocaleProvider>
  );
}

export { AnimatedSection };
