import { useLocation } from "wouter";
import { useLang } from "../context/LanguageContext";

export function Footer() {
  const [, navigate] = useLocation();
  const { tr } = useLang();
  const f = tr.footer;
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const navHeight = window.innerWidth <= 1024 ? 80 : 0;
      const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }, 50);
  };

  const goSolar = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/solar");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/assets/images/logo.png" alt="APA Via"
            style={{ height: "70px", width: "auto", transform: "scale(1.4)", transformOrigin: "left center" }} />
          <p className="footer-tagline">{f.tagline}</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <p className="footer-nav-title">{f.navTitle}</p>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo("projects"); }}>{tr.nav.projects}</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo("about"); }}>{tr.nav.about}</a>
          <a href="/solar" onClick={goSolar}>{tr.nav.solar}</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>{tr.nav.contact}</a>
        </nav>
        <address className="footer-contact">
          <p className="footer-nav-title">{f.contactTitle}</p>
          <div className="footer-contact-item"><span aria-hidden="true">📍</span><span style={{ whiteSpace: "pre-wrap" }}>{f.address}</span></div>
          <div className="footer-contact-item"><span aria-hidden="true">📞</span><a href="tel:+00000000000">{f.phone}</a></div>
          <div className="footer-contact-item"><span aria-hidden="true">✉️</span><a href={`mailto:${f.email}`}>{f.email}</a></div>
        </address>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">© {year} {f.rights}</p>
        <p className="footer-copyright">{f.placeholder}</p>
      </div>
    </footer>
  );
}
