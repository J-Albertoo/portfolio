"use client";

import { Github, GitFork, ExternalLink, Terminal } from "lucide-react";
import { personal } from "@/lib/data";

const showcaseItems = [
  {
    title: "datacamp-competition",
    description: "Notebook de competição DataCamp com análise exploratória, feature engineering e modelos de ML aplicados a dataset real.",
    lang: "Python",
    color: "emerald",
    url: "https://github.com/J-Albertoo/datacamp-competition",
  },
  {
    title: "lingustic-comfort-zone",
    description: "Projeto de NLP investigando padrões linguísticos. Aplica técnicas de processamento de linguagem natural e análise semântica com foco em LLMs.",
    lang: "Python",
    color: "cyan",
    url: "https://github.com/J-Albertoo/lingustic-comfort-zone",
  },
  {
    title: "J-Albertoo.github.io",
    description: "Portfólio pessoal hospedado no GitHub Pages, apresentando projetos, experiências e habilidades na área de Dados e IA.",
    lang: "TypeScript",
    color: "emerald",
    url: "https://github.com/J-Albertoo/J-Albertoo.github.io",
  },
];

const langColors: Record<string, string> = {
  Python: "bg-yellow-400/20 text-yellow-400",
  TypeScript: "bg-blue-400/20 text-blue-400",
};

export default function GitHubShowcase() {
  return (
    <section id="github" className="py-24 border-t border-surface-3">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-xs text-accent tracking-widest uppercase font-mono mb-3">
            05 — Open Source
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-off-white">
            GitHub{" "}
            <span className="text-accent">Showcase</span>
          </h2>
          <p className="mt-4 text-muted max-w-xl text-sm leading-relaxed">
            Tópicos e projetos do meu perfil no GitHub. Código aberto,
            experimentos e contribuições.
          </p>
        </div>

        {/* Profile banner */}
        <div className="group bg-surface border border-surface-3 rounded-xl p-6 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-accent/40 hover:shadow-glow-emerald transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-surface-2 border border-surface-3 flex items-center justify-center">
              <Github size={22} className="text-accent" />
            </div>
            <div>
              <p className="text-off-white font-semibold">J-Albertoo</p>
              <p className="text-xs text-muted font-mono">github.com/J-Albertoo</p>
            </div>
          </div>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs border border-accent/30 text-accent hover:bg-accent/10 px-4 py-2 rounded-full transition-all duration-200"
          >
            Ver Perfil <ExternalLink size={12} />
          </a>
        </div>

        {/* Code topics grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {showcaseItems.map((item) => (
            <div
              key={item.title}
              className={`group bg-surface border border-surface-3 rounded-xl p-5 transition-all duration-300 ${
                item.color === "emerald"
                  ? "hover:border-accent/40 hover:shadow-glow-emerald"
                  : "hover:border-accent-2/40 hover:shadow-glow-cyan"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <Terminal
                  size={16}
                  className={
                    item.color === "emerald" ? "text-accent" : "text-accent-2"
                  }
                />
                <div className="flex items-center gap-3 text-xs text-muted">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-accent transition-colors duration-200"
                    aria-label={`Ver ${item.title} no GitHub`}
                  >
                    <ExternalLink size={11} /> ver
                  </a>
                  <span className="flex items-center gap-1">
                    <GitFork size={11} /> —
                  </span>
                </div>
              </div>
              <h3 className="font-mono font-semibold text-off-white text-sm mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                {item.description}
              </p>
              <div className="mt-4">
                <span
                  className={`text-[10px] px-2 py-1 rounded-full font-mono ${langColors[item.lang]}`}
                >
                  {item.lang}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
