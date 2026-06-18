import { useEffect } from "react";
import { useLocation } from "wouter";
import { ArrowIcon } from "../components/ArrowIcon";
import { ContactForm } from "../components/ContactForm";
import { useLang } from "../context/LanguageContext";
import { useScrollReveal } from "../hooks/useScrollReveal";

const SOLAR_PROJECTS = [
  {
    id: "s1",
    bgUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&q=80&auto=format&fit=crop",
    alt: "Solar rooftop residence",
    tagEn: "Residential",
    tagPl: "Mieszkalny",
    titleEn: "Solar Villa — Integrated Rooftop Array",
    titlePl: "Solar Villa — Zintegrowany System Dachowy",
    areaEn: "480 m² · 32 kWp",
    areaPl: "480 m² · 32 kWp",
  },
  {
    id: "s2",
    bgUrl: "https://images.unsplash.com/photo-1548348539-dce7b19ede37?w=900&q=80&auto=format&fit=crop",
    alt: "Commercial solar facade",
    tagEn: "Commercial",
    tagPl: "Komercyjny",
    titleEn: "Office Park — BIPV Façade System",
    titlePl: "Park Biurowy — System Fasadowy BIPV",
    areaEn: "3,200 m² · 210 kWp",
    areaPl: "3 200 m² · 210 kWp",
  },
  {
    id: "s3",
    bgUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&auto=format&fit=crop",
    alt: "Public solar canopy",
    tagEn: "Public",
    tagPl: "Publiczny",
    titleEn: "Transit Hub — Solar Canopy",
    titlePl: "Węzeł Komunikacyjny — Zadaszenie Solarne",
    areaEn: "1,800 m² · 140 kWp",
    areaPl: "1 800 m² · 140 kWp",
  },
];

const SERVICES = [
  {
    icon: "◈",
    titleEn: "Solar Integration Design",
    titlePl: "Projektowanie Integracji Solarnej",
    bodyEn: "We embed photovoltaic panels directly into the architectural form — rooftops, facades, canopies — so that energy generation becomes part of the aesthetic, not an afterthought.",
    bodyPl: "Wbudowujemy panele fotowoltaiczne bezpośrednio w formę architektoniczną — dachy, fasady, zadaszenia — tak aby generowanie energii stało się częścią estetyki.",
  },
  {
    icon: "◎",
    titleEn: "Energy Performance Modelling",
    titlePl: "Modelowanie Wydajności Energetycznej",
    bodyEn: "Using advanced simulation software we calculate solar yield, shading analysis, and payback periods before a single panel is ordered, ensuring your system is sized perfectly.",
    bodyPl: "Używając zaawansowanego oprogramowania symulacyjnego obliczamy uzysk solarny, analizę zacienienia i okresy zwrotu, zanim zostanie zamówiony jeden panel.",
  },
  {
    icon: "◉",
    titleEn: "BIPV Façade Systems",
    titlePl: "Systemy Fasadowe BIPV",
    bodyEn: "Building-integrated photovoltaics replace conventional cladding materials while generating clean energy. We specify and detail BIPV solutions for curtain walls, skylights, and brise-soleils.",
    bodyPl: "Fotowoltaika zintegrowana z budynkiem zastępuje konwencjonalne materiały okładzinowe, jednocześnie generując czystą energię.",
  },
  {
    icon: "◇",
    titleEn: "Passive Solar Strategy",
    titlePl: "Strategia Pasywna Solarna",
    bodyEn: "Beyond active panels, we orient buildings, size overhangs, and select glazing to maximise natural heating in winter and minimise solar gain in summer — reducing loads before they occur.",
    bodyPl: "Poza aktywnymi panelami, orientujemy budynki, dobieramy okapy i szyby, aby maksymalizować naturalne ogrzewanie zimą i minimalizować nagrzewanie latem.",
  },
];

const STATS = [
  { valueEn: "40%", valuePl: "40%", labelEn: "avg. energy reduction", labelPl: "śr. redukcja energii" },
  { valueEn: "120+", valuePl: "120+", labelEn: "solar projects completed", labelPl: "ukończonych projektów" },
  { valueEn: "8 MW", valuePl: "8 MW", labelEn: "installed solar capacity", labelPl: "zainstalowana moc" },
  { valueEn: "12 yr", valuePl: "12 lat", labelEn: "of solar architecture", labelPl: "doświadczenia" },
];

