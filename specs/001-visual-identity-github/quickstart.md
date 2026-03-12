# Quickstart: Identidade Visual Data & AI + GitHub Correto

**Branch**: `001-visual-identity-github`

## Pré-requisitos

- Node.js ≥ 18
- npm ≥ 9

## Setup local

```bash
# 1. Clonar o repositório
git clone <repo-url>
cd portfolio

# 2. Instalar dependências
npm install

# 3. Rodar em modo desenvolvimento
npm run dev
# → http://localhost:3000
```

## Verificar as mudanças desta feature

Após `npm run dev`, verificar:

1. **GitHub links** — Clicar no ícone GitHub na navbar, footer e GitHub Showcase.
   - Todos devem abrir `https://github.com/J-Albertoo` em nova aba.

2. **Animação Hero** — Observar o canto superior direito (desktop) e superior direito (mobile).
   - Desktop: grafo de rede neural com nós pulsando e arestas com fade.
   - Mobile (< 1024 px): 4 pontos flutuantes sem arestas.

3. **Badge "Repo Privado"** — Na seção Projetos, os cards "F4 Analytics Agent" e "CorpNexus Platform" devem mostrar o badge ao invés do botão GitHub.

4. **Demo links** — "CorpNexus Platform" deve ter o botão de link externo apontando para `https://corpnexus.com.br/`.

5. **Repositórios reais no Showcase** — Seção GitHub Showcase deve exibir `datacamp-competition`, `lingustic-comfort-zone` e `J-Albertoo.github.io`.

## Build de produção

```bash
npm run build
# Deve completar com zero erros TypeScript e zero warnings ESLint
```

## Deploy na Vercel

```bash
# Instalar Vercel CLI (opcional)
npm i -g vercel

# Deploy
vercel --prod
```

Ou via interface web:
1. Push para GitHub
2. Importar repositório em [vercel.com](https://vercel.com)
3. Clicar **Deploy** — sem variáveis de ambiente necessárias

## Atualizar conteúdo

Todo conteúdo está em `lib/data.ts`:

| O que mudar | Campo em `data.ts` |
|-------------|-------------------|
| Novo emprego | `experiences[]` |
| Nova skill | `skillCategories[].skills[]` |
| Novo projeto | `githubRepos[]` — setar `isPrivate`, `githubUrl`, `demoUrl` |
| Novo repo no Showcase | `showcaseItems` em `GitHubShowcase.tsx` |
| Métricas | `metrics[]` |
