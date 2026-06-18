import { useLocation } from "wouter";
import { ArrowIcon } from "./ArrowIcon";
import { useLang } from "../context/LanguageContext";
import { projects } from "../data/projects";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const navHeight = window.innerWidth <= 1024 ? 80 : 0;
  const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
  window.scrollTo({ top, behavior: "smooth" });
};

const fpClasses = ["fp-1", "fp-2", "fp-3", "fp-4"];

export function FeaturedProjects() {
  const [, navigate] = useLocation();
  const { lang, tr } = useLang();
  const p = tr.projects;

  return (
    <div id="projects">
      {projects.map((project, i) => {
        const title = lang === "pl" ? project.titlePl : project.titleEn;
        const shortText = lang === "pl" ? project.shortTextPl : project.shortTextEn;
        return (
          <article key={project.id} className={`featured-project ${fpClasses[i]}`} aria-labelledby={`fp-title-${project.id}`}>
            <div className="featured-project-bg" style={{ backgroundImage: `url('${project.bgUrl}')` }} role="img" aria-label={title} />
            <div className="featured-project-overlay" aria-hidden="true" />
            <div className="featured-project-content">
              <div className="fp-glass-panel reveal">
                <div className="featured-project-inner">
                  <div>
                    <p className="fp-city">{project.city}</p>
                    <h3 id={`fp-title-${project.id}`} className="featured-project-title">{title}</h3>
                    <p className="fp-text">{shortText}</p>
                  </div>
                  <div className="featured-project-btns">
                    <button className="btn btn-primary" onClick={() => navigate(`/projects/${project.slug}`)}>
                      <ArrowIcon />{p.viewProject}
                    </button>
                    <a href="#contact" className="btn btn-outline" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>
                      {p.contact}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