export function SolarPage() {
  const [, navigate] = useLocation();
  const { lang, tr } = useLang();
  const s = tr.solar;

  useScrollReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const scrollToContact = () => {
    const el = document.getElementById("solar-contact");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="solar-page">

      {/* ── HERO ── */}
      <section className="solar-hero" aria-label="Solar architecture hero">
        <div className="solar-hero-bg" />
        <div className="solar-hero-overlay" />
        <div className="solar-hero-content">
          <p className="solar-hero-label reveal">{s.heroLabel}</p>
          <h1 className="solar-hero-title reveal reveal-delay-1">{s.heroTitle}</h1>
          <p className="solar-hero-subtitle reveal reveal-delay-2">{s.heroSubtitle}</p>
          <div className="solar-hero-btns reveal reveal-delay-3">
            <button className="btn btn-primary-lg" onClick={scrollToContact}>
              <ArrowIcon size={16} />{s.heroBtn}
            </button>
            <button className="btn btn-outline" onClick={() => navigate("/")}>
              {s.backBtn}
            </button>
          </div>
        </div>
      </section>

      {/* ── INTRO STRIP ── */}
      <section className="solar-intro" aria-label="Solar introduction">
        <div className="solar-intro-inner">
          <div className="solar-intro-text reveal">
            <div className="section-label" style={{ color: "#191919" }}><span>{s.introLabel}</span></div>
            <h2 className="solar-intro-heading reveal reveal-delay-1">{s.introHeading}</h2>
            <p className="solar-intro-body reveal reveal-delay-2">{s.introBody}</p>
          </div>
          <div className="solar-intro-image reveal reveal-delay-1">
            <img
              src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80&auto=format&fit=crop"
              alt="Solar panel detail"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="solar-stats" aria-label="Key numbers">
        <div className="solar-stats-inner">
          {STATS.map((stat, i) => (
            <div key={i} className="solar-stat reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <span className="solar-stat-value">{lang === "pl" ? stat.valuePl : stat.valueEn}</span>
              <span className="solar-stat-label">{lang === "pl" ? stat.labelPl : stat.labelEn}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="solar-services" aria-labelledby="solar-services-heading">
        <div className="solar-services-inner">
          <div className="solar-services-header">
            <div className="section-label reveal"><span>{s.servicesLabel}</span></div>
            <h2 id="solar-services-heading" className="solar-section-title reveal reveal-delay-1">{s.servicesTitle}</h2>
          </div>
          <div className="solar-services-grid">
            {SERVICES.map((svc, i) => (
              <div key={i} className={`solar-service-card reveal${i % 2 === 1 ? " reveal-delay-1" : ""}`}>
                <span className="solar-service-icon">{svc.icon}</span>
                <h3 className="solar-service-title">{lang === "pl" ? svc.titlePl : svc.titleEn}</h3>
                <p className="solar-service-body">{lang === "pl" ? svc.bodyPl : svc.bodyEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="solar-projects" aria-labelledby="solar-projects-heading">
        <div className="solar-projects-header reveal">
          <div className="section-label"><span>{s.projectsLabel}</span></div>
          <h2 id="solar-projects-heading" className="solar-section-title reveal reveal-delay-1">{s.projectsTitle}</h2>
        </div>
        <div className="solar-projects-grid">
          {SOLAR_PROJECTS.map((proj, i) => (
            <article key={proj.id} className={`solar-project-card reveal${i > 0 ? " reveal-delay-1" : ""}`}>
              <div className="solar-project-bg" style={{ backgroundImage: `url('${proj.bgUrl}')` }} role="img" aria-label={proj.alt} />
              <div className="solar-project-overlay" />
              <div className="solar-project-content">
                <span className="tag-pill">{lang === "pl" ? proj.tagPl : proj.tagEn}</span>
                <h3 className="solar-project-title">{lang === "pl" ? proj.titlePl : proj.titleEn}</h3>
                <p className="solar-project-area">{lang === "pl" ? proj.areaPl : proj.areaEn}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA + CONTACT ── */}
      <section id="solar-contact" className="solar-cta-section" aria-labelledby="solar-cta-heading">
        <div className="solar-cta-left">
          <p className="bottom-cta-label reveal">{s.ctaLabel}</p>
          <h2 id="solar-cta-heading" className="bottom-cta-heading reveal reveal-delay-1">{s.ctaHeading}</h2>
          <p className="bottom-cta-text reveal reveal-delay-2">{s.ctaText}</p>
          <div className="solar-cta-bullets reveal reveal-delay-3">
            {(lang === "pl" ? s.ctaBulletsPl : s.ctaBulletsEn).map((b: string, i: number) => (
              <div key={i} className="solar-cta-bullet">
                <span className="solar-bullet-dot" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="solar-cta-right reveal reveal-delay-1">
          <ContactForm />
        </div>
      </section>

    </div>
  );
}
