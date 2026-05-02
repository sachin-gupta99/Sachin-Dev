# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal portfolio site for Sachin Gupta. Single-page React app with anchored scroll sections (Hero → About → Experience → Projects → Education → Community → Certifications → Contact). A Spring Boot + Neon DB backend is planned for a later phase — this repo is frontend-only for now.

## Commands

- `npm install` — install dependencies
- `npm run dev` — start Vite dev server at http://localhost:5173
- `npm run build` — type-check (`tsc -b`) then produce a production bundle in `dist/`
- `npm run preview` — serve the built bundle locally

## Stack

- **Vite + React 18 + TypeScript** (SPA, no SSR)
- **Tailwind CSS** — theme extended in `tailwind.config.js` (slate + cyan accent, `ink.*` grayscale, `accent.*` cyan, `shadow-glow`, `animate-float`)
- **React Three Fiber + drei** for the hero's floating icosahedron (`src/components/HeroScene.tsx`) — the only 3D on the page
- **framer-motion** for section entry animations

## Architecture

Content lives in typed modules under `src/data/` (`profile`, `experience`, `education`, `projects`, `community`, `certifications`). Sections in `src/sections/` import from there and render. **To update portfolio content, edit the data files, not the section components.**

Structure:
- `src/App.tsx` — composes sections in order
- `src/components/` — `Nav`, `Footer`, `Section` (shared wrapper), `HeroScene` (R3F)
- `src/sections/` — one file per section, all consume data modules
- `src/styles/global.css` — Tailwind directives plus `.section`, `.card`, `.pill`, `.link-underline` component classes used throughout

## Content status

Several data files contain TODO placeholders (marked with `// TODO:` comments) — real dates, company name, project descriptions, certifications, and achievements still need to be filled in. Projects and profile/skills are populated from the user's public GitHub profile.
