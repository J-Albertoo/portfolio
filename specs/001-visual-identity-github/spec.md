# Feature Specification: Identidade Visual Data & AI + GitHub Correto

**Feature Branch**: `001-visual-identity-github`
**Created**: 2026-03-12
**Status**: Draft
**Input**: User description: "O visual deve ter uma identidade visual que faça sentido com a carreira de Dados e AI no geral, o portfolio deve também ter meu github linkado, link: https://github.com/J-Albertoo"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Corrigir Link do GitHub (Priority: P1)

Um recrutador ou parceiro visita o portfólio e clica em qualquer link do GitHub — seja na navbar, na seção de projetos, no GitHub Showcase ou no rodapé. Ao clicar, ele é levado ao perfil real de João Alberto em `https://github.com/J-Albertoo` (handle com dois "o" no final, não um zero), onde vê os repositórios públicos reais: `datacamp-competition`, `J-Albertoo.github.io` e `lingustic-comfort-zone`.

**Why this priority**: O link correto é a base de qualquer portfolio — um link quebrado ou apontando para o perfil errado invalida toda a seção de projetos e destrói a credibilidade imediata do portfolio.

**Independent Test**: Pode ser testado isoladamente clicando em qualquer ícone ou texto que diga "GitHub" na página — todos devem abrir `https://github.com/J-Albertoo` em nova aba.

**Acceptance Scenarios**:

1. **Given** que estou na seção Hero do portfólio, **When** clico no ícone do GitHub na navbar, **Then** sou redirecionado para `https://github.com/J-Albertoo` em nova aba.
2. **Given** que estou na seção GitHub Showcase, **When** clico em "Ver Perfil", **Then** o link abre `https://github.com/J-Albertoo`.
3. **Given** que estou na seção de Projetos, **When** clico no ícone do GitHub de qualquer card, **Then** o link aponta para `https://github.com/J-Albertoo`.
4. **Given** que estou no rodapé, **When** clico no texto `github.com/J-Albertoo`, **Then** o link aponta para `https://github.com/J-Albertoo`.
5. **Given** qualquer link de GitHub no portfolio, **When** inspecionado, **Then** nenhum link contém `J-Alberto0` (com zero) — todos usam `J-Albertoo` (com dois "o").

---

### User Story 2 - Identidade Visual Coerente com Dados & AI (Priority: P2)

Um visitante acessa o portfólio e, sem ler o nome ou título, consegue perceber imediatamente que se trata de um profissional de Dados e Inteligência Artificial. A estética geral — ícones, elementos decorativos, terminologia dos cards, e a ambientação visual — comunica o universo de dados, redes neurais, código e machine learning.

**Why this priority**: Identidade visual coerente com a área de atuação aumenta a memorabilidade e a percepção de especialização do profissional. É o segundo critério mais crítico após links corretos, pois afeta diretamente a primeira impressão.

**Independent Test**: Pode ser testado mostrando o portfólio para uma pessoa sem contexto e perguntando "qual é a área de atuação desse profissional?" — a resposta deve incluir "dados", "IA" ou "machine learning" sem precisar ler o texto.

**Acceptance Scenarios**:

1. **Given** que o visitante vê a Hero section, **When** observa os elementos decorativos, **Then** identifica pelo menos um elemento visual que remete a dados, código ou IA (ex: partículas de rede neural, padrão de grid, linhas de código, gráficos abstratos).
2. **Given** que o visitante acessa o portfólio em qualquer dispositivo, **When** vê a paleta de cores e elementos de acento, **Then** a combinação de fundo escuro com acentos em verde esmeralda/ciano remete ao terminal de programação e dashboards analíticos — padrão reconhecido na comunidade de dados.
3. **Given** que o visitante vê os cards de Skills, **When** lê os ícones e categorias, **Then** os ícones correspondem semanticamente às ferramentas de dados representadas (ex: ícone de gráfico para Visualização, cérebro para ML, nuvem para Cloud).
4. **Given** que o visitante observa o GitHub Showcase, **When** vê a seção, **Then** os repositórios exibidos refletem projetos reais do perfil `J-Albertoo`: `datacamp-competition`, `lingustic-comfort-zone`, e o portfólio `J-Albertoo.github.io`.

