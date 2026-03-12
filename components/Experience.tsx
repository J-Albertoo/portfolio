"use client";

import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { experiences, education } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experiencia" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-xs text-accent tracking-widest uppercase font-mono mb-3">
            02 — Trajetória
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-off-white">
            Experiência &{" "}
            <span className="text-accent">Educação</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience timeline */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <Briefcase size={16} className="text-accent" />
              <span className="text-sm text-muted uppercase tracking-wider font-mono">
                Experiência Profissional
              </span>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-3 top-0 bottom-0 w-px bg-surface-3" />

              <div className="space-y-6">
                {experiences.map((exp, i) => (
                  <div key={i} className="relative pl-10">
                    {/* Dot */}
                    <div
                      className={`absolute left-0 top-5 w-6 h-6 rounded-full border-2 flex items-center justify-center z-10 ${
                        exp.current
                          ? "border-accent bg-accent/10"
                          : "border-surface-3 bg-surface"
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          exp.current ? "bg-accent animate-pulse" : "bg-muted-2"
                        }`}
                      />
                    </div>

                    <div className="group bg-surface border border-surface-3 rounded-xl p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-glow-emerald">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="font-semibold text-off-white text-sm md:text-base">
                            {exp.role}
                          </h3>
                          <p className="text-accent text-sm font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5 flex-shrink-0">
                          {exp.current && (
                            <span className="text-[10px] bg-accent/10 text-accent border border-accent/20 px-2 py-0.5 rounded-full font-medium">
                              Atual
                            </span>
                          )}
                          <span className="text-xs text-muted font-mono whitespace-nowrap">
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-muted leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] bg-surface-2 border border-surface-3 text-muted px-2 py-1 rounded-md font-mono group-hover:border-accent/20 transition-colors duration-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap size={16} className="text-accent-2" />
              <span className="text-sm text-muted uppercase tracking-wider font-mono">
                Educação
              </span>
            </div>

            <div className="space-y-4">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="group bg-surface border border-surface-3 rounded-xl p-5 transition-all duration-300 hover:border-accent-2/40 hover:shadow-glow-cyan"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${
                        edu.status === "Cursando"
                          ? "bg-accent-2/10 text-accent-2 border-accent-2/20"
                          : "bg-muted-2/10 text-muted border-muted-2/30"
                      }`}
                    >
                      {edu.status}
                    </span>
                    <span className="text-xs text-muted font-mono">
                      {edu.period}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-off-white mt-2">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-1 mt-2">
                    <MapPin size={11} className="text-muted" />
                    <p className="text-xs text-muted">{edu.institution}</p>
                  </div>
                </div>
              ))}

              {/* Startup card */}
              <div className="group bg-surface border border-accent/20 rounded-xl p-5 transition-all duration-300 hover:border-accent/50 hover:shadow-glow-emerald">
                <span className="text-[10px] bg-accent/10 text-accent border border-accent/20 px-2 py-0.5 rounded-full font-medium">
                  Startup
                </span>
                <h3 className="text-sm font-semibold text-off-white mt-2">
                  Co-Fundador — CorpNexus
                </h3>
                <p className="text-xs text-muted mt-1 leading-relaxed">
                  Plataforma de analytics e inteligência de negócios orientada a dados.
                </p>
                <a
                  href="https://corpnexus.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-xs text-accent hover:underline font-mono"
                >
                  corpnexus.com.br →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
