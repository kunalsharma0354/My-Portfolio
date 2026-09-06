# NEXORA Portfolio — Kunal Sharma

Personal developer portfolio for **Kunal Sharma** — web & Android developer based in Nagpur, India.

Stack: **React 18/19 + TypeScript · Vite · Tailwind CSS · Framer Motion · Lucide React**.

Design: **monochrome brutalist** — pure black/white/gray palette (no color), oversized JetBrains Mono display type, numbered section labels, film-grain noise overlay, scrolling tech marquee, and a terminal-style footer.

## Quick Start

```bash
npm install
npm run dev        # dev server
npm run build      # typecheck + production build → dist/
npm run preview    # serve production build locally
npm run lint       # oxlint
npm run typecheck  # tsc --noEmit
```

## Commands

| Command             | Purpose                                  |
| ------------------- | ---------------------------------------- |
| `npm run dev`       | Start Vite dev server                    |
| `npm run build`     | `tsc -b && vite build` → `dist/`         |
| `npm run preview`   | Preview the production build             |
| `npm run lint`      | Lint `src/` with oxlint                  |
| `npm run typecheck` | Type-check without emitting              |

## Deploy to Vercel

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production → nexora-navy-omega.vercel.app
```

`vercel.json` provides an SPA rewrite and long-lived caching for `/assets/*`.

## Project Structure

```
src/
├── components/
│   ├── common/     # ProjectCard, Reveal
│   ├── layout/     # Header, Footer
│   ├── sections/   # Hero, About, Skills, Projects, Strengths, Contact
│   └── ui/         # Button, Badge, Card, Container, Section
├── data/
│   └── portfolio.ts   # Single source of truth for all content
├── hooks/
│   └── useReducedMotion.ts
├── styles/
│   └── globals.css
├── App.tsx
└── main.tsx
```

## Customization

All content lives in **`src/data/portfolio.ts`**:

- `personalInfo` — name, location, education, headline, email, GitHub, website
- `skillGroups` — the three skill columns (Web / Android / Other)
- `projects` — each project's description, details, tech stack, category & links
- `strengths` — the strengths grid (uses Lucide icons)

Update placeholder URLs (GitHub, email) there before deploying. No components need to change.

## Accessibility

- Semantic HTML, ARIA labels, keyboard-navigable tabs & menu
- `prefers-reduced-motion: reduce` fully disables animations
- Skip-to-content link, `:focus-visible` rings, AA contrast palette