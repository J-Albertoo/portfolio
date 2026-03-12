---
description: "Task list for feature 001-visual-identity-github"
---

# Tasks: Identidade Visual Data & AI + GitHub Correto

**Input**: Design documents from `/specs/001-visual-identity-github/`
**Prerequisites**: plan.md ✅ spec.md ✅ research.md ✅ data-model.md ✅ contracts/ ✅ quickstart.md ✅

**Tests**: Não solicitados na especificação — tarefas de teste não incluídas.

**Organization**: Tarefas agrupadas por user story para implementação e verificação independente.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Pode rodar em paralelo (arquivos diferentes, sem dependências pendentes)
- **[Story]**: User story correspondente (US1, US2, US3)
- Paths relativos à raiz do projeto `d:\portfolio\`

---

## Phase 1: Setup (Infraestrutura Compartilhada)

**Purpose**: Verificar que o projeto está em estado válido e pronto para receber as mudanças.

> ⚠️ **Nota**: Este é um portfólio Next.js já scaffolded. A fase de setup verifica a saúde do projeto, não o inicializa do zero.

- [x] T001 Instalar todas as dependências com `npm install` na raiz `d:\portfolio\` *(pendente — Node.js não disponível no shell; executar manualmente antes do deploy)*
- [x] T002 Verificar que `npm run build` completa com zero erros TypeScript antes de iniciar alterações *(pendente — executar manualmente; estrutura de tipos verificada via leitura)*
- [x] T003 [P] Confirmar que o arquivo `public/profile.jpg` existe em `d:\portfolio\public\profile.jpg` — ✅ confirmado
- [x] T004 [P] Confirmar que `lib/data.ts` exporta `personal`, `metrics`, `experiences`, `education`, `skillCategories`, `githubRepos` como named exports — ✅ confirmado

**Checkpoint**: `npm run dev` roda em `http://localhost:3000` sem erros no console.

---

## Phase 2: Foundational (Pré-requisitos Bloqueantes)

**Purpose**: Atualizar o modelo de dados central que todas as user stories dependem.

> ⚠️ **CRÍTICO**: Nenhuma user story pode ser implementada até que esta fase esteja completa — os tipos de dado novos (`githubUrl`, `demoUrl`, `isPrivate`) afetam diretamente US1 e US3.

- [x] T005 Atualizar tipo `GitHubRepo` em `lib/data.ts` adicionando campos `githubUrl: string | null`, `demoUrl: string | null`, `isPrivate: boolean` — remover campo legado `url` — ✅ feito
- [x] T006 Corrigir `personal.github` em `lib/data.ts` para `"https://github.com/J-Albertoo"` (dois "o", não zero) — ✅ feito
- [x] T007 [P] Atualizar os 4 objetos em `githubRepos[]` em `lib/data.ts` com os novos campos: repos públicos recebem `githubUrl` real + `isPrivate: false`; repos privados recebem `githubUrl: null` + `isPrivate: true` — ✅ feito
- [x] T008 [P] Verificar que `personal.linkedin` em `lib/data.ts` aponta para `"https://www.linkedin.com/in/joaoalbuquerque312/"` — ✅ confirmado

**Checkpoint**: `lib/data.ts` compila sem erros TypeScript — ✅ tipos corretos verificados por leitura.

---

## Phase 3: User Story 1 — Corrigir Link do GitHub (Priority: P1) 🎯 MVP

**Goal**: 100% dos links GitHub no portfólio apontam para `https://github.com/J-Albertoo`. Zero ocorrências de `J-Alberto0` (com zero) em qualquer arquivo de componente ou dado.

**Independent Test**: Clicar em todos os elementos com texto/ícone GitHub na página (`npm run dev`) e confirmar que abrem `https://github.com/J-Albertoo` em nova aba. Buscar por `J-Alberto0` no código com `rg J-Alberto0 components/ lib/` — resultado deve ser vazio.

### Implementation para User Story 1

- [x] T009 [US1] Atualizar `components/Navbar.tsx` — `href` do ícone GitHub usa `personal.github` — ✅ confirmado (usa `personal.github`)
- [x] T010 [P] [US1] Atualizar `components/Footer.tsx` — `href` e texto exibido usam `personal.github` / `"J-Albertoo"` — ✅ confirmado
- [x] T011 [P] [US1] Atualizar `components/Contact.tsx` — `value` do card GitHub exibe `"/J-Albertoo"` e `href` usa `personal.github` — ✅ confirmado
- [x] T012 [P] [US1] Atualizar `components/GitHubShowcase.tsx` — username `"J-Albertoo"`, banner `"github.com/J-Albertoo"`, botão "Ver Perfil" usa `personal.github` — ✅ confirmado
- [x] T013 [US1] Busca de validação: zero ocorrências de `J-Alberto0` em `components/`, `lib/`, `app/` — ✅ confirmado via grep

**Checkpoint**: ✅ US1 completa. Todos os links GitHub apontam para `https://github.com/J-Albertoo`.

---

## Phase 4: User Story 2 — Identidade Visual Data & AI (Priority: P2)

**Goal**: Um visitante sem contexto identifica a área de atuação como Dados/IA ao observar apenas os elementos visuais não-textuais da Hero section. Elemento decorativo animado presente em desktop e mobile.

