# Dependency Graph

## Core Dependencies
- **React**: Core UI library.
- **Wouter**: Handling all client-side routing.
- **Tailwind CSS**: Utility-first CSS styling.
- **Lenis**: Smooth scrolling manager.
- **GSAP**: Animations and scroll reveals.

## Internal Dependencies
- `App.tsx` depends on `HomePage`, `SolarPage`, `ProjectPage`, and multiple components (Header, Footer, HeroSection, etc.).
- `ProjectPage.tsx` and `ProjectsGrid.tsx` depend on `src/data/projects.ts` for dummy data.
- Components
    ├── hooks/
    │   └── useScrollReveal.ts (Depends on GSAP ScrollTrigger)
    ├── i18n/ depend on `useScrollReveal` hook for entrance animations.
