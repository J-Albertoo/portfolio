# Implementation Plan: Identidade Visual Data & AI + GitHub Correto

**Branch**: `001-visual-identity-github` | **Date**: 2026-03-12 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-visual-identity-github/spec.md`

## Summary

Três mudanças paralelas no portfólio Next.js:

1. **Correção de handle GitHub** — substituir todas as ocorrências de `J-Alberto0` (com zero) por `J-Albertoo` (dois "o") em todos os componentes e dados.
2. **Identidade visual Data & AI** — animar o decorativo SVG de rede neural na Hero section (desktop: grafo animado; mobile: pontos flutuantes isolados via `MobileNeuralDots`).
3. **Badge "Repo Privado"** — projetos sem repositório GitHub público exibem badge com ícone `Lock` ao invés de link GitHub genérico; `lib/data.ts` recebe campos `githubUrl | null`, `demoUrl | null`, `isPrivate: boolean`.

Todas as mudanças são **puramente front-end e estáticas** — sem API, sem banco, sem variáveis de ambiente.

## Technical Context

**Language/Version**: TypeScript 5 (strict mode) + CSS (inline SVG keyframes)
**Primary Dependencies**: Next.js 14.2.29, Tailwind CSS 3.4, lucide-react 0.441
**Storage**: N/A — conteúdo 100% estático em `lib/data.ts`
**Testing**: Inspeção visual manual no browser + verificação de build (`npm run build` zero erros)
**Target Platform**: Web — Vercel/Netlify free tier; browsers modernos (Chrome/Firefox/Safari/Edge)
**Project Type**: Web application — one-page portfolio (Next.js App Router, static export)
**Performance Goals**: Lighthouse ≥ 90 desktop; animações CSS sem JS adicional
**Constraints**: Zero dependências novas; zero variáveis de ambiente; deploy sem configuração extra
**Scale/Scope**: ~10 componentes, ~160 linhas por componente (limite constitucional: 200)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Princípio | Regra | Status |
|-----------|-------|--------|
| I. Visual Design First | Acentos esmeralda/ciano mantidos; padding `py-24` preservado; glow em hover em todos os cards | ✅ PASS |
| I. Visual Design First | Animações entre 200 ms e 500 ms | ✅ PASS — `edgePulse` 3s, `nodePulse` 2.5s são decorativos, não transições de UI |
| II. Componentised Architecture | Sub-componentes `NeuralDecoration` e `MobileNeuralDots` extraídos; `Hero.tsx` ≤ 200 linhas | ✅ PASS |
| II. Componentised Architecture | Ícone `Lock` de lucide-react; sem library adicional | ✅ PASS |
| II. Componentised Architecture | `isPrivate`, `githubUrl`, `demoUrl` tipados em `lib/data.ts`; `any` ausente | ✅ PASS |
| III. Content Fidelity | `personal.github = "https://github.com/J-Albertoo"` | ✅ PASS |
| III. Content Fidelity | Repos reais: `datacamp-competition`, `lingustic-comfort-zone`, `J-Albertoo.github.io` | ✅ PASS |
| III. Content Fidelity | LinkedIn `https://www.linkedin.com/in/joaoalbuquerque312/` | ✅ PASS |
| IV. Performance | SVG inline, zero fetch, zero script adicional | ✅ PASS |
| IV. Performance | `tailwind.config` sem safelist | ✅ PASS |
| V. Accessibility | SVGs decorativos com `aria-hidden="true"` | ✅ PASS |
| V. Accessibility | `Lock` badge é texto + ícone — legível por screen readers | ✅ PASS |
| V. Accessibility | Contraste WCAG AA não afetado — decorações são `opacity < 0.15` | ✅ PASS |

**Constitution Check: ALL GATES PASS** — nenhuma violação, Complexity Tracking não necessário.

## Project Structure

### Documentation (this feature)

```text
specs/001-visual-identity-github/
├── plan.md              ← este arquivo
├── research.md          ← decisões técnicas Phase 0
├── data-model.md        ← entidades e tipos Phase 1
├── quickstart.md        ← setup e verificação Phase 1
├── contracts/
│   └── component-props.md  ← interfaces de componentes Phase 1
└── tasks.md             ← gerado por /speckit.tasks
```

### Source Code

```text
portfolio/                          ← raiz do projeto
├── app/
│   ├── layout.tsx                  ← metadata, Inter font, lang="pt-BR"
│   ├── page.tsx                    ← composição de todos os componentes
│   └── globals.css                 ← Tailwind directives + keyframes globais
├── components/
│   ├── Navbar.tsx                  ← navbar fixa; lê personal.github/.linkedin
│   ├── Hero.tsx                    ← foto + headline + NeuralDecoration + MobileNeuralDots  ← MODIFICADO
│   ├── Metrics.tsx                 ← painel de 4 métricas
│   ├── Experience.tsx              ← timeline + educação
│   ├── Skills.tsx                  ← bento grid de skills
│   ├── Projects.tsx                ← cards com badge Repo Privado  ← MODIFICADO
│   ├── GitHubShowcase.tsx          ← showcase com repos reais  ← MODIFICADO
│   ├── Contact.tsx                 ← cards de contato  ← MODIFICADO (handle correto)
│   └── Footer.tsx                  ← rodapé  ← MODIFICADO (handle correto)
├── lib/
│   └── data.ts                     ← ÚNICA fonte de conteúdo  ← MODIFICADO (handle + isPrivate)
├── public/
│   └── profile.jpg
└── .specify/
    └── memory/constitution.md      ← MODIFICADO (handle correto)
```

**Structure Decision**: Single project — Next.js App Router, sem backend, sem separação frontend/backend. Toda lógica de dado em `lib/data.ts`, toda apresentação em `components/`.

## Implementation Status

Todas as mudanças desta feature foram implementadas durante o ciclo de `/speckit.specify` e `/speckit.clarify`:

| Entregável | Arquivo(s) | Status |
|------------|-----------|--------|
| Handle GitHub corrigido | `lib/data.ts`, todos os componentes | ✅ Done |
| Animação CSS na rede neural (desktop) | `components/Hero.tsx` — `NeuralDecoration` | ✅ Done |
| Elemento mobile (`MobileNeuralDots`) | `components/Hero.tsx` — `MobileNeuralDots` | ✅ Done |
| Badge "Repo Privado" | `components/Projects.tsx` + `lib/data.ts` | ✅ Done |
| Repos reais no Showcase | `components/GitHubShowcase.tsx` + `lib/data.ts` | ✅ Done |
| Tipos `githubUrl/demoUrl/isPrivate` | `lib/data.ts` | ✅ Done |

**Próximo passo**: `/speckit.tasks` para quebrar em tarefas rastreáveis, ou `npm install && npm run dev` para ver o resultado.
