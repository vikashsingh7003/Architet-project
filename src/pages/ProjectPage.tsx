import { useState, useCallback } from "react";
import { useLocation } from "wouter";
import { projects } from "../data/projects";
import { Lightbox } from "../components/Lightbox";
import { useLang } from "../context/LanguageContext";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface ProjectPageProps {
  slug: string;
}

export function ProjectPage({ slug }: ProjectPageProps) {
  const [, navigate] = useLocation();
  const { lang, tr } = useLang();
  const p = tr.projects;

  const project = projects.find((proj) => proj.slug === slug);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useScrollReveal();

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = useCallback(() => {
    if (lightboxIndex === null || !project) return;
    setLightboxIndex((lightboxIndex - 1 + project.images.length) % project.images.length);
  }, [lightboxIndex, project]);
  const nextImage = useCallback(() => {
    if (lightboxIndex === null || !project) return;
    setLightboxIndex((lightboxIndex + 1) % project.images.length);
  }, [lightboxIndex, project]);

  if (!project) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
        <div style={{ textAlign: "center" }}>
          <h2>Project not found</h2>
          <button className="btn btn-primary" style={{ marginTop: 20 }} onClick={() => navigate("/")}>
            {p.backBtn}
          </button>
        </div>
      </div>
    );
  }

  const title = lang === "pl" ? project.titlePl : project.titleEn;
  const description = lang === "pl" ? project.descriptionPl : project.descriptionEn;

  return (
    <div className="project-page">
      <div
        className="project-page-hero"
        style={{ backgroundImage: `url('${project.bgUrl}')` }}
      >
        <div className="project-page-hero-overlay" />
        <div className="project-page-hero-content">
          <button className="project-page-back btn btn-outline" onClick={() => navigate("/")}>
            {p.backBtn}
          </button>
          <p className="fp-city" style={{ marginTop: 40 }}>{project.city}</p>
          <h1 className="project-page-title">{title}</h1>
          <div className="project-page-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag-pill">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="project-page-body">
        <div className="project-page-inner">
          <div className="project-page-description">
            {description.map((para, i) => (
              <p key={i} className="project-page-para reveal">{para}</p>
            ))}
          </div>

          <div className="project-page-specs reveal reveal-delay-1">
            <h3 className="specs-title">{p.specs}</h3>
            <div className="specs-grid">
              <div className="spec-item">
                <span className="spec-label">{p.specYear}</span>
                <span className="spec-value">{project.specs.year}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">{p.specType}</span>
                <span className="spec-value">{project.specs.type}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">{p.specArea}</span>
                <span className="spec-value">{project.specs.area}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">{p.specLocation}</span>
                <span className="spec-value">{project.specs.location}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">{p.specStatus}</span>
                <span className="spec-value">{project.specs.status}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="project-page-gallery">
          <h3 className="gallery-title reveal">{p.gallery}</h3>
          <div className="gallery-grid">
            {project.images.map((img, i) => (
              <button
                key={i}
                className={`gallery-item reveal${i % 3 === 0 ? "" : i % 3 === 1 ? " reveal-delay-1" : " reveal-delay-2"}`}
                onClick={() => openLightbox(i)}
                aria-label={`Open image ${i + 1}`}
              >
                <img src={img} alt={`${title} — image ${i + 1}`} loading="lazy" />
                <div className="gallery-item-overlay">
                  <span className="gallery-zoom-icon">⊕</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={project.images}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </div>
  );
}
