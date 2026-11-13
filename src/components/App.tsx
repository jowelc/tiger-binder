"use client";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Settings as Gear } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useStore } from "@/lib/store";
import { TARGET_TOTAL } from "@/data/cards";
import { applyView, type Filter, type Sort } from "@/lib/filter";
import { Background } from "./Background";
import { Logo } from "./Brand";
import { Hero } from "./Hero";
import { Overview } from "./Overview";
import { Controls } from "./Controls";
import { Wall } from "./Wall";
import { CardModal } from "./CardModal";
import { Settings } from "./Settings";
import { Celebration } from "./Celebration";
import { Footer } from "./Footer";
import { TigerEye } from "./Brand";

export function App() {
  const { ready, cards, owned, percent } = useStore();
  const [filter, setFilter] = useState<Filter>("all");
  const [sort, setSort] = useState<Sort>("set");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);
  const [settings, setSettings] = useState(false);
  const [binder, setBinder] = useState(false);

  const view = useMemo(() => applyView(cards, filter, sort, query), [cards, filter, sort, query]);
  const sigKey = `${filter}|${sort}|${query}`;

  const enterBinder = () => { setBinder(true); document.documentElement.requestFullscreen?.().catch(() => {}); };
  const exitBinder = () => { setBinder(false); if (document.fullscreenElement) document.exitFullscreen().catch(() => {}); };

  useEffect(() => {
    if (!binder) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && !openId && exitBinder();
    addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [binder, openId]);

  const open = (c: { id: string }) => setOpenId(c.id);

  const wall = <Wall cards={view} sort={sort} onOpen={open} sigKey={sigKey} />;
  const controls = (compact: boolean) => (
    <Controls filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} query={query} setQuery={setQuery} onBinder={compact ? exitBinder : enterBinder} count={view.length} compact={compact} />
  );

  return (
    <>
      <Background />
      <AnimatePresence>
        {!ready && (
          <motion.div exit={{ opacity: 0 }} className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-void">
            <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }} transition={{ repeat: Infinity, duration: 1.6 }}><TigerEye className="h-20 w-20" /></motion.div>
            <p className="mt-4 font-display text-xs tracking-[0.5em] text-muted">UNLOCKING VAULT</p>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="sticky top-0 z-40 border-b border-line bg-void/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between gap-2 px-4 pt-[env(safe-area-inset-top)] sm:h-[68px] sm:px-6">
          <Logo />
          <div className="hidden items-center gap-3 sm:flex">
            <div className="text-right">
              <div className="font-display text-sm font-bold text-ink">{owned} / {TARGET_TOTAL}</div>
              <div className="text-[10px] tracking-[0.25em] text-muted">{percent.toFixed(2)}% COMPLETE</div>
            </div>
            <div className="flex h-9 w-1.5 flex-col justify-end overflow-hidden rounded bg-slab"><motion.div className="w-full bg-tiger" initial={false} animate={{ height: `${percent}%` }} /></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="mr-1 text-right sm:hidden">
              <div className="font-display text-xs font-bold text-ink">{owned}/{TARGET_TOTAL}</div>
              <div className="text-[9px] tracking-[0.15em] text-muted">{percent.toFixed(1)}%</div>
            </div>
            <ThemeToggle />
            <button onClick={() => setSettings(true)} aria-label="Settings" className="rounded-lg border border-line p-2.5 text-silver transition hover:border-ember/60 hover:text-ember sm:p-2"><Gear className="h-5 w-5" /></button>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Overview onOpen={open} onShowMissing={() => { setFilter("missing"); document.getElementById("wall")?.scrollIntoView({ behavior: "smooth" }); }} />
        <section id="wall" className="mx-auto max-w-[1500px] px-3 sm:px-6">
          <div className="mb-6 text-center">
            <div className="text-xs tracking-[0.5em] text-ember">THE WALL</div>
            <h2 className="font-display mt-2 text-xl font-black text-ink sm:text-3xl">{TARGET_TOTAL} SLABS · <span className="text-tiger">{owned} ILLUMINATED</span></h2>
          </div>
          {controls(false)}
          <div className="mt-8">{wall}</div>
        </section>
      </main>
      <Footer />

      <AnimatePresence>
        {binder && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[45] overflow-y-auto bg-void px-3 pb-16 pt-3 sm:px-6 sm:pt-5">
            <div className="mx-auto mb-5 max-w-[1700px]">{controls(true)}</div>
            <div className="mx-auto max-w-[1700px]">{wall}</div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>{openId && <CardModal key={openId} id={openId} onClose={() => setOpenId(null)} />}</AnimatePresence>
      <AnimatePresence>{settings && <Settings onClose={() => setSettings(false)} />}</AnimatePresence>
      <Celebration />
    </>
  );
}
