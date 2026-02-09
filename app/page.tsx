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
    <ErrorBoundary>
      <SmoothScroll>
        <main className="min-h-screen bg-background">
          <Hero />
          <Features />
          <Gallery />
          <Stories />
          <CTA />
          <Footer />
        </main>
      </SmoothScroll>
    </ErrorBoundary>
  );
}
