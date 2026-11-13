"use client";
import { motion } from "framer-motion";
import { Trophy, Lock, ShieldCheck, Layers } from "lucide-react";
import { useStore } from "@/lib/store";
import { TARGET_TOTAL } from "@/data/cards";
import { AnimatedNumber } from "./AnimatedNumber";

function Ring({ percent }: { percent: number }) {
  const R = 118, C = 2 * Math.PI * R;
  return (
    <div className="relative h-[230px] w-[230px] shrink-0 sm:h-[290px] sm:w-[290px]">
      <div className="absolute inset-4 rounded-full bg-ember/20 blur-3xl" style={{ opacity: 0.25 + percent / 140 }} />
      <svg viewBox="0 0 280 280" className="relative h-full w-full -rotate-90">
        <defs>
          <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#FF8A32" /><stop offset="1" stopColor="#FFD27A" /></linearGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="4" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        </defs>
        <circle cx="140" cy="140" r={R} fill="none" stroke="var(--c-slab)" strokeWidth="14" />
        <circle cx="140" cy="140" r={R + 16} fill="none" stroke="#ffffff10" strokeWidth="1" strokeDasharray="2 7" />
        <motion.circle cx="140" cy="140" r={R} fill="none" stroke="url(#ring)" strokeWidth="14" strokeLinecap="round" filter="url(#glow)"
          strokeDasharray={C} initial={{ strokeDashoffset: C }} animate={{ strokeDashoffset: C * (1 - Math.min(percent, 100) / 100) }}
          transition={{ type: "spring", stiffness: 60, damping: 18 }} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="font-display text-4xl font-black text-tiger sm:text-5xl"><AnimatedNumber value={percent} decimals={2} suffix="%" /></div>
        <div className="mt-1 text-xs tracking-[0.35em] text-muted">COMPLETE</div>
      </div>
    </div>
  );
}

function Stat({ icon: Icon, label, value, accent }: { icon: typeof Trophy; label: string; value: number; accent?: boolean }) {
  return (
    <motion.div whileHover={{ y: -4, scale: 1.03 }} className="glass group relative overflow-hidden rounded-xl p-3 sm:p-4">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember to-transparent opacity-0 transition group-hover:opacity-100" />
      <Icon className={`mb-2 h-4 w-4 ${accent ? "text-ember" : "text-gold"}`} />
      <div className="font-display text-2xl font-bold text-ink sm:text-3xl"><AnimatedNumber value={value} /></div>
      <div className="mt-1 text-[11px] tracking-[0.25em] text-muted">{label}</div>
    </motion.div>
  );
}

export function Hero() {
  const { owned, missing, psa10, percent } = useStore();
  return (
    <section className="relative mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 sm:pb-10 sm:pt-14">
      <div className="flex flex-col items-center gap-8 sm:gap-12 lg:flex-row lg:justify-between">
        <div className="max-w-2xl text-center lg:text-left">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-4 inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-4 py-1 text-xs tracking-[0.3em] text-ember">
            <span className="h-1.5 w-1.5 rounded-full bg-ember" style={{ animation: "pulseGlow 1.8s infinite" }} /> PSA 10 · VAULT ACTIVE
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-[2rem] font-black leading-[1.05] text-ink sm:text-6xl">
            THE <span className="text-tiger">TAG TEAM</span><br />COLLECTION
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-5 text-xl tracking-wide text-silver/80">
            {TARGET_TOTAL} Cards. One Ultimate Chase.
          </motion.p>
          <div className="mt-8">
            <div className="text-xs tracking-[0.35em] text-muted">COLLECTION PROGRESS</div>
            <div className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl"><AnimatedNumber value={owned} /> <span className="text-muted">/ {TARGET_TOTAL}</span> <span className="text-lg tracking-widest text-gold">CARDS</span></div>
            <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-slab">
              <motion.div className="h-full rounded-full bg-tiger shadow-[0_0_18px_#ff8a32]" animate={{ width: `${percent}%` }} transition={{ type: "spring", stiffness: 70, damping: 18 }} />
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-2.5 sm:gap-3 sm:grid-cols-4">
            <Stat icon={Trophy} label="OWNED" value={owned} accent />
            <Stat icon={Lock} label="MISSING" value={missing} />
            <Stat icon={ShieldCheck} label="PSA 10" value={psa10} accent />
            <Stat icon={Layers} label="TOTAL" value={TARGET_TOTAL} />
          </div>
        </div>
        <Ring percent={percent} />
      </div>
    </section>
  );
}
