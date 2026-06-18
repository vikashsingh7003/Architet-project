import { useState, useCallback, useEffect } from "react";
import { useLocation } from "wouter";
import { ArrowIcon } from "./ArrowIcon";
import { useLang } from "../context/LanguageContext";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location, navigate] = useLocation();
  const { lang, setLang, tr } = useLang();

  const toggleMenu = useCallback(() => setMenuOpen((o) => !o), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (location !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (!el) return;
        const navHeight = window.innerWidth <= 1024 ? 80 : 0;
        const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top, behavior: "smooth" });
      }, 80);
    } else {
      const el = document.getElementById(id);
      if (!el) return;
      const navHeight = window.innerWidth <= 1024 ? 80 : 0;
      const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const scrollToContact = () => scrollTo("contact");
  const goHome = () => { navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const goSolar = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/solar");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isSolarActive = location === "/solar";

  return (
    <header className={`site-header${scrolled ? " site-header--glass" : ""}`} id="site-header">
      <nav className={`nav-desktop${scrolled ? " nav-desktop--glass" : ""}`} aria-label="Main navigation">
        <div className="nav-logo">
          <a href="#" onClick={(e) => { e.preventDefault(); goHome(); }} aria-label="APA Via Home">
            <img src="/assets/images/logo.png" alt="APA Via"
              style={{ height: "70px", width: "auto", transform: "scale(1.7)", transformOrigin: "left center" }} />
          </a>
        </div>
        <ul className="nav-menu" role="list">
          <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo("projects"); }}>{tr.nav.projects}</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo("about"); }}>{tr.nav.about}</a></li>
          <li>
            <a href="/solar" onClick={goSolar} style={isSolarActive ? { color: "#f5c842" } : {}}>
              {tr.nav.solar}
            </a>
          </li>
        </ul>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button className="lang-toggle" onClick={() => setLang(lang === "en" ? "pl" : "en")}>
            {lang === "en" ? "PL" : "EN"}
          </button>
          <a href="#contact" className="btn btn-primary-lg" onClick={(e) => { e.preventDefault(); scrollToContact(); }}>
            <ArrowIcon />
            {tr.nav.contact}
          </a>
        </div>
      </nav>

      <nav className="nav-mobile" id="nav-mobile" aria-label="Mobile navigation">
        <div className="nav-mobile-inner">
          <div className="nav-mobile-logo">
            <a href="#" onClick={(e) => { e.preventDefault(); goHome(); }} aria-label="APA Via Home">
              <img src="/assets/images/logo.png" alt="APA Via" style={{ width: "120px", height: "auto" }} />
            </a>
          </div>
          <div className="nav-mobile-actions">
            <button className="lang-toggle lang-toggle-mobile" onClick={() => setLang(lang === "en" ? "pl" : "en")}>
              {lang === "en" ? "PL" : "EN"}
            </button>
            <a href="#contact" className="btn btn-cta" style={{ fontSize: "0.85rem", padding: "9px 14px" }}
              onClick={(e) => { e.preventDefault(); scrollToContact(); closeMenu(); }}>
              <ArrowIcon />
              {tr.nav.contact}
            </a>
            <button className={`hamburger-btn${menuOpen ? " open" : ""}`} id="hamburger-btn"
              aria-label="Toggle menu" aria-expanded={menuOpen} aria-controls="mobile-dropdown" onClick={toggleMenu}>
              <span /><span /><span />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="mobile-dropdown" id="mobile-dropdown">
            <ul role="list">
              <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo("projects"); closeMenu(); }}>{tr.nav.projects}</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo("about"); closeMenu(); }}>{tr.nav.about}</a></li>
              <li><a href="/solar" onClick={(e) => { goSolar(e); closeMenu(); }}>{tr.nav.solar}</a></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
