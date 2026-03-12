<!--
SYNC IMPACT REPORT
==================
Version change: 0.0.0 (template) → 1.0.0
Modified principles: (all new — first ratification)
Added sections:
  - Core Principles (5 principles)
  - Tech Stack & Tooling
  - Deployment & Quality Gates
  - Governance
Templates requiring updates:
  - .specify/templates/plan-template.md ⚠ pending
  - .specify/templates/spec-template.md ⚠ pending
  - .specify/templates/tasks-template.md ⚠ pending
Deferred TODOs: none
-->

# João Albuquerque — Portfolio Constitution

## Core Principles

### I. Visual Design First (NON-NEGOTIABLE)

The portfolio MUST adhere to the **Minimal Technical / Modern Elegant** aesthetic at all times.
Non-negotiable rules:
- Background MUST be `#050505` (near-black); no light-mode variant is required.
- Body text MUST use off-white (`#F5F5F5` / `#E2E8F0`); raw white `#FFFFFF` is forbidden for large text blocks.
- Accent colour MUST be Emerald Green (`#10B981`) or Cyan (`#06B6D4`); no other accent is permitted without a constitution amendment.
- Negative space (padding/margin) MUST be generous — at minimum `py-24` between major sections.
- Every interactive card MUST implement a soft `box-shadow` glow on `:hover` using the accent colour.
- All section transitions MUST use CSS `transition` / `framer-motion` with a duration between 200 ms and 500 ms.

**Rationale**: A data portfolio's credibility is established visually before the visitor reads a single word.
Consistency and restraint in colour signal analytical rigour.

### II. Componentised Architecture (NON-NEGOTIABLE)

Every distinct UI region MUST be its own React component file under `components/`.
Non-negotiable rules:
- No component file MAY exceed 200 lines; extract sub-components when approaching this limit.
- Props MUST be typed with TypeScript interfaces or `type` aliases; `any` is forbidden.
- Components MUST be pure and data-agnostic — all content lives in a dedicated `lib/data.ts` file.
- Icons MUST come exclusively from `lucide-react`; no other icon library is permitted.

**Rationale**: Maintainability and future content updates (new projects, new roles) MUST not require touching layout code.

### III. Content Fidelity

All biographical, professional and educational content displayed on the site MUST be sourced exclusively
from João Albuquerque's verified CV (`cvjoaoalbuquerque.pdf`) and associated profiles.
Non-negotiable rules:
- No fabricated statistics, project names, or employer details are permitted.
- Metrics shown in the Data Metrics panel (years of experience, GitHub repos, etc.) MUST reflect
  real, verifiable figures or be clearly labelled as approximate (e.g., "~").
- GitHub links MUST point to `https://github.com/J-Albertoo`.
- LinkedIn link MUST point to `https://www.linkedin.com/in/joaoalbuquerque312/`.

**Rationale**: Professional integrity — misrepresenting credentials is a career-ending risk.

### IV. Performance & Deployment Readiness

The site MUST be deployable on Vercel or Netlify free tiers with zero configuration changes.
Non-negotiable rules:
- The app MUST be a Next.js 14+ App Router project with static export capability (`output: 'export'` compatible).
- All images MUST use Next.js `<Image>` with explicit `width` / `height` or `fill` + `sizes`.
- No server-side secrets or environment variables are required for the public-facing build.
- Lighthouse Performance score MUST target ≥ 90 on desktop (no blocking render resources).
- `tailwind.config` MUST purge unused classes — no `safelist` bloat.

**Rationale**: A portfolio that loads slowly or fails to deploy undermines the engineer's credibility.

### V. Accessibility & Responsiveness

The site MUST be fully usable on mobile (≥ 375 px), tablet (≥ 768 px) and desktop (≥ 1280 px).
Non-negotiable rules:
- Every interactive element MUST have a visible focus ring (`focus-visible` Tailwind utilities).
- Images of the author MUST include descriptive `alt` text.
- Colour contrast ratio MUST meet WCAG AA for all text/background pairs.
- The Bento Grid layout MUST collapse gracefully to a single-column stack on mobile.
- `<html lang="pt-BR">` MUST be set (primary language is Brazilian Portuguese).

**Rationale**: Accessibility is a baseline engineering standard, not an optional enhancement.

## Tech Stack & Tooling

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS v3+
- **Icons**: lucide-react
- **Language**: TypeScript (strict mode)
- **Animation**: CSS transitions (Tailwind) + optional `framer-motion` for entrance animations
- **Font**: Geist Sans (Next.js default) or Inter via `next/font/google`
- **Package manager**: npm
- **Deployment target**: Vercel (primary) / Netlify (secondary)

No additional UI component library (e.g., shadcn/ui, MUI) is permitted unless a constitution amendment is approved,
to keep bundle size minimal and visual customisation maximal.

## Deployment & Quality Gates

- `npm run build` MUST complete with zero errors before any deployment.
- All TypeScript errors MUST be resolved; `// @ts-ignore` is forbidden.
- ESLint (Next.js default ruleset) MUST pass with zero warnings on production build.
- The `public/` folder MUST contain the author's profile photograph at `public/profile.jpg`.
- A `README.md` MUST document local setup (`npm install && npm run dev`) and deployment steps.

## Governance

This constitution supersedes all other coding conventions for the João Albuquerque Portfolio project.
Amendments MUST:
1. Increment the version according to semantic versioning (MAJOR / MINOR / PATCH rules above).
2. Record the amendment date in `LAST_AMENDED_DATE`.
3. Provide a written rationale for the change.
4. Be reflected immediately in `.specify/memory/constitution.md`.

All implementation work MUST be verified against this constitution before marking a task complete.
Complexity introduced beyond what the principles require MUST be justified in the relevant spec or task note.

**Version**: 1.0.0 | **Ratified**: 2026-03-12 | **Last Amended**: 2026-03-12
