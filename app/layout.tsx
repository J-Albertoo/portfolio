import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "João Alberto Albuquerque — Data Scientist & AI Engineer",
  description:
    "Portfólio de João Alberto Albuquerque. Data Scientist & AI Engineer especializado em Machine Learning, análise estatística e IA aplicada à tomada de decisão estratégica.",
  keywords: [
    "Data Scientist",
    "AI Engineer",
    "Machine Learning",
    "Python",
    "LangChain",
    "Portfólio",
  ],
  authors: [{ name: "João Alberto Albuquerque" }],
  openGraph: {
    title: "João Alberto Albuquerque — Data Scientist & AI Engineer",
    description: "Transformando dados complexos em decisões estratégicas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="bg-background text-off-white antialiased">{children}</body>
    </html>
  );
}
