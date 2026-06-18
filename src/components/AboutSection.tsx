import { ArrowIcon } from "./ArrowIcon";
import { useLang } from "../context/LanguageContext";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const navHeight = window.innerWidth <= 1024 ? 80 : 0;
  const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
  window.scrollTo({ top, behavior: "smooth" });
};

export function AboutSection() {
  const { tr } = useLang();
  const a = tr.about;
  return (
    <section id="about" className="about-section" aria-labelledby="about-heading">
      <div className="about-inner">
        <div className="about-text-col">
          <div className="section-label reveal"><span>{a.label}</span></div>
          <h2 id="about-heading" className="about-heading reveal reveal-delay-1">{a.heading}</h2>
          <p className="about-body reveal reveal-delay-2">{a.body}</p>
          <div className="about-btns reveal reveal-delay-3">
            <a href="#about" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollTo("about"); }}>
              <ArrowIcon />{a.btnAbout}
            </a>
            <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>
              <ArrowIcon />{a.btnContact}
            </a>
          </div>
        </div>
        <div className="about-image-col reveal reveal-delay-2">
          <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80&auto=format&fit=crop"
            alt="Modern architectural building" width={800} height={776} loading="lazy" />
        </div>
      </div>
    </section>
  );
}
