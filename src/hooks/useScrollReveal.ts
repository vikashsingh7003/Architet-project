import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal() {
  useEffect(() => {
    // Cinematic Reveal (fade up and in)
    const revealEls = gsap.utils.toArray<HTMLElement>(".reveal");
    revealEls.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 50, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Reveal Left
    const revealLeftEls = gsap.utils.toArray<HTMLElement>(".reveal-left");
    revealLeftEls.forEach((el) => {
      gsap.fromTo(
        el,
        { x: -50, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Reveal Right
    const revealRightEls = gsap.utils.toArray<HTMLElement>(".reveal-right");
    revealRightEls.forEach((el) => {
      gsap.fromTo(
        el,
        { x: 50, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Reveal Scale
    const revealScaleEls = gsap.utils.toArray<HTMLElement>(".reveal-scale");
    revealScaleEls.forEach((el) => {
      gsap.fromTo(
        el,
        { scale: 0.9, autoAlpha: 0 },
        {
          scale: 1,
          autoAlpha: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // We can manually call ScrollTrigger.refresh() if dynamic content shifts occur.
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
}
