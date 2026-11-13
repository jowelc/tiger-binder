"use client";
import { motion } from "framer-motion";
import { Search, Maximize2, X } from "lucide-react";
import { FILTERS, SORTS, type Filter, type Sort } from "@/lib/filter";

export function Controls(p: {
  filter: Filter; setFilter: (f: Filter) => void; sort: Sort; setSort: (s: Sort) => void;
  query: string; setQuery: (q: string) => void; onBinder: () => void; count: number; compact?: boolean;
}) {
  return (
    <div className="glass top-[68px] z-30 mx-auto flex max-w-7xl flex-col gap-3 rounded-2xl px-3 py-3 md:sticky md:flex-row md:flex-wrap md:items-center md:px-4">
      <div className="-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1 [scrollbar-width:none] md:flex-wrap md:overflow-visible md:pb-0">
        {FILTERS.map((f) => (
          <button key={f.id} onClick={() => p.setFilter(f.id)} className={`relative shrink-0 whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-semibold tracking-wide transition md:py-1.5 ${p.filter === f.id ? "text-black" : "text-silver/80 hover:text-ink"}`}>
            {p.filter === f.id && <motion.span layoutId={`filter-pill-${p.compact ? "b" : "w"}`} className="absolute inset-0 rounded-full bg-tiger" transition={{ type: "spring", stiffness: 400, damping: 32 }} />}
            <span className="relative">{f.label}</span>
          </button>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-2 md:ml-auto">
        <div className="relative min-w-0 flex-1 basis-full md:basis-auto">
          <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input value={p.query} onChange={(e) => p.setQuery(e.target.value)} placeholder="Search Pokémon, trainer, card…" aria-label="Search cards" type="search"
            className="w-full rounded-lg border border-line bg-void/70 py-2.5 pl-8 pr-8 text-base outline-none transition placeholder:text-muted focus:border-ember/60 md:w-64 md:py-1.5 md:text-sm" />
          {p.query && <button onClick={() => p.setQuery("")} aria-label="Clear search" className="absolute right-2 top-1/2 -translate-y-1/2 text-muted hover:text-ink"><X className="h-4 w-4" /></button>}
        </div>
        <select value={p.sort} onChange={(e) => p.setSort(e.target.value as Sort)} aria-label="Sort cards" className="min-w-0 flex-1 rounded-lg border border-line bg-void px-2.5 py-2.5 text-base outline-none focus:border-ember/60 md:flex-none md:py-1.5 md:text-sm">
          {SORTS.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
        </select>
        <span className="hidden text-xs tracking-widest text-muted sm:inline">{p.count} SHOWN</span>
        <button onClick={p.onBinder} className="flex items-center gap-1.5 rounded-lg border border-ember/40 px-3 py-2.5 text-sm font-semibold text-ember transition hover:bg-ember/10 md:py-1.5">
          {p.compact ? <X className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />} <span className={p.compact ? "" : "hidden min-[400px]:inline"}>{p.compact ? "Exit" : "Binder Mode"}</span>
        </button>
      </div>
    </div>
  );
}
