"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion, useInView } from "@/lib/hooks";
import { fadeUp, staggerContainer, reducedMotionVariants } from "@/lib/motion";

export default function CTA() {
  const reducedMotion = useReducedMotion();
  const [ref, inView] = useInView(0.2);
  const [submitted, setSubmitted] = useState(false);
  const variants = reducedMotion ? reducedMotionVariants : fadeUp;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background accent glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 mx-auto max-w-md px-6 sm:px-8"
      >
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
            >
              <motion.p
                variants={variants}
                className="mb-2 text-center text-xs font-medium uppercase tracking-[0.2em] text-accent/70"
              >
                Get in Touch
              </motion.p>
              <motion.h2
                variants={variants}
                className="mb-3 text-center text-2xl font-bold tracking-tight text-white sm:text-3xl"
              >
                Let&apos;s create together
              </motion.h2>
              <motion.p
                variants={variants}
                className="mb-8 text-center text-sm leading-relaxed text-text-muted"
              >
                Have a project in mind? Drop us a message and we&apos;ll bring it to life.
              </motion.p>

              <motion.form
                variants={staggerContainer}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <motion.div variants={variants}>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-sm text-white placeholder-text-muted outline-none transition-colors focus:border-accent/50 focus:bg-surface-elevated"
                  />
                </motion.div>
                <motion.div variants={variants}>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-sm text-white placeholder-text-muted outline-none transition-colors focus:border-accent/50 focus:bg-surface-elevated"
                  />
                </motion.div>
                <motion.div variants={variants}>
                  <textarea
                    placeholder="Tell us about your project"
                    rows={4}
                    className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3.5 text-sm text-white placeholder-text-muted outline-none transition-colors focus:border-accent/50 focus:bg-surface-elevated"
                  />
                </motion.div>
                <motion.div variants={variants}>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-accent py-4 text-sm font-bold text-black transition-all active:scale-[0.98] active:bg-accent-dim"
                  >
                    Send Message
                  </button>
                </motion.div>
              </motion.form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              className="flex flex-col items-center py-12 text-center"
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8, y: 30 }}
              animate={reducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
              transition={
                reducedMotion
                  ? { duration: 0.01 }
                  : {
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                      mass: 0.8,
                    }
              }
            >
              {/* Animated check */}
              <motion.div
                className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10"
                initial={reducedMotion ? {} : { scale: 0 }}
                animate={{ scale: 1 }}
                transition={
                  reducedMotion
                    ? { duration: 0.01 }
                    : {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        delay: 0.2,
                      }
                }
              >
                <motion.svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={
                    reducedMotion
                      ? { duration: 0.01 }
                      : { duration: 0.6, delay: 0.4, ease: "easeOut" }
                  }
                >
                  <motion.path
                    d="M12 20L18 26L28 14"
                    stroke="#c8a2ff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={
                      reducedMotion
                        ? { duration: 0.01 }
                        : { duration: 0.6, delay: 0.4, ease: "easeOut" }
                    }
                  />
                </motion.svg>
              </motion.div>

              <motion.h3
                className="mb-2 text-xl font-bold text-white"
                initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  reducedMotion
                    ? { duration: 0.01 }
                    : { delay: 0.5, duration: 0.4 }
                }
              >
                Message Sent!
              </motion.h3>
              <motion.p
                className="text-sm text-text-muted"
                initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  reducedMotion
                    ? { duration: 0.01 }
                    : { delay: 0.6, duration: 0.4 }
                }
              >
                We&apos;ll be in touch within 24 hours.
              </motion.p>

              <motion.button
                onClick={() => setSubmitted(false)}
                className="mt-6 rounded-full border border-border px-6 py-2.5 text-sm text-white/70 transition-colors active:bg-surface-elevated"
                initial={reducedMotion ? {} : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={
                  reducedMotion
                    ? { duration: 0.01 }
                    : { delay: 0.8, duration: 0.4 }
                }
              >
                Send another
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
