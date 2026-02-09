"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion, useInView } from "@/lib/hooks";
import { fadeUp, staggerContainer, reducedMotionVariants } from "@/lib/motion";

function CelebrationParticles() {
  const particles = Array.from({ length: 12 }, (_, i) => {
    const angle = (i / 12) * 360;
    const rad = (angle * Math.PI) / 180;
    const distance = 60 + (i * 7) % 40;
    return {
      x: Math.cos(rad) * distance,
      y: Math.sin(rad) * distance,
      size: 4 + (i * 3) % 4,
      delay: (i * 0.025),
      color: i % 3 === 0 ? "#c8a2ff" : i % 3 === 1 ? "#e879f9" : "#7dd3fc",
    };
  });

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
          }}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          animate={{
            x: p.x,
            y: p.y,
            opacity: 0,
            scale: 0,
          }}
          transition={{
            duration: 0.8,
            delay: p.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

export default function CTA() {
  const reducedMotion = useReducedMotion();
  const [ref, inView] = useInView(0.2);
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const variants = reducedMotion ? reducedMotionVariants : fadeUp;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden py-24">
      {/* Floating background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-[300px] w-[300px] animate-float-1 rounded-full bg-accent/5 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[250px] w-[250px] animate-float-2 rounded-full bg-accent-hot/5 blur-[100px]" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-morph bg-accent/[0.03] blur-3xl" />
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
                Have a project in mind? Drop us a message and we&apos;ll bring
                it to life.
              </motion.p>

              <motion.form
                variants={staggerContainer}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                {[
                  { name: "name", type: "text", placeholder: "Your name" },
                  { name: "email", type: "email", placeholder: "Email address" },
                ].map((field) => (
                  <motion.div key={field.name} variants={variants} className="relative">
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      onFocus={() => setFocused(field.name)}
                      onBlur={() => setFocused(null)}
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-sm text-white placeholder-text-muted outline-none transition-all duration-300 focus:border-accent/50 focus:bg-surface-elevated"
                      style={{
                        boxShadow:
                          focused === field.name
                            ? "0 0 20px rgba(200,162,255,0.1)"
                            : "none",
                      }}
                    />
                  </motion.div>
                ))}
                <motion.div variants={variants} className="relative">
                  <textarea
                    placeholder="Tell us about your project"
                    rows={4}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3.5 text-sm text-white placeholder-text-muted outline-none transition-all duration-300 focus:border-accent/50 focus:bg-surface-elevated"
                    style={{
                      boxShadow:
                        focused === "message"
                          ? "0 0 20px rgba(200,162,255,0.1)"
                          : "none",
                    }}
                  />
                </motion.div>
                <motion.div variants={variants}>
                  <motion.button
                    type="submit"
                    className="relative w-full overflow-hidden rounded-xl bg-accent py-4 text-sm font-bold text-black"
                    whileTap={{ scale: 0.97 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <span className="relative z-10">Send Message</span>
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.button>
                </motion.div>
              </motion.form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              className="relative flex flex-col items-center py-12 text-center"
              initial={
                reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8, y: 30 }
              }
              animate={
                reducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }
              }
              transition={
                reducedMotion
                  ? { duration: 0.01 }
                  : { type: "spring", stiffness: 200, damping: 20, mass: 0.8 }
              }
            >
              {!reducedMotion && <CelebrationParticles />}

              <motion.div
                className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10"
                initial={reducedMotion ? {} : { scale: 0 }}
                animate={{ scale: 1 }}
                transition={
                  reducedMotion
                    ? { duration: 0.01 }
                    : { type: "spring", stiffness: 300, damping: 20, delay: 0.2 }
                }
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
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
                </svg>
              </motion.div>

              <motion.h3
                className="mb-2 text-xl font-bold text-white"
                initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  reducedMotion ? { duration: 0.01 } : { delay: 0.5, duration: 0.4 }
                }
              >
                Message Sent!
              </motion.h3>
              <motion.p
                className="text-sm text-text-muted"
                initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  reducedMotion ? { duration: 0.01 } : { delay: 0.6, duration: 0.4 }
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
                  reducedMotion ? { duration: 0.01 } : { delay: 0.8, duration: 0.4 }
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
