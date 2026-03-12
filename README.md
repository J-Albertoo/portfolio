# João Alberto Albuquerque — Portfolio

Portfólio profissional de João Alberto Albuquerque, Data Scientist & AI Engineer.

Construído com **Next.js 14**, **Tailwind CSS** e **lucide-react**.

## Stack

| Tecnologia | Finalidade |
|---|---|
| Next.js 14 (App Router) | Framework React |
| Tailwind CSS v3 | Estilização |
| lucide-react | Ícones |
| framer-motion | Animações |
| TypeScript | Tipagem estática |

## Setup local

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Acessar em http://localhost:3000
```

## Build de produção

```bash
npm run build
npm start
```

## Deploy (Vercel)

1. Faça push para um repositório GitHub.
2. Acesse [vercel.com](https://vercel.com) e importe o repositório.
3. Clique em **Deploy** — sem configuração extra necessária.

## Deploy (Netlify)

1. Faça push para um repositório GitHub.
2. Acesse [netlify.com](https://netlify.com) e importe o repositório.
3. Build command: `npm run build`
4. Publish directory: `.next`

## Estrutura de arquivos

```
portfolio/
├── app/
│   ├── layout.tsx       # Metadata, fontes e layout raiz
│   ├── page.tsx         # Página principal (one-page)
│   └── globals.css      # Estilos globais + Tailwind directives
├── components/
│   ├── Navbar.tsx       # Barra de navegação fixa
│   ├── Hero.tsx         # Seção inicial com foto e headline
│   ├── Metrics.tsx      # Painel de métricas rápidas
│   ├── Experience.tsx   # Timeline de experiência + educação
│   ├── Skills.tsx       # Grid de habilidades técnicas (Bento)
│   ├── Projects.tsx     # Cards de projetos (Bento)
│   ├── GitHubShowcase.tsx  # Showcase de repositórios
│   ├── Contact.tsx      # Seção de contato
│   └── Footer.tsx       # Rodapé
├── lib/
│   └── data.ts          # Todo o conteúdo do site (CV data)
├── public/
│   └── profile.jpg      # Foto de perfil
└── .specify/
    └── memory/
        └── constitution.md  # Constituição do projeto
```

## Atualizar conteúdo

Todo o conteúdo (experiências, skills, projetos, etc.) está centralizado em **`lib/data.ts`**.
Para adicionar um novo projeto ou experiência, basta editar esse arquivo.
