export const personal = {
  name: "João Alberto",
  lastName: "Albuquerque",
  fullName: "João Alberto Bezerra de Albuquerque",
  title: "Data Scientist & AI Engineer",
  subtitle: "Transformando dados complexos em decisões estratégicas",
  bio: "Estudante de Ciência da Computação na UFG, entusiasta de IA com foco em LLMs, NLP e ML. Experiência prática em machine learning, análise estatística e visualização de informações para transformar dados em insights claros e decisões estratégicas.",
  email: "joao.aba2@hotmail.com",
  phone: "(62) 98269-9717",
  github: "https://github.com/J-Albertoo",
  linkedin: "https://www.linkedin.com/in/joaoalbuquerque312/",
  startup: "https://corpnexus.com.br/",
  location: "Goiânia, GO — Brasil",
};

export const metrics = [
  { label: "Anos de Experiência", value: "~2", suffix: "+" },
  { label: "Empresas & Labs", value: "4", suffix: "" },
  { label: "Linguagens & Ferramentas", value: "20", suffix: "+" },
  { label: "Repositórios GitHub", value: "Veja", suffix: "→" },
];

export const experiences = [
  {
    company: "Cognitivo.AI",
    role: "Data Scientist Intern",
    period: "Dez 2025 – Atual",
    current: true,
    description:
      "Atuação em projetos com IA como motor principal, utilizando LangChain, n8n e CrewAI, aliada à análise exploratória de dados (EDA) e à aplicação de algoritmos clássicos orientados por métricas consolidadas.",
    tags: ["LangChain", "CrewAI", "n8n", "EDA", "Machine Learning"],
  },
  {
    company: "3CON Consultoria",
    role: "Data Analytics Intern",
    period: "Set 2025 – Dez 2025",
    current: false,
    description:
      "Desenvolvimento de agente inteligente para Q&A e criação de dashboards no nicho de Fórmula 4. Utilizou LangChain para orquestração do agente, Docker, PostgreSQL, Node.js para APIs e Apache Superset para dashboards analíticos.",
    tags: ["LangChain", "Docker", "PostgreSQL", "Apache Superset", "Node.js"],
  },
  {
    company: "Grupo BC Energia",
    role: "Inteligência de Mercado",
    period: "Fev 2025 – Set 2025",
    current: false,
    description:
      "Análise de dados e insights sobre distribuição de energia. Algoritmos de otimização (programação linear, heurísticas evolutivas) para rateio energético. Modelos de previsão com ML supervisionado e séries temporais. Pipelines ETL automatizados e dashboards para stakeholders.",
    tags: ["Python", "Pandas", "Power BI", "ETL", "Séries Temporais", "Otimização"],
  },
  {
    company: "Centro de Excelência em IA – UFG",
    role: "Pesquisador",
    period: "Set 2024 – Mar 2025",
    current: false,
    description:
      "EDA de datasets e revisão bibliográfica sobre modelos de IA aplicados à cibersegurança. Implementação, teste e validação de modelos, análise de métricas de performance e desenvolvimento de MVP de cibersegurança baseado em IA.",
    tags: ["Python", "Cibersegurança", "Deep Learning", "MVP", "Pesquisa"],
  },
];

export const education = [
  {
    institution: "Universidade Federal de Goiás",
    degree: "Bacharelado em Ciência da Computação",
    period: "2023 – Dez 2026",
    status: "Cursando",
  },
  {
    institution: "Universidade Federal de Goiás",
    degree: "Bacharelado em Engenharia Física",
    period: "2020 – 2023",
    status: "Incompleto",
  },
];

export const skillCategories = [
  {
    name: "Linguagens",
    icon: "Code2",
    skills: ["Python", "SQL", "TypeScript", "R", "Bash"],
  },
  {
    name: "Machine Learning & IA",
    icon: "BrainCircuit",
    skills: [
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "LangChain",
      "CrewAI",
      "n8n",
      "Séries Temporais",
      "Otimização",
    ],
  },
  {
    name: "Dados & Visualização",
    icon: "BarChart3",
    skills: [
      "Pandas",
      "NumPy",
      "Power BI",
      "Apache Superset",
      "Matplotlib",
      "Seaborn",
      "Plotly",
    ],
  },
  {
    name: "Engenharia & Cloud",
    icon: "Cloud",
    skills: [
      "Docker",
      "PostgreSQL",
      "ETL Pipelines",
      "Node.js",
      "Git",
      "Vercel",
      "APIs REST",
    ],
  },
];

export const githubRepos = [
  {
    name: "DataCamp Competition",
    description:
      "Notebook de competição DataCamp explorando análise de dados, feature engineering e modelos de machine learning aplicados a um dataset real de competição.",
    language: "Python",
    tags: ["Pandas", "Scikit-learn", "EDA"],
    githubUrl: "https://github.com/J-Albertoo/datacamp-competition",
    demoUrl: null,
    isPrivate: false,
  },
  {
    name: "Linguistic Comfort Zone",
    description:
      "Projeto de NLP investigando padrões linguísticos e zonas de conforto em texto. Aplica técnicas de processamento de linguagem natural e análise semântica.",
    language: "Python",
    tags: ["NLP", "LLMs", "Text Analysis"],
    githubUrl: "https://github.com/J-Albertoo/lingustic-comfort-zone",
    demoUrl: null,
    isPrivate: false,
  },
  {
    name: "F4 Analytics Agent",
    description:
      "Agente inteligente para Q&A e dashboards analíticos no nicho de Fórmula 4. Orquestrado com LangChain e Apache Superset.",
    language: "Python",
    tags: ["LangChain", "PostgreSQL", "Superset"],
    githubUrl: null,
    demoUrl: null,
    isPrivate: true,
  },
  {
    name: "CorpNexus Platform",
    description:
      "Plataforma da minha startup CorpNexus, construída com foco em analytics e tomada de decisão orientada a dados.",
    language: "TypeScript",
    tags: ["Next.js", "Data Analytics", "SaaS"],
    githubUrl: null,
    demoUrl: "https://corpnexus.com.br/",
    isPrivate: true,
  },
];
