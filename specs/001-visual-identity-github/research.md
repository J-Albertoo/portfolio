# Research: Identidade Visual Data & AI + GitHub Correto

**Branch**: `001-visual-identity-github` | **Date**: 2026-03-12

## Decision 1 — Animação de rede neural: CSS inline em SVG

**Decision**: Usar `@keyframes` declarados dentro de `<defs><style>` no próprio SVG, com classes CSS aplicadas a `<line>` e `<circle>`.

**Rationale**:
- Zero dependências adicionais (sem framer-motion, sem canvas, sem JS).
- SVG é inline no JSX — sem requisição de arquivo extra, sem bloqueio de render.
- `aria-hidden="true"` garante que o elemento não impacta leitores de tela.
- Animações CSS são aceleradas por GPU no browser — sem janks.
- Abordagem compatível com static export do Next.js (sem `useEffect` ou `requestAnimationFrame`).

**Alternatives considered**:
- `framer-motion` com `motion.circle`: descartado — adiciona ~30 KB ao bundle para um efeito puramente decorativo.
- `<canvas>` com `requestAnimationFrame`: descartado — bloqueia thread principal, não é progressivamente melhorável, inacessível para screen readers sem workaround complexo.
- CSS `animation` via Tailwind classes: descartado — Tailwind não suporta `animation-delay` arbitrário sem `safelist`, o que violaria a Constituição (Princípio IV).

---

## Decision 2 — Versão mobile do elemento decorativo

**Decision**: Componente `MobileNeuralDots` separado — 4 `<circle>` sem arestas (`<line>`), posicionado no canto superior direito com `absolute top-20 right-4`, `w-16 h-16`, `opacity-[0.12]`, `lg:hidden`.

**Rationale**:
- Nós sem arestas eliminam o risco de SVG sobrepor foto de perfil ou texto em viewports estreitas.
- Tamanho 64×56 px é insignificante no layout — não altera fluxo do documento.
- `opacity-[0.12]` (levemente mais visível que desktop `0.08`) compensa a ausência de arestas mantendo presença visual.
- Separar em componente próprio respeita o Princípio II (máximo 200 linhas por arquivo, sub-componentes extraídos).

**Alternatives considered**:
- Reutilizar `NeuralDecoration` com `lg:hidden` e escala reduzida: descartado — as arestas horizontais caupariam overflow ou sobreposição em 375 px.
- Nenhum elemento mobile: descartado pelo usuário (clarificação Q5 = Opção A).

---

## Decision 3 — Badge "Repo Privado" para projetos sem GitHub público

**Decision**: Renderizar um elemento `<span>` com ícone `Lock` (lucide-react) e texto "Repo Privado" no lugar do botão GitHub. Botão de demo (`ExternalLink`) permanece ativo quando `demoUrl` está presente. Flag `isPrivate: boolean` adicionada ao tipo de dados em `lib/data.ts`.

**Rationale**:
- Honestidade: projetos de empresa/consultoria normalmente têm código proprietário. Um badge informativo é profissionalmente mais aceitável do que um link morto.
- Mantém simetria visual no card — espaço do botão é ocupado, não vazio.
- `Lock` está disponível em lucide-react — sem nova dependência.
- Separar `githubUrl` e `demoUrl` (ambos `string | null`) permite combinar repositório público + link de demo independentemente.

**Alternatives considered**:
- Remover card inteiramente (Opção A do clarify): descartado pelo usuário.
- Link para perfil geral `/J-Albertoo` (comportamento anterior): descartado — viola FR-009 (link genérico não representa o projeto).

---

## Decision 4 — Correção de GitHub handle: `J-Alberto0` → `J-Albertoo`

**Decision**: Centralizar o handle correto em `personal.github` dentro de `lib/data.ts` e garantir que todos os componentes consumam esse único source of truth.

**Rationale**:
- Single source of truth — futuras mudanças requerem edição em um único lugar.
- Verificação por `rg J-Alberto0` confirma zero ocorrências remanescentes nos arquivos de componente e lib.

**Alternatives considered**:
- Hard-code em cada componente: descartado — viola Princípio II (data-agnostic components).

---

## Resolved NEEDS CLARIFICATION

| Item | Resolution |
|------|------------|
| GitHub Showcase: API vs estático | Estático curado (`lib/data.ts`) — Clarificação Q1 |
| Animação Hero | CSS sutil — Clarificação Q2 |
| LinkedIn URL | `/in/joaoalbuquerque312/` do CV — Clarificação Q3 |
| Projetos privados | Badge "Repo Privado" — Clarificação Q4 |
| Mobile decorativo | Dots simplificados `MobileNeuralDots` — Clarificação Q5 |
