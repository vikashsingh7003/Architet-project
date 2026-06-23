# memory.md

## Project Overview
This project (`architect-site`) is a portfolio/marketing website for an architectural firm. It showcases their projects, features smooth scrolling (Lenis), animations (GSAP), and responsive UI.

## Business Purpose
The business problem solved is providing a high-end, premium online presence for an architecture studio or independent architect to display their past projects and solar architecture expertise. The primary users are potential clients.

## Tech Stack
- **Frontend Framework**: React (via Vite)
- **Routing**: Wouter
- **Styling**: Tailwind CSS
- **Animations**: GSAP, Framer Motion
- **Smooth Scrolling**: Lenis
- **Backend/Database**: None detected (purely static/frontend).

## Repository Structure
- `src/`: React source files (components, pages, context, data, hooks).
- `public/`: Static assets (images, videos).
- `package.json`, `vite.config.ts`, `tsconfig.json`: Build & dependency configurations.

## System Architecture
Static Frontend SPA (Single Page Application). See `architecture.md`.

## Routing Map
See `routes.md`.

## Frontend Architecture
- `src/App.tsx`: Main entry point handling routing and global providers.
- `src/components/`: Reusable UI components (HeroSection, AboutSection, FeaturedProjects, ProjectsGrid, etc.).
- `src/pages/`: Full page views (ProjectPage, SolarPage).
- `src/context/`: React context providers (LanguageContext).
- `src/data/`: Hardcoded project data (mock backend).
- `src/hooks/`: Custom React hooks (useScrollReveal).

## Backend Architecture
N/A (No backend).

## Database Architecture
N/A (No database). See `database-map.md`.

## Authentication Flow
N/A (No authentication).

## API Inventory
N/A (No API). See `api-map.md`.

## Data Flow Diagrams
User Action -> React Components -> State Update/Router -> UI Render.

## Environment Variables
None explicitly required for core functionality. 

## Dependency Graph
See `dependency-graph.md`.

## Known Risks / Future Recommendations
- Placeholder images are currently used; they need to be replaced with real assets.
- Potential performance issues if high-resolution images/videos are not properly optimized.
