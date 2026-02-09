import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
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
          <ErrorBoundary name="Features">
            <Features />
          </ErrorBoundary>
          <ErrorBoundary name="Gallery">
            <Gallery />
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