---

### User Story 3 - Consistência do Perfil GitHub Exibido (Priority: P3)

O GitHub Showcase exibe informações condizentes com o perfil real de João Alberto (`J-Albertoo`). O username, bio e repositórios mostrados no portfólio correspondem ao que existe de fato no GitHub, evitando discrepâncias que causam desconfiança em recrutadores técnicos.

**Why this priority**: Recrutadores técnicos verificam ativamente perfis GitHub. Inconsistências entre o portfólio e o GitHub real são detectadas e interpretadas negativamente.

**Independent Test**: Pode ser testado comparando visualmente o GitHub Showcase do portfólio com o perfil real em `https://github.com/J-Albertoo`.

**Acceptance Scenarios**:

1. **Given** que estou na seção GitHub Showcase, **When** vejo o username exibido, **Then** o username é `J-Albertoo` (com dois "o"), não `J-Alberto0` (com zero).
2. **Given** que estou na seção GitHub Showcase, **When** vejo os cards de repositórios, **Then** pelo menos os repositórios `datacamp-competition` e `lingustic-comfort-zone` estão listados ou referenciados.
3. **Given** que estou na seção GitHub Showcase, **When** vejo a bio exibida, **Then** ela menciona foco em LLMs, NLP e ML, consistente com a bio real do GitHub.

---

### Edge Cases

- O que acontece se o visitante inspeciona o HTML e encontra `J-Alberto0` (com zero) em algum atributo `href` oculto ou comentário?  → Todos os atributos `href`, `data-*`, e textos visíveis devem usar `J-Albertoo`.
- O que acontece se um projeto no Showcase tem URL que não existe no GitHub real?  → Os cards de projetos devem apontar para o perfil geral `https://github.com/J-Albertoo` quando não houver URL de repositório específico e verificável.
- O que acontece se a identidade visual de "dados e AI" entra em conflito com a acessibilidade (contraste, legibilidade)?  → Elementos decorativos de identidade visual NUNCA devem comprometer o contraste mínimo WCAG AA de textos e ações interativas.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Todos os links do GitHub no portfólio DEVEM apontar para `https://github.com/J-Albertoo` (handle com dois "o").
- **FR-002**: Nenhum link, texto ou referência no portfólio DEVE conter o handle incorreto `J-Alberto0` (com zero).
- **FR-003**: A seção GitHub Showcase DEVE exibir o username correto `J-Albertoo` de forma visível.
- **FR-004**: Os cards de repositórios no GitHub Showcase DEVEM referenciar projetos reais do perfil `J-Albertoo`: `datacamp-competition` e `lingustic-comfort-zone`. O conteúdo é estático e curado em `lib/data.ts` — nenhuma integração com a GitHub API é necessária.
- **FR-005**: A bio exibida no GitHub Showcase DEVE ser consistente com a bio real: foco em LLMs, NLP e ML, estudante de Ciência da Computação na UFG.
- **FR-006**: A Hero section DEVE conter pelo menos um elemento decorativo visual que remeta ao universo de dados ou IA (rede neural, partículas de dados, grid analítico, linhas de código, ou padrão semelhante). O elemento DEVE usar animação CSS sutil (nós pulsando, conexões com fade) — sem canvas ou bibliotecas JS adicionais.
- **FR-007**: Os ícones associados a cada categoria de skills DEVEM ter correspondência semântica com a categoria que representam.
- **FR-009**: Cards de projetos sem repositório GitHub público DEVEM exibir um badge "Repo Privado" no lugar do ícone/link do GitHub — o botão de link externo (site/demo) permanece ativo quando disponível. Nenhum card deve ter um link GitHub que aponte para o perfil geral como substituto de um repo específico.
- **FR-010**: Em viewports mobile (< 1024 px), a Hero section DEVE exibir uma versão simplificada do elemento decorativo temático — nós isolados sem arestas, ou um padrão de grid sutil — que não sobreponha o conteúdo textual ou a foto de perfil.
- **FR-008**: A paleta de cores (fundo escuro + acentos verde esmeralda/ciano) DEVE ser mantida, pois é reconhecida na comunidade de dados/tech como identidade de terminal/dashboard analítico.

