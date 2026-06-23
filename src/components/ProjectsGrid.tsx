import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { ChevronIcon } from "./ArrowIcon";
import { useLang } from "../context/LanguageContext";
import { gridProjects } from "../data/projects";
import { FocusCards } from "./ui/focus-cards";

export function ProjectsGrid() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [, navigate] = useLocation();
  const { tr } = useLang();
  const p = tr.projects;

  return (
    <section className="projects-section relative" aria-labelledby="projects-grid-heading">
      <div className="projects-header-row relative z-10">
        <div className="projects-header-left reveal">
          <h2 id="projects-grid-heading" className="projects-header-title">{p.sectionTitle}</h2>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="projects-see-more-btn reveal reveal-delay-1 bg-transparent border-none cursor-pointer p-0 text-left"
          >
            <motion.span 
              animate={{ rotate: isExpanded ? 90 : 0 }} 
              transition={{ duration: 0.3 }}
              className="inline-flex"
            >
              <ChevronIcon />
            </motion.span>
            {p.seeMore}
          </button>
        </div>
        <div className="projects-header-right reveal reveal-delay-1">
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="projects-description">{p.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="relative z-10">
        <FocusCards 
          cards={gridProjects.map((card) => ({
            title: card.title,
            description: card.description,
            src: card.bgUrl,
            onClick: () => navigate(`/projects/${card.slug}`),
          }))} 
        />
      </div>
    </section>
  );
}
