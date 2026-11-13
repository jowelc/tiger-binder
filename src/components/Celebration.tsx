"use client";
import { useEffect, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Trophy, Crown } from "lucide-react";
import { useStore } from "@/lib/store";

export function Celebration() {
  const { celebration, dismissCelebration, owned } = useStore();
  const reduce = useReducedMotion();
  const final = celebration?.at === 100;
  useEffect(() => {
    if (!celebration || final) return;
    const t = setTimeout(dismissCelebration, 4800);
    return () => clearTimeout(t);
  }, [celebration, final, dismissCelebration]);
  const bits = useMemo(() => Array.from({ length: final ? 90 : 28 }, (_, i) => { const r = (k: number) => { const v = Math.sin(i * 97.13 + k * 31.7) * 10000; return v - Math.floor(v); }; return { x: r(1) * 100, d: 2 + r(2) * 3, delay: r(3) * 1.5, c: i % 2 ? "#FF8A32" : "#D6A64B", s: 4 + r(4) * 8 }; }), [final]);
  if (!celebration) return null;
  return (
    <motion.div data-theme="dark" role="alert" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={dismissCelebration}
      className={`fixed inset-0 z-[60] flex cursor-pointer flex-col items-center justify-center text-center ${final ? "bg-black/90" : "bg-black/60 backdrop-blur-sm"}`}>
      {!reduce && bits.map((b, i) => (
        <motion.span key={i} className="absolute top-0 rounded-sm" style={{ left: `${b.x}%`, width: b.s, height: b.s * 1.6, background: b.c }}
          initial={{ y: -20, rotate: 0, opacity: 1 }} animate={{ y: "105vh", rotate: 720 }} transition={{ duration: b.d, delay: b.delay, repeat: final ? Infinity : 0, ease: "linear" }} />
      ))}
      <motion.div initial={{ scale: 0.4, rotate: -10 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 180, damping: 12 }}>
        {final ? <Crown className="mx-auto h-24 w-24 text-gold drop-shadow-[0_0_40px_#ff8a32]" /> : <Trophy className="mx-auto h-16 w-16 text-ember drop-shadow-[0_0_30px_#ff8a32]" />}
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="px-6">
        <div className="mt-6 text-xs tracking-[0.5em] text-ember">{Math.round(celebration.at)}% · {owned} CARDS</div>
        <h2 className={`font-display mt-3 font-black text-tiger ${final ? "text-3xl sm:text-6xl" : "text-3xl sm:text-5xl"}`}>{celebration.title}</h2>
        <p className="mt-4 text-lg text-silver/80">{celebration.sub}</p>
        <p className="mt-8 text-xs tracking-[0.3em] text-muted">CLICK TO CONTINUE</p>
      </motion.div>
    </motion.div>
  );
}
