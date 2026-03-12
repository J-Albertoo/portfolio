"use client";

import { Mail, Linkedin, Github, ExternalLink, MessageSquare } from "lucide-react";
import { personal } from "@/lib/data";

const contactLinks = [
  {
    icon: Mail,
    label: "E-mail",
    value: personal.email,
    href: `mailto:${personal.email}`,
    accent: "emerald",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/joaoalbuquerque312",
    href: personal.linkedin,
    accent: "cyan",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "/J-Albertoo",
    href: personal.github,
    accent: "emerald",
  },
  {
    icon: ExternalLink,
    label: "Startup",
    value: "corpnexus.com.br",
    href: personal.startup,
    accent: "cyan",
  },
];

export default function Contact() {
  return (
    <section id="contato" className="py-24 border-t border-surface-3">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section header */}
          <p className="text-xs text-accent tracking-widest uppercase font-mono mb-3">
            06 — Contato
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-off-white mb-4">
            Vamos{" "}
            <span className="text-accent">Conversar?</span>
          </h2>
          <p className="text-muted text-sm leading-relaxed mb-12 max-w-md mx-auto">
            Estou aberto a oportunidades, colaborações e projetos interessantes.
            Se você quer transformar dados em decisões, fale comigo.
          </p>

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mb-10">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className={`group flex items-center gap-4 bg-surface border border-surface-3 rounded-xl p-4 transition-all duration-300 ${
                    link.accent === "emerald"
                      ? "hover:border-accent/40 hover:shadow-glow-emerald"
                      : "hover:border-accent-2/40 hover:shadow-glow-cyan"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg bg-surface-2 border border-surface-3 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                      link.accent === "emerald"
                        ? "group-hover:border-accent/30 group-hover:bg-accent/5"
                        : "group-hover:border-accent-2/30 group-hover:bg-accent-2/5"
                    }`}
                  >
                    <Icon
                      size={17}
                      className={
                        link.accent === "emerald"
                          ? "text-accent"
                          : "text-accent-2"
                      }
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted mb-0.5">{link.label}</p>
                    <p className="text-sm text-off-white font-medium truncate">
                      {link.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 px-6 py-3 bg-accent text-background text-sm font-semibold rounded-full hover:bg-accent/90 transition-all duration-200 shadow-glow-emerald hover:shadow-glow-emerald-lg"
            >
              <MessageSquare size={16} />
              Enviar Mensagem
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-surface-3 text-off-white text-sm rounded-full hover:border-accent/50 hover:text-accent transition-all duration-200"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
