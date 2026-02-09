"use client";

import { LocaleProvider } from "@/lib/locale-context";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Concept from "@/components/Concept";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import HorizontalScroll from "@/components/HorizontalScroll";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import PhotoStrip from "@/components/PhotoStrip";
import SmoothScroll from "@/components/SmoothScroll";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function Home() {
  return (
    <LocaleProvider>
      <ErrorBoundary name="Root">
        <SmoothScroll>
          <Nav />
          <main className="min-h-screen bg-background">
            <ErrorBoundary name="Hero">
              <Hero />
            </ErrorBoundary>
            <ErrorBoundary name="Marquee">
              <Marquee />
            </ErrorBoundary>
            <ErrorBoundary name="Concept">
              <Concept />
            </ErrorBoundary>
            <ErrorBoundary name="Features">
              <Features />
            </ErrorBoundary>
            <ErrorBoundary name="Stats">
              <Stats />
            </ErrorBoundary>
            <ErrorBoundary name="Gallery">
              <Gallery />
            </ErrorBoundary>
            <ErrorBoundary name="HorizontalScroll">
              <HorizontalScroll />
            </ErrorBoundary>
            <ErrorBoundary name="PhotoStrip">
              <PhotoStrip />
            </ErrorBoundary>
            <ErrorBoundary name="CTA">
              <CTA />
            </ErrorBoundary>
            <ErrorBoundary name="Footer">
              <Footer />
            </ErrorBoundary>
          </main>
        </SmoothScroll>
      </ErrorBoundary>
    </LocaleProvider>
  );
}
