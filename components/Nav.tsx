"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useReducedMotion, useInView } from "@/lib/hooks";
import { useLocale } from "@/lib/locale-context";

export default function Nav() {
  const reduced = useReducedMotion();
  const { locale, t, setLocale } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const [ref, inView] = useInView(0);

  const mainItems = [
    { label: t.nav.concept, href: "#concept" },
    { label: t.nav.business, href: "#business" },
    { label: t.nav.medical, href: "#medical" },
    { label: t.nav.portfolio, href: "#portfolio" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const subItems = [
    { label: t.nav.companyInfo, href: "/#company" },
    { label: t.nav.privacy, href: "/privacy" },
    { label: t.nav.terms, href: "/terms" },
    { label: t.nav.careers, href: "/careers" },
  ];

  return (
    <motion.nav
      ref={ref}
      className="fixed left-0 right-0 top-0 z-50"
      initial={{ y: -80 }}
      animate={inView ? { y: 0 } : { y: 0 }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        {/* Logo */}
        <motion.a
          href="#"
          className="relative z-50 flex items-center gap-2.5"
          initial={reduced ? {} : { opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative h-8 w-8 overflow-hidden rounded-full sm:h-9 sm:w-9">
            <Image
              src="/images/photos/photo-6.jpg"
              alt="DHP HOSPITALITY"
              fill
              sizes="36px"
              className="object-cover"
            />
          </div>
          <div className="text-sm font-bold tracking-[0.15em]">
            <span className="text-gold">DHP</span>{" "}
            <span className="text-white/70 font-light">HOSPITALITY</span>
          </div>
        </motion.a>

        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <motion.div
            className="relative z-50 flex overflow-hidden rounded-full border border-white/10 text-[11px] font-medium"
            initial={reduced ? {} : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button
              onClick={() => setLocale("ja")}
              className={`px-3 py-1.5 transition-all ${
                locale === "ja"
                  ? "bg-gold/20 text-gold"
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              JA
            </button>
            <button
              onClick={() => setLocale("en")}
              className={`px-3 py-1.5 transition-all ${
                locale === "en"
                  ? "bg-gold/20 text-gold"
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              EN
            </button>
          </motion.div>

          {/* Hamburger */}
          <motion.button
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            initial={reduced ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.span
              className="block h-[1.5px] w-5 bg-white"
              animate={menuOpen ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-[1.5px] w-5 bg-white"
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-[1.5px] w-5 bg-white"
              animate={menuOpen ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </div>

      {/* Fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex flex-col items-center gap-6">
              {mainItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-light tracking-wider text-white/80 transition-colors hover:text-gold sm:text-3xl"
                  initial={reduced ? {} : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {item.label}
                </motion.a>
              ))}

              {/* Divider */}
              <motion.div
                className="h-[1px] w-12 bg-gold/30"
                initial={reduced ? {} : { opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: mainItems.length * 0.08, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Sub pages */}
              {subItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={reduced ? {} : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    duration: 0.4,
                    delay: (mainItems.length + 1) * 0.08 + i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-light tracking-wider text-white/50 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
