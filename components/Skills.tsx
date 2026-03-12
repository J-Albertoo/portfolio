"use client";

import {
  Code2,
  BrainCircuit,
  BarChart3,
  Cloud,
} from "lucide-react";
import { skillCategories } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  BrainCircuit,
  BarChart3,
  Cloud,
};

const accentMap = [
  "hover:border-accent/40 hover:shadow-glow-emerald",
  "hover:border-accent/40 hover:shadow-glow-emerald",
  "hover:border-accent-2/40 hover:shadow-glow-cyan",
  "hover:border-accent-2/40 hover:shadow-glow-cyan",
];

const iconColorMap = ["text-accent", "text-accent", "text-accent-2", "text-accent-2"];

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-surface-3">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-xs text-accent tracking-widest uppercase font-mono mb-3">
            03 — Competências
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-off-white">
            Skills{" "}
            <span className="text-accent">Técnicas</span>
          </h2>
          <p className="mt-4 text-muted max-w-xl text-sm leading-relaxed">
            Ferramentas e tecnologias que uso no dia a dia para transformar dados
            em valor.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skillCategories.map((category, i) => {
            const Icon = iconMap[category.icon];
            return (
              <div
                key={category.name}
                className={`group bg-surface border border-surface-3 rounded-xl p-6 transition-all duration-300 ${accentMap[i]}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-surface-2 border border-surface-3 flex items-center justify-center group-hover:border-current/20 transition-colors duration-200">
                    <Icon size={18} className={iconColorMap[i]} />
                  </div>
                  <h3 className="font-semibold text-off-white text-sm">
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-surface-2 border border-surface-3 text-muted px-3 py-1.5 rounded-lg font-mono transition-all duration-200 group-hover:border-surface-3/80 hover:!text-off-white hover:!border-accent/30 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
