import type { Metadata, Viewport } from "next";
import { Orbitron, Rajdhani, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron", weight: ["500", "700", "900"] });
const rajdhani = Rajdhani({ subsets: ["latin"], variable: "--font-rajdhani", weight: ["400", "500", "600", "700"] });
const kr = Noto_Sans_KR({ subsets: ["latin"], variable: "--font-kr", weight: ["500", "700", "900"], preload: false });

export const metadata: Metadata = {
  title: "TIGER BINDER — The TAG TEAM Collection",
  description: "호랑이's premium digital vault for the complete PSA 10 Pokémon TAG TEAM collection.",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#08090d" };

const themeInit = `try{var t=localStorage.getItem("tiger-binder:theme");document.documentElement.dataset.theme=t==="light"?"light":"dark"}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning className={`${orbitron.variable} ${rajdhani.variable} ${kr.variable}`}>
      <head><script dangerouslySetInnerHTML={{ __html: themeInit }} /></head>
      <body>{children}</body>
    </html>
  );
}
