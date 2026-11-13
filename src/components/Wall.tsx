"use client";
import { Fragment, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { BinderCard } from "@/data/types";
import { CATALOG_SETS } from "@/data/cards";
import { useStore } from "@/lib/store";
import type { Sort } from "@/lib/filter";
import { CardSlot } from "./CardSlot";

export function Wall({ cards, sort, onOpen, sigKey }: { cards: BinderCard[]; sort: Sort; onOpen: (c: BinderCard) => void; sigKey: string }) {
  const { lastUnlocked } = useStore();
  const groups = useMemo(() => {
    if (sort !== "set") return [{ id: "all", name: "", date: "", cards }];
    return CATALOG_SETS.map((s) => ({ id: s.id, name: s.name, date: s.releaseDate, cards: cards.filter((c) => c.setId === s.id) })).filter((g) => g.cards.length);
  }, [cards, sort]);

  if (!cards.length)
    return <div className="py-24 text-center text-muted">No cards match this view. The vault is quiet…</div>;

  let idx = 0;
  return (
    <AnimatePresence mode="wait">
      <motion.div key={sigKey} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="space-y-10">
        {groups.map((g) => {
          const ownedN = g.cards.filter((c) => c.owned).length;
          return (
            <Fragment key={g.id}>
              <section>
                {g.name && (
                  <div className="mb-4 flex items-center gap-3 sm:mb-5 sm:gap-4">
                    <div className="h-8 w-1.5 rounded bg-tiger" />
                    <div>
                      <h2 className="font-display text-sm font-bold tracking-widest sm:text-lg text-ink">{g.name.toUpperCase()}</h2>
                      <div className="text-xs tracking-[0.25em] text-muted">{g.date.slice(0, 4)} · {ownedN} / {g.cards.length} UNLOCKED</div>
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-ember/50 via-gold/20 to-transparent" />
                  </div>
                )}
                <div className="grid gap-3 [grid-template-columns:repeat(auto-fill,minmax(140px,1fr))] sm:gap-4 sm:[grid-template-columns:repeat(auto-fill,minmax(148px,1fr))] [perspective:1200px]">
                  {g.cards.map((c) => (
                    <CardSlot key={c.id} card={c} onOpen={onOpen} justUnlocked={lastUnlocked === c.id} index={idx++} />
                  ))}
                </div>
              </section>
            </Fragment>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
}
