import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-surface-3 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-sm text-accent tracking-widest">JA.</span>
        <p className="text-xs text-muted text-center">
          © {new Date().getFullYear()} {personal.fullName}. Feito com Next.js & Tailwind CSS.
        </p>
        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted hover:text-accent transition-colors duration-200"
        >
          github.com/J-Albertoo
        </a>
      </div>
    </footer>
  );
}