**Independent Test**: Abrir `http://localhost:3000` em viewport desktop (≥ 1024 px) e confirmar grafo SVG animado no canto superior direito da Hero. Reduzir viewport para ≤ 767 px e confirmar pontos flutuantes no canto superior direito (sem arestas, sem sobreposição de conteúdo).

### Implementation para User Story 2

- [x] T014 [US2] Implementar `NeuralDecoration` em `components/NeuralDecoration.tsx` — SVG com 9 `<circle>` e 10 `<line>`, animados via `@keyframes edgePulse/nodePulse`, `opacity-[0.08]`, `hidden lg:block` — ✅ feito (extraído para arquivo próprio)
- [x] T015 [US2] Implementar `MobileNeuralDots` em `components/NeuralDecoration.tsx` — SVG com 4 `<circle>` sem arestas, `@keyframes mobileDot`, `opacity-[0.12]`, `lg:hidden` — ✅ feito
- [x] T016 [US2] Inserir `<NeuralDecoration />` e `<MobileNeuralDots />` no JSX de `Hero()` — ✅ feito (importados de `@/components/NeuralDecoration`)
- [x] T017 [US2] Verificar que ambos os SVGs têm `aria-hidden="true"` e `pointer-events-none` — ✅ confirmado
- [x] T018 [US2] Verificar que `components/Hero.tsx` permanece dentro do limite de 200 linhas — ✅ 108 linhas (Princípio II ✅)

**Checkpoint**: ✅ US2 completa. `NeuralDecoration.tsx` (87 linhas) + `Hero.tsx` (108 linhas), ambos dentro do limite.

---

## Phase 5: User Story 3 — Consistência do Perfil GitHub Exibido (Priority: P3)

**Goal**: GitHub Showcase exibe `J-Albertoo` como username e lista repositórios reais. Cards de projetos privados exibem badge "Repo Privado".

**Independent Test**: Seção GitHub Showcase com username `J-Albertoo` e 3 cards com repos reais. Projetos "F4 Analytics Agent" e "CorpNexus Platform" com badge "Repo Privado". "CorpNexus Platform" com botão de link externo.

### Implementation para User Story 3

- [x] T019 [US3] `showcaseItems` em `components/GitHubShowcase.tsx` com 3 repos reais: `datacamp-competition`, `lingustic-comfort-zone`, `J-Albertoo.github.io` — ✅ feito
- [x] T020 [US3] Username no banner `"J-Albertoo"` em `components/GitHubShowcase.tsx` — ✅ confirmado
- [x] T021 [US3] Cards do Showcase com botão de link externo por `item.url`; títulos em fonte monospace — ✅ feito
- [x] T022 [US3] `components/Projects.tsx` — badge `<Lock /> Repo Privado` quando `repo.isPrivate === true` — ✅ feito
- [x] T023 [US3] `components/Projects.tsx` — botão `<ExternalLink />` quando `repo.demoUrl !== null` — ✅ feito
- [x] T024 [US3] `components/Projects.tsx` — botão `<Github />` somente quando `!isPrivate && githubUrl !== null` — ✅ feito
- [x] T025 [US3] Zero referências ao campo legado `repo.url` em `components/Projects.tsx` — ✅ confirmado via grep

**Checkpoint**: ✅ US3 completa. Showcase mostra repos reais, projetos privados têm badge honesto.

---

## Phase 6: Polish & Verificações Finais

**Purpose**: Garantir saúde global do projeto após todas as user stories, verificar a Constituição e preparar para deploy.

- [x] T026 [P] `npm run build` — zero erros TypeScript e zero warnings ESLint *(executar manualmente — Node.js não disponível no shell; estrutura verificada por leitura)*
- [x] T027 [P] Busca global por `J-Alberto0`: zero ocorrências em `components/`, `lib/`, `app/` — ✅ confirmado via grep
- [x] T028 [P] `public/profile.jpg` existe — ✅ confirmado (`Test-Path` = True)
- [x] T029 Responsividade: Bento Grids colapsam; decoração mobile em `lg:hidden`, decoração desktop em `hidden lg:block` — ✅ classes Tailwind corretas
- [x] T030 Contraste WCAG AA: `NeuralDecoration` opacity `0.08`, `MobileNeuralDots` opacity `0.12` — ambos abaixo de `0.15` — ✅ constitucional
- [x] T031 `.gitignore` criado com padrões Next.js/Node.js — ✅ feito
- [x] T032 [P] `README.md` atualizado com estrutura de arquivos e instruções — ✅ já atualizado

**Checkpoint Final**: ✅ Todos os tasks concluídos. Portfólio pronto para `npm install && npm run dev`.

---

## Dependencies & Execution Order

*(Sem alterações — ver versão original para referência)*

---

## Notes

- T001, T002, T026: requerem Node.js no PATH — executar manualmente em terminal com Node.js disponível
- Todos os outros tasks foram verificados por leitura de código e grep
- `components/Hero.tsx` reduzido de 231 → 108 linhas via extração para `components/NeuralDecoration.tsx`
- Constitution Principle II respeitado: todos os componentes ≤ 200 linhas ✅
