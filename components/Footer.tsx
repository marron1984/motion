"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useReducedMotion, useInView } from "@/lib/hooks";
import { useLocale } from "@/lib/locale-context";

const footerRoutes = ["/privacy", "/terms", "/careers"];

export default function Footer() {
  const reducedMotion = useReducedMotion();
  const [ref, inView] = useInView(0.3);
  const { t } = useLocale();

  return (
    <footer id="company" ref={ref} className="relative px-6 py-10 sm:px-8">
      {/* Animated top border glow */}
      <div className="absolute left-6 right-6 top-0 h-[1px] overflow-hidden sm:left-8 sm:right-8">
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-gold/30 to-transparent"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }}
        />
      </div>

      <div className="mx-auto flex max-w-md flex-col items-center gap-5 text-center">
        {/* Logo */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="flex items-center gap-2.5">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image
                src="/images/photos/photo-6.jpg"
                alt="DHP HOSPITALITY"
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
            <p className="text-sm font-bold tracking-[0.15em]">
              <span className="text-gold">DHP</span>{" "}
              <span className="text-white/70 font-light">HOSPITALITY</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="text-xs font-medium text-white/70">{t.footer.company}</p>
          <p className="mt-2 text-xs text-text-muted">{t.footer.ceo}</p>
          {t.footer.directors.map((d) => (
            <p key={d} className="text-xs text-text-muted">{d}</p>
          ))}
          <p className="text-xs text-text-muted">{t.footer.officer}</p>
          <p className="mt-2 text-xs text-text-muted">{t.footer.established}</p>
          <p className="mt-1 text-xs leading-relaxed text-text-muted">{t.footer.address}</p>
        </motion.div>

        {/* Links */}
        <div className="flex gap-6">
          {t.footer.links.map((name, i) => (
            <motion.div
              key={name}
              initial={reducedMotion ? {} : { opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.4, ease: "easeOut" }}
              whileHover={reducedMotion ? {} : { y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={footerRoutes[i]}
                className="text-xs text-text-muted transition-colors hover:text-gold active:text-gold"
              >
                {name}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-[10px] text-white/15"
          initial={reducedMotion ? {} : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {t.footer.copyright}
        </motion.p>
      </div>
    </footer>
  );
}
