"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/hooks";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const reducedMotion = useReducedMotion();
  const lenisRef = useRef<unknown>(null);

  useEffect(() => {
    if (reducedMotion) return;

    let cancelled = false;
    let rafHandle: number;

    async function initLenis() {
      try {
        const LenisModule = await import("lenis");
        const Lenis = LenisModule.default;

        if (cancelled) return;

        const lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          touchMultiplier: 1.5,
        });

        lenisRef.current = lenis;

        function raf(time: number) {
          lenis.raf(time);
          if (!cancelled) {
            rafHandle = requestAnimationFrame(raf);
          }
        }

        rafHandle = requestAnimationFrame(raf);
      } catch {
        // Lenis failed to load - graceful degradation, native scroll works fine
      }
    }

    initLenis();

    return () => {
      cancelled = true;
      if (rafHandle) cancelAnimationFrame(rafHandle);
      if (lenisRef.current && typeof (lenisRef.current as { destroy?: () => void }).destroy === "function") {
        (lenisRef.current as { destroy: () => void }).destroy();
      }
      lenisRef.current = null;
    };
  }, [reducedMotion]);

  return <>{children}</>;
}
