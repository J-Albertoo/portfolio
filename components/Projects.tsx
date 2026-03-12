"use client";

import { Github, ExternalLink, Code, Layers, Lock } from "lucide-react";
import { githubRepos } from "@/lib/data";

const languageColors: Record<string, string> = {
  Python: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  TypeScript: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  JavaScript: "text-amber-400 bg-amber-400/10 border-amber-400/20",
};

export default function Projects() {
  return (
    <section id="projetos" className="py-24 border-t border-surface-3">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-xs text-accent tracking-widest uppercase font-mono mb-3">
            04 — Portfólio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-off-white">
            Projetos em{" "}
            <span className="text-accent">Destaque</span>
          </h2>
          <p className="mt-4 text-muted max-w-xl text-sm leading-relaxed">
            Seleção de projetos que demonstram aplicação prática de ML, IA e
            engenharia de dados.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {githubRepos.map((repo, i) => (
            <div
              key={repo.name}
              className={`group relative bg-surface border border-surface-3 rounded-xl p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-glow-emerald flex flex-col justify-between ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              {/* Top row */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-2 border border-surface-3 flex items-center justify-center flex-shrink-0 group-hover:border-accent/30 transition-colors duration-200">
                    {i % 2 === 0 ? (
                      <Code size={18} className="text-accent" />
                    ) : (
                      <Layers size={18} className="text-accent-2" />
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2 items-center">
                    {repo.isPrivate ? (
                      <span className="flex items-center gap-1.5 text-[10px] border border-muted-2/40 text-muted px-2.5 py-1.5 rounded-lg font-mono">
                        <Lock size={10} />
                        Repo Privado
                      </span>
                    ) : (
                      repo.githubUrl && (
                        <a
                          href={repo.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Ver ${repo.name} no GitHub`}
                          className="w-8 h-8 rounded-lg bg-surface-2 border border-surface-3 flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-all duration-200"
                        >
                          <Github size={15} />
                        </a>
                      )
                    )}
                    {repo.demoUrl && (
                      <a
                        href={repo.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Abrir ${repo.name}`}
                        className="w-8 h-8 rounded-lg bg-surface-2 border border-surface-3 flex items-center justify-center text-muted hover:text-accent-2 hover:border-accent-2/40 transition-all duration-200"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="font-semibold text-off-white mb-2 text-base md:text-lg">
                  {repo.name}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {repo.description}
                </p>
              </div>

              {/* Bottom row */}
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-surface-3">
                <div className="flex flex-wrap gap-2">
                  {repo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] bg-surface-2 border border-surface-3 text-muted px-2 py-1 rounded-md font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span
                  className={`text-[10px] border px-2 py-1 rounded-full font-mono flex-shrink-0 ${
                    languageColors[repo.language] ??
                    "text-muted bg-muted/10 border-muted/20"
                  }`}
                >
                  {repo.language}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/J-Albertoo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-surface-3 text-muted hover:text-accent hover:border-accent/40 text-sm px-6 py-3 rounded-full transition-all duration-200"
          >
            <Github size={16} />
            Ver todos os repositórios
          </a>
        </div>
      </div>
    </section>
  );
}
