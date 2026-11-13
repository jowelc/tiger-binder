"use client";
import { useStore } from "@/lib/store";
import { TARGET_TOTAL } from "@/data/cards";
import { Logo } from "./Brand";

export function Footer() {
  const { owned, percent } = useStore();
  return (
    <footer className="relative mt-20 border-t border-line bg-gradient-to-b from-transparent to-wash px-4 py-10 sm:px-6 sm:py-12">
      <div className="stripes absolute inset-0 opacity-40" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <Logo />
        <div className="text-center text-sm tracking-[0.3em] text-muted">CURATED FOR <span className="font-bold text-gold" style={{ fontFamily: "var(--font-kr)" }}>호랑이</span></div>
        <div className="text-center md:text-right">
          <div className="font-display text-xl font-bold text-tiger">{owned} / {TARGET_TOTAL}</div>
          <div className="text-xs tracking-[0.3em] text-muted">{percent.toFixed(2)}% COMPLETE</div>
        </div>
      </div>
    </footer>
  );
}
