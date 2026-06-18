import { ArrowIcon } from "./ArrowIcon";
import { useLang } from "../context/LanguageContext";
import MouseEffectCard from "./MouseEffectCard";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const navHeight = window.innerWidth <= 1024 ? 80 : 0;
  const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
  window.scrollTo({ top, behavior: "smooth" });
};

export function QuoteSection() {
  const { tr } = useLang();
  const q = tr.quote;
  
  return (
    <section className="quote-section" aria-label="Quote and call to action" style={{ minHeight: "80vh", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#000" }}>
      <div className="quote-overlay" aria-hidden="true" style={{ zIndex: 1 }} />
      
      <MouseEffectCard 
        className="absolute inset-0 w-full h-full z-10 !max-w-none !border-none !rounded-none !bg-transparent"
        contentClassName="!h-full w-full"
        dotSize={48}
        dotSpacing={96}
        topText="APA Via"
        topSubtext="Design without limits"
        title="Infinite Possibilities"
        subtitle={q.subtitle}
        primaryCtaText={q.btn}
        primaryCtaUrl="#about"
        footerText="Architecture & Design"
      >
        {q.title}
      </MouseEffectCard>
    </section>
  );
}