### Key Entities

- **GitHub Handle**: Identificador único do perfil — valor correto é `J-Albertoo` (dois "o"). Aparece em URLs, textos exibidos e atributos de links.
- **Repositório Real**: Projeto público verificável no GitHub. Os três existentes são: `datacamp-competition`, `J-Albertoo.github.io`, `lingustic-comfort-zone`.
- **Elemento de Identidade Visual**: Componente gráfico decorativo que comunica a área de atuação sem uso de texto — partículas, grids, ícones temáticos, padrões animados.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% dos links que contêm "github" no portfólio apontam para `https://github.com/J-Albertoo` — verificável por inspeção de todos os atributos `href`.
- **SC-002**: Zero ocorrências do handle incorreto `J-Alberto0` (com zero) em qualquer parte do código-fonte renderizado.
- **SC-003**: Um visitante sem contexto prévio consegue identificar a área de atuação como "dados e/ou IA" ao visualizar apenas os elementos visuais não-textuais da Hero section — verificável por teste de usabilidade informal com 3 pessoas.
- **SC-004**: Os 2 repositórios reais (`datacamp-competition`, `lingustic-comfort-zone`) são visíveis ou referenciáveis diretamente na seção GitHub Showcase.
- **SC-005**: Todos os ícones de categorias de skills recebem aprovação de coerência semântica por pelo menos 2 revisores (o ícone "faz sentido" para a categoria).

## Clarifications

### Session 2026-03-12

- Q: O GitHub Showcase deve exibir dados do perfil em tempo real (via API) ou permanecer com conteúdo estático curado manualmente? → A: Estático curado — conteúdo mantido em `lib/data.ts`, atualizado manualmente, zero dependência de API externa, deploy simples.
- Q: O elemento de identidade visual da Hero deve ter animação, ou ser estático? → A: Animação sutil via CSS — nós pulsando e conexões com fade suave, sem JavaScript adicional.
- Q: Qual URL do LinkedIn deve ser usada no portfólio? → A: URL do CV — `https://www.linkedin.com/in/joaoalbuquerque312/`.
- Q: O que deve acontecer nos cards de projetos que não têm repositório GitHub público? → A: Manter o card completo com badge "Repo Privado" no lugar do link GitHub.
- Q: Em mobile, a Hero section deve ter algum elemento visual temático de Dados & AI, ou a paleta + ícones são suficientes? → A: Elemento simplificado em mobile — versão reduzida do decorativo (poucos nós sem arestas, ou grid sutil) que não interfere no layout.

## Assumptions

- O perfil GitHub `https://github.com/J-Albertoo` é público e acessível — assumido com base na pesquisa do perfil realizada durante a especificação.
- Os únicos repositórios públicos disponíveis no momento são os 3 identificados (`datacamp-competition`, `J-Albertoo.github.io`, `lingustic-comfort-zone`); a seleção de destaques será feita com base nesses.
- A paleta de cores atual (fundo `#050505`, acentos esmeralda/ciano) já está alinhada com a identidade de dados/AI — a melhoria de identidade visual se concentra em elementos decorativos adicionais, não em mudança de paleta.
- A URL do LinkedIn usada é `https://www.linkedin.com/in/joaoalbuquerque312/` (URL personalizada do CV) — confirmada pelo dono como a referência correta.
