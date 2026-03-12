"use client";

import Image from "next/image";
import { ArrowDown, MapPin, Sparkles } from "lucide-react";
import { personal } from "@/lib/data";
import { NeuralDecoration, MobileNeuralDots } from "@/components/NeuralDecoration";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ambient background glow */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-accent-2/5 rounded-full blur-3xl" />
      </div>

      {/* Grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Neural decorations — desktop (full graph) + mobile (dots only) */}
      <NeuralDecoration />
      <MobileNeuralDots />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-surface border border-surface-3 rounded-full px-4 py-1.5 mb-8 animate-fade-up">
            <Sparkles size={14} className="text-accent" />
            <span className="text-xs text-muted tracking-wide">
              Disponível para novas oportunidades
            </span>
          </div>

          <h1 className="animate-fade-up animate-delay-100">
            <span className="block text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-off-white leading-none">
              {personal.name}
            </span>
            <span className="block text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-off-white leading-none">
              {personal.lastName}
            </span>
            <span className="block mt-3 text-2xl md:text-3xl lg:text-4xl font-light text-accent">
              {personal.title}
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base md:text-lg text-muted leading-relaxed animate-fade-up animate-delay-200 mx-auto lg:mx-0">
            {personal.subtitle}
          </p>

          <p className="mt-4 max-w-lg text-sm text-muted/70 leading-relaxed animate-fade-up animate-delay-300 mx-auto lg:mx-0">
            {personal.bio}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 animate-fade-up animate-delay-400 justify-center lg:justify-start">
            <a
              href="#projetos"
              className="px-6 py-3 bg-accent text-background text-sm font-semibold rounded-full hover:bg-accent/90 transition-all duration-200 shadow-glow-emerald hover:shadow-glow-emerald-lg"
            >
              Ver Projetos
            </a>
            <a
              href="#contato"
              className="px-6 py-3 border border-surface-3 text-off-white text-sm rounded-full hover:border-accent/50 hover:text-accent transition-all duration-200"
            >
              Entre em Contato
            </a>
          </div>

          <div className="mt-6 flex items-center gap-2 justify-center lg:justify-start animate-fade-up animate-delay-500">
            <MapPin size={14} className="text-muted" />
            <span className="text-xs text-muted">{personal.location}</span>
          </div>
        </div>

        {/* Profile photo */}
        <div className="relative flex-shrink-0 animate-fade-up animate-delay-200">
          <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/30 to-accent-2/20 blur-xl scale-110"
            />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-surface-3">
              <Image
                src="/profile.jpg"
                alt="Foto de perfil de João Alberto Albuquerque"
                fill
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-surface border border-surface-3 rounded-xl px-4 py-2 shadow-glow-emerald">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs text-off-white font-medium">Open to work</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up animate-delay-600">
        <span className="text-xs text-muted tracking-widest uppercase">scroll</span>
        <ArrowDown size={16} className="text-muted animate-bounce" />
      </div>
    </section>
  );
}
