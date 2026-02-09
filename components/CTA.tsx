"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks";
import { useLocale } from "@/lib/locale-context";

export default function CTA() {
  const reducedMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const { t } = useLocale();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-morph bg-gold/[0.02] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-md px-6 sm:px-8">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div key="form" exit={{ opacity: 0, transition: { duration: 0.2 } }}>
              <p className="mb-2 text-center text-xs font-medium uppercase tracking-[0.2em] text-gold/60">
                {t.cta.label}
              </p>
              <h2 className="mb-3 text-center text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {t.cta.title}
              </h2>
              <p className="mb-8 text-center text-sm leading-relaxed text-text-muted">
                {t.cta.description}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { name: "name", type: "text", placeholder: t.cta.name },
                  { name: "email", type: "email", placeholder: t.cta.email },
                  { name: "company", type: "text", placeholder: t.cta.company },
                ].map((field) => (
                  <div key={field.name}>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      onFocus={() => setFocused(field.name)}
                      onBlur={() => setFocused(null)}
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-sm text-white placeholder-text-muted outline-none transition-all duration-300 focus:border-gold/30 focus:bg-surface-elevated"
                      style={{ boxShadow: focused === field.name ? "0 0 20px rgba(201,169,110,0.08)" : "none" }}
                    />
                  </div>
                ))}
                <div>
                  <textarea
                    placeholder={t.cta.message}
                    rows={4}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3.5 text-sm text-white placeholder-text-muted outline-none transition-all duration-300 focus:border-gold/30 focus:bg-surface-elevated"
                    style={{ boxShadow: focused === "message" ? "0 0 20px rgba(201,169,110,0.08)" : "none" }}
                  />
                </div>
                <div>
                  <button type="submit" className="w-full rounded-xl bg-gold py-4 text-sm font-bold text-black active:scale-[0.97] transition-transform">
                    {t.cta.submit}
                  </button>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              className="relative flex flex-col items-center py-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gold/10">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <motion.path
                    d="M12 20L18 26L28 14"
                    stroke="#c9a96e"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={reducedMotion ? { duration: 0.01 } : { duration: 0.5, ease: "easeOut" }}
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">{t.cta.successTitle}</h3>
              <p className="text-sm text-text-muted">{t.cta.successMessage}</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 rounded-full border border-border px-6 py-2.5 text-sm text-white/70 transition-colors active:bg-surface-elevated"
              >
                {t.cta.sendAnother}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
