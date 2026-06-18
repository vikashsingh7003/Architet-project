import { useEffect } from "react";
import { Route, Switch } from "wouter";
import { Agentation } from "agentation";
import { LanguageProvider } from "./context/LanguageContext";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { ProjectsGrid } from "./components/ProjectsGrid";
import { StatsSection } from "./components/StatsSection";
import { QuoteSection } from "./components/QuoteSection";
import { BottomCTA } from "./components/BottomCTA";
import { Footer } from "./components/Footer";
import { ProjectPage } from "./pages/ProjectPage";
import { SolarPage } from "./pages/SolarPage";
import { useScrollReveal } from "./hooks/useScrollReveal";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

function SmoothScroller() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return null;
}

function HomePage() {
  useScrollReveal();
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        const btn = document.getElementById("hamburger-btn");
        const dropdown = document.getElementById("mobile-dropdown");
        if (btn?.classList.contains("open")) {
          btn.classList.remove("open");
          btn.setAttribute("aria-expanded", "false");
          dropdown?.setAttribute("hidden", "");
        }
      }
    };
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, []);

  return (
    <>
      <div className="nav-spacer" aria-hidden="true" />
      <main className="page-wrapper">
        <HeroSection />
        <AboutSection />
        <FeaturedProjects />
        <ProjectsGrid />
        <StatsSection />
        <QuoteSection />
        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}

function ProjectPageWrapper({ params }: { params: { slug: string } }) {
  useEffect(() => { window.scrollTo(0, 0); }, [params.slug]);
  return (
    <>
      <div className="nav-spacer" aria-hidden="true" />
      <ProjectPage slug={params.slug} />
      <Footer />
    </>
  );
}

function SolarPageWrapper() {
  return (
    <>
      <div className="nav-spacer" aria-hidden="true" />
      <SolarPage />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <SmoothScroller />
      <Header />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/solar" component={SolarPageWrapper} />
        <Route path="/projects/:slug">
          {(params) => <ProjectPageWrapper params={params as { slug: string }} />}
        </Route>
        <Route component={HomePage} />
      </Switch>
      {(typeof process !== 'undefined' ? process.env.NODE_ENV === 'development' : import.meta.env.DEV) && <Agentation />}
    </LanguageProvider>
  );
}
