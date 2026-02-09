import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import HorizontalScroll from "@/components/HorizontalScroll";
import Stories from "@/components/Stories";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function Home() {
  return (
    <ErrorBoundary name="Root">
      <SmoothScroll>
        <main className="min-h-screen bg-background">
          <ErrorBoundary name="Hero">
            <Hero />
          </ErrorBoundary>
          <ErrorBoundary name="Marquee">
            <Marquee />
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
          <ErrorBoundary name="Stories">
            <Stories />
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
  );
}
