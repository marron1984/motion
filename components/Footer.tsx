"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/lib/locale-context";

const footerRoutes = ["/privacy", "/terms", "/careers"];

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer id="company" className="relative px-6 py-10 sm:px-8">
      {/* Top border */}
      <div className="absolute left-6 right-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent sm:left-8 sm:right-8" />

      <div className="mx-auto flex max-w-md flex-col items-center gap-5 text-center">
        {/* Logo */}
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

        <div className="text-center">
          <p className="text-xs font-medium text-white/70">{t.footer.company}</p>
          <p className="mt-2 text-xs text-text-muted">{t.footer.ceo}</p>
          {t.footer.directors.map((d) => (
            <p key={d} className="text-xs text-text-muted">{d}</p>
          ))}
          <p className="text-xs text-text-muted">{t.footer.officer}</p>
          <p className="mt-2 text-xs text-text-muted">{t.footer.established}</p>
          <p className="mt-1 text-xs leading-relaxed text-text-muted">{t.footer.address}</p>
        </div>

        {/* Links */}
        <div className="flex gap-6">
          {t.footer.links.map((name, i) => (
            <Link
              key={name}
              href={footerRoutes[i]}
              className="text-xs text-text-muted transition-colors hover:text-gold active:text-gold"
            >
              {name}
            </Link>
          ))}
        </div>

        <p className="text-[10px] text-white/15">{t.footer.copyright}</p>
      </div>
    </footer>
  );
}
