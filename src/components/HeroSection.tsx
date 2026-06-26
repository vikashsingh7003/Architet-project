import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "../context/LanguageContext";
import { ArrowIcon } from "./ArrowIcon";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const { tr } = useLang();
  const h = tr.hero;
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <section className="hero-section" aria-label="Hero">
      <div className="hero-bg" ref={bgRef} aria-hidden="true">
        <video
          className="hero-bg-img"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/Task-108802268-1-1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <h1 className="hero-title reveal">{h.title}</h1>
        <p className="hero-subtitle reveal reveal-delay-1">{h.subtitle}</p>
        <div className="hero-btns reveal reveal-delay-2">
          <a href="#projects" className="btn btn-primary-lg">
            <ArrowIcon />{h.btn}
          </a>
        </div>
      </div>
    </section>
  );
}
