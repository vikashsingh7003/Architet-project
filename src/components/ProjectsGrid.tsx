import { useLocation } from "wouter";
import { ChevronIcon } from "./ArrowIcon";
import { useLang } from "../context/LanguageContext";
import { gridProjects } from "../data/projects";

export function ProjectsGrid() {
  const [, navigate] = useLocation();
  const { tr } = useLang();
  const p = tr.projects;

  return (
    <section className="projects-section" aria-labelledby="projects-grid-heading">
      <div className="projects-header-row">
        <div className="projects-header-left reveal">
          <h2 id="projects-grid-heading" className="projects-header-title">{p.sectionTitle}</h2>
          <a href="#" className="projects-see-more-btn reveal reveal-delay-1">
            <ChevronIcon />{p.seeMore}
          </a>
        </div>
        <div className="projects-header-right reveal reveal-delay-1">
          <p className="projects-description">{p.description}</p>
        </div>
      </div>
      <div className="projects-grid" role="list">
        {gridProjects.map((card) => (
          <article key={card.id}
            className={`project-card reveal${card.delay ? ` ${card.delay}` : ""}`}
            role="listitem" aria-labelledby={`card-${card.id}`}
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/projects/${card.slug}`)}
          >
            <div className="project-card-bg" style={{ backgroundImage: `url('${card.bgUrl}')` }} role="img" aria-label={card.bgAlt} />
            <div className="project-card-content project-card-glass">
              <h3 id={`card-${card.id}`} className="project-card-title">{card.title}</h3>
              <div className="project-card-tags">
                {card.tags.map((tag) => <span key={tag} className="tag-pill tag-pill--glass">{tag}</span>)}
              </div>
              <p className="project-card-desc">{card.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
