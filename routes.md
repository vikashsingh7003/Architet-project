# ROUTES TABLE

| Route | File | Purpose | Auth Required |
|---|---|---|---|
| `/` | `src/App.tsx` (HomePage) | Main landing page | No |
| `/solar` | `src/App.tsx` (SolarPageWrapper) | Solar energy projects page | No |
| `/projects/:slug` | `src/App.tsx` (ProjectPageWrapper) | Dynamic project details page | No |
| *fallback* | `src/App.tsx` (HomePage) | Catch-all redirect to Home | No |
