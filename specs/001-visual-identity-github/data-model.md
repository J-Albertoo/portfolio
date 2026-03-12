# Data Model: Identidade Visual Data & AI + GitHub Correto

**Branch**: `001-visual-identity-github` | **Date**: 2026-03-12

All data lives exclusively in `lib/data.ts`. No database, no API, no runtime fetch.

---

## Entity: `Personal`

Single object — author identity and contact info.

| Field | Type | Constraint |
|-------|------|------------|
| `name` | `string` | First name only — used in Hero headline |
| `lastName` | `string` | Last name only — used in Hero headline |
| `fullName` | `string` | Full legal name — used in Footer, metadata |
| `title` | `string` | Professional title displayed under name |
| `subtitle` | `string` | Hero section tagline |
| `bio` | `string` | Short paragraph — consistent with GitHub bio |
| `email` | `string` | Valid email address |
| `phone` | `string` | Brazilian format `(XX) XXXXX-XXXX` |
| `github` | `string` | MUST be `https://github.com/J-Albertoo` (two o's) |
| `linkedin` | `string` | MUST be `https://www.linkedin.com/in/joaoalbuquerque312/` |
| `startup` | `string` | `https://corpnexus.com.br/` |
| `location` | `string` | Human-readable city/state — not coordinates |

---

## Entity: `Metric`

Array of 4 items displayed in the Metrics panel.

| Field | Type | Constraint |
|-------|------|------------|
| `label` | `string` | Short descriptor (≤ 30 chars) |
| `value` | `string` | Displayed number or word; approximate values prefixed with `~` |
| `suffix` | `string` | Symbol appended to value (`+`, `→`, or empty string) |

---

## Entity: `Experience`

Array ordered most-recent first.

| Field | Type | Constraint |
|-------|------|------------|
| `company` | `string` | Exact employer name from CV |
| `role` | `string` | Exact role title from CV |
| `period` | `string` | Human-readable range, e.g., `"Dez 2025 – Atual"` |
| `current` | `boolean` | `true` only for the active role — drives "Atual" badge |
| `description` | `string` | Max ~300 chars; sourced from CV |
| `tags` | `string[]` | Tech/skill tags relevant to the role; max 6 items |

---

## Entity: `Education`

Array ordered most-recent first.

| Field | Type | Constraint |
|-------|------|------------|
| `institution` | `string` | Full institution name |
| `degree` | `string` | Full degree name |
| `period` | `string` | Year range |
| `status` | `"Cursando" \| "Incompleto" \| "Concluído"` | Drives status badge colour |

---

## Entity: `SkillCategory`

Array of 4 categories displayed in Bento Grid.

| Field | Type | Constraint |
|-------|------|------------|
| `name` | `string` | Category label |
| `icon` | `string` | Lucide icon name — MUST exist in lucide-react export |
| `skills` | `string[]` | Technology/tool names; max 8 items per category |

---

## Entity: `GitHubRepo`

Array of 4 projects. Replaces legacy `url` field with separate `githubUrl` and `demoUrl`.

| Field | Type | Constraint |
|-------|------|------------|
| `name` | `string` | Project display name |
| `description` | `string` | Max ~200 chars |
| `language` | `string` | Primary language — drives language badge colour |
| `tags` | `string[]` | Technology tags; max 4 items |
| `githubUrl` | `string \| null` | Public GitHub repo URL or `null` if private |
| `demoUrl` | `string \| null` | Live demo/site URL or `null` if unavailable |
| `isPrivate` | `boolean` | `true` → renders "Repo Privado" badge instead of GitHub button |

**Invariant**: If `isPrivate === true`, then `githubUrl` MUST be `null`.  
**Invariant**: If `isPrivate === false` and `githubUrl !== null`, URL MUST start with `https://github.com/J-Albertoo/`.

---

## Entity: `ShowcaseItem` (local to `GitHubShowcase.tsx`)

Defined inline in the component — not exported from `lib/data.ts`.

| Field | Type | Constraint |
|-------|------|------------|
| `title` | `string` | Exact repository slug from `github.com/J-Albertoo` |
| `description` | `string` | Curated description |
| `lang` | `string` | Primary language |
| `color` | `"emerald" \| "cyan"` | Determines hover glow accent |
| `url` | `string` | Direct link to the repository |

---

## Visual/Decoration Entities (no data file — defined in component files)

### `NeuralNode` (in `Hero.tsx`)

| Field | Type | Purpose |
|-------|------|---------|
| `cx` | `number` | SVG x-coordinate |
| `cy` | `number` | SVG y-coordinate |
| `r` | `number` | Circle radius (2–4) |
| `delay` | `string` | CSS animation-delay value e.g. `"0.4s"` |

### `NeuralEdge` (in `Hero.tsx`)

Represented as `[number, number]` tuple — indices into the `nodes` array.

---

## State Transitions

No runtime state transitions — all data is static. The only client-side state is:
- `Navbar.tsx`: `scrolled: boolean` — derived from `window.scrollY`, drives blur/border on navbar.
