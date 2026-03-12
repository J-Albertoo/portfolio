import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#0d0d0d",
        "surface-2": "#141414",
        "surface-3": "#1a1a1a",
        accent: "#10B981",
        "accent-2": "#06B6D4",
        "off-white": "#E2E8F0",
        muted: "#6B7280",
        "muted-2": "#4B5563",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      boxShadow: {
        "glow-emerald": "0 0 24px 0 rgba(16,185,129,0.25)",
        "glow-cyan": "0 0 24px 0 rgba(6,182,212,0.25)",
        "glow-emerald-lg": "0 0 48px 0 rgba(16,185,129,0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
