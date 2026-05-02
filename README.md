# Sachin-Dev

Personal portfolio site for [Sachin Gupta](https://github.com/sachin-gupta99) — SDE at JPMorganChase.

Live at **https://sachin-gupta99.github.io/Sachin-Dev/**

## Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** for styling
- **React Three Fiber** + **drei** for the hero and ambient 3D
- **framer-motion** for scroll reveals and micro-interactions

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production bundle in dist/
npm run preview  # serve the built bundle
```

Node 20+ recommended.

## Architecture

Content lives in typed modules under `src/data/`. Section components in
`src/sections/` consume those modules, so updating the site is almost always
editing a data file, not a component.

```
src/
  App.tsx                  composes the page
  data/                    profile, experience, education, projects,
                           community, certifications  (edit here to change content)
  components/              Nav, Footer, Section, Reveal, ScrollProgress,
                           AmbientBackground, HeroScene
  sections/                Hero, About, Experience, Projects, Education,
                           Community, Certifications, Contact
  styles/global.css        Tailwind directives + .card / .pill / .btn-* classes
```

Single-page layout with anchored scroll sections. Palette is defined in
`tailwind.config.js` (`ink.*` grayscale, `accent.*` violet, `mint.*` green).

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) builds on every push
to `main` and publishes `dist/` to GitHub Pages.

Vite's `base` is set to `/Sachin-Dev/` for the production build and `/` for
local dev, so assets resolve correctly in both environments.

One-time setup if you fork:
1. `Settings` → `Pages` → set **Source** to *GitHub Actions*
2. Update `base` in `vite.config.ts` to match your repo name

## License

[MIT](./LICENSE)
