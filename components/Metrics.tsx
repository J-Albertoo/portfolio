"use client";

import { TrendingUp, Briefcase, Wrench, Github } from "lucide-react";
import { metrics, personal } from "@/lib/data";

const icons = [TrendingUp, Briefcase, Wrench, Github];

export default function Metrics() {
  return (
    <section className="py-12 border-y border-surface-3">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric, i) => {
            const Icon = icons[i];
            const isGithub = metric.suffix === "→";
            return (
              <div
                key={metric.label}
                className={`group relative bg-surface border border-surface-3 rounded-xl p-5 text-center transition-all duration-300 hover:border-accent/40 hover:shadow-glow-emerald ${
                  isGithub ? "cursor-pointer" : ""
                }`}
                onClick={
                  isGithub
                    ? () => window.open(personal.github, "_blank")
                    : undefined
                }
                role={isGithub ? "link" : undefined}
                tabIndex={isGithub ? 0 : undefined}
                onKeyDown={
                  isGithub
                    ? (e) => {
                        if (e.key === "Enter") window.open(personal.github, "_blank");
                      }
                    : undefined
                }
              >
                <div className="flex justify-center mb-3">
                  <Icon
                    size={20}
                    className="text-accent group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-off-white">
                  {metric.value}
                  <span className="text-accent text-lg">{metric.suffix}</span>
                </p>
                <p className="text-xs text-muted mt-1">{metric.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
