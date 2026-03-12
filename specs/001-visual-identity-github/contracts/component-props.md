# Component Prop Contracts

**Branch**: `001-visual-identity-github` | **Date**: 2026-03-12

This portfolio has no external API. Component props are the primary interface contract — they define the boundary between data (`lib/data.ts`) and presentation (`components/`).

---

## `<Hero />` — no props

Reads directly from `personal` (imported from `lib/data.ts`).  
Internal sub-components `NeuralDecoration` and `MobileNeuralDots` have no props — they use module-level constants.

---

## `<Navbar />` — no props

Reads `personal.github`, `personal.linkedin`, `personal.startup`.  
Internal state: `scrolled: boolean`.

---

## `<Metrics />` — no props

Reads `metrics[]` and `personal.github`.

---

## `<Experience />` — no props

Reads `experiences[]` and `education[]`.

---

## `<Skills />` — no props

Reads `skillCategories[]`.

---

## `<Projects />` — no props

Reads `githubRepos[]`.

```typescript
// Shape expected from lib/data.ts
type GitHubRepo = {
  name: string;
  description: string;
  language: string;
  tags: string[];
  githubUrl: string | null;
  demoUrl: string | null;
  isPrivate: boolean;
};
```

**Rendering rules**:
- `isPrivate === true` → render `<Lock />` badge "Repo Privado" in place of GitHub button.
- `demoUrl !== null` → render `<ExternalLink />` button.
- `githubUrl !== null && !isPrivate` → render `<Github />` button.

---

## `<GitHubShowcase />` — no props

Reads `personal.github`.  
Uses module-level `showcaseItems` array (typed inline).

```typescript
type ShowcaseItem = {
  title: string;
  description: string;
  lang: string;
  color: "emerald" | "cyan";
  url: string;
};
```

---

## `<Contact />` — no props

Reads `personal.email`, `personal.linkedin`, `personal.github`, `personal.startup`.

---

## `<Footer />` — no props

Reads `personal.fullName`, `personal.github`.

---

## Enforcement

- All components are pure (no `useState` except `Navbar`'s `scrolled`).
- All imports from `lib/data.ts` use named exports only — no default export from data file.
- TypeScript strict mode enforces all `string | null` fields are null-checked before use.
