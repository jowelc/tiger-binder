"use client";
import { motion } from "framer-motion";
import { Clock, EyeOff } from "lucide-react";
import { useStore } from "@/lib/store";
import type { BinderCard } from "@/data/types";

export function Overview({ onOpen, onShowMissing }: { onOpen: (c: BinderCard) => void; onShowMissing: () => void }) {
  const { recent, cards, missing } = useStore();
  const miss = cards.filter((c) => !c.owned).slice(0, 10);
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)] gap-4 px-4 pb-8 sm:gap-5 sm:px-6 sm:pb-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <div className="glass rounded-2xl p-4 sm:p-5">
        <h3 className="mb-4 flex items-center gap-2 font-display text-sm font-bold tracking-[0.25em] text-ink"><Clock className="h-4 w-4 text-ember" /> RECENTLY ACQUIRED</h3>
        {recent.length === 0 ? (
          <p className="py-8 text-center text-sm text-muted">Nothing unlocked yet. Click any slot to begin.</p>
        ) : (
          <div className="flex gap-3 overflow-x-auto pb-2">
            {recent.map((c) => (
              <motion.button key={c.id} whileHover={{ y: -6 }} onClick={() => onOpen(c)} className="w-24 shrink-0 text-left">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.image} alt={c.displayName} className="aspect-[63/88] w-full rounded-md border border-gold/50 object-cover shadow-[0_0_14px_-3px_#ff8a32]" />
                <div className="mt-1 truncate text-[11px] text-silver">{c.displayName}</div>
              </motion.button>
            ))}
          </div>
        )}
      </div>
      <div className="glass rounded-2xl p-4 sm:p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <h3 className="flex items-center gap-2 font-display text-sm font-bold tracking-[0.25em] text-ink"><EyeOff className="h-4 w-4 text-gold" /> MISSING CARDS · {missing}</h3>
          <button onClick={onShowMissing} className="text-xs font-semibold tracking-widest text-ember hover:underline">VIEW ALL ON WALL →</button>
        </div>
        {missing === 0 ? <p className="py-8 text-center text-gold">Nothing missing. Legendary.</p> : (
          <div className="flex gap-3 overflow-x-auto pb-2">
            {miss.map((c) => (
              <motion.button key={c.id} whileHover={{ y: -6 }} onClick={() => onOpen(c)} className="group w-24 shrink-0 text-left">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.image} alt="" loading="lazy" className="aspect-[63/88] w-full rounded-md border border-line object-cover locked-art" />
                <div className="mt-1 truncate text-[11px] text-muted">{c.displayName}</div>
              </motion.button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
