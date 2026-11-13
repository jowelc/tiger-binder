"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { CATALOG, TARGET_TOTAL } from "@/data/cards";
import { LOCAL_IMAGES } from "@/data/cardImages";
import type { BinderCard, CardRecord, Collection } from "@/data/types";

const KEY = "tiger-binder:v1";
const MS_KEY = "tiger-binder:milestones";

export const MILESTONES = [
  { at: 10, title: "First Milestone Unlocked", sub: "The hunt has begun." },
  { at: 25, title: "Bronze Collection", sub: "A quarter of the vault is lit." },
  { at: 50, title: "Halfway There", sub: "The wall is half illuminated." },
  { at: 75, title: "Almost Complete", sub: "The summit is in sight." },
  { at: 90, title: "Near Completion", sub: "Only a handful of slabs remain." },
  { at: 100, title: "THE ULTIMATE TAG TEAM COLLECTION", sub: "131 Cards. One Ultimate Chase. Complete." },
] as const;

const blank: CardRecord = { owned: false, psa10: false };

interface Store {
  ready: boolean;
  cards: BinderCard[];
  owned: number;
  psa10: number;
  missing: number;
  percent: number;
  recent: BinderCard[];
  update: (id: string, patch: Partial<CardRecord>) => void;
  setOwned: (id: string, owned: boolean) => void;
  resetCard: (id: string) => void;
  exportJson: () => string;
  importJson: (text: string) => { ok: boolean; message: string };
  resetAll: () => void;
  celebration: (typeof MILESTONES)[number] | null;
  dismissCelebration: () => void;
  lastUnlocked: string | null;
}

const Ctx = createContext<Store | null>(null);
export const useStore = () => {
  const s = useContext(Ctx);
  if (!s) throw new Error("useStore outside provider");
  return s;
};

export function CollectionProvider({ children }: { children: React.ReactNode }) {
  const [col, setCol] = useState<Collection>({});
  const [ready, setReady] = useState(false);
  const [celebration, setCelebration] = useState<Store["celebration"]>(null);
  const [lastUnlocked, setLastUnlocked] = useState<string | null>(null);
  const prevPct = useRef(0);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrate from localStorage after mount
      if (raw) setCol(JSON.parse(raw));
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(col));
    } catch {
      alert("Storage is full — remove some uploaded images or export your data.");
    }
  }, [col, ready]);

  const cards = useMemo<BinderCard[]>(
    () =>
      CATALOG.map((c) => {
        const record = col[c.id] ?? blank;
        return {
          ...c,
          record,
          owned: record.owned,
          displayName: record.nameOverride?.trim() || c.name,
          image: record.imageUrl || LOCAL_IMAGES[c.id] || c.imageUrl,
        };
      }),
    [col],
  );

  const owned = cards.filter((c) => c.owned).length;
  const psa10 = cards.filter((c) => c.owned && c.record.psa10).length;
  const percent = (owned / TARGET_TOTAL) * 100;
  const recent = useMemo(
    () => cards.filter((c) => c.owned).sort((a, b) => (b.record.ownedAt ?? 0) - (a.record.ownedAt ?? 0)).slice(0, 8),
    [cards],
  );

  // Milestones: celebrate only when progress rises past a threshold, once each.
  useEffect(() => {
    if (!ready) return;
    const prev = prevPct.current;
    prevPct.current = percent;
    if (percent <= prev) return;
    let seen: number[] = [];
    try { seen = JSON.parse(localStorage.getItem(MS_KEY) || "[]"); } catch {}
    const hit = [...MILESTONES].reverse().find((m) => percent >= m.at && prev < m.at && !seen.includes(m.at));
    if (hit) {
      localStorage.setItem(MS_KEY, JSON.stringify([...seen, hit.at]));
      setCelebration(hit);
    }
  }, [percent, ready]);

  // Set the baseline silently after loading so a refresh doesn't celebrate.
  useEffect(() => {
    if (ready) prevPct.current = (Object.values(col).filter((r) => r.owned).length / TARGET_TOTAL) * 100;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  const update = useCallback((id: string, patch: Partial<CardRecord>) => {
    setCol((p) => ({ ...p, [id]: { ...blank, ...p[id], ...patch } }));
  }, []);

  const setOwned = useCallback((id: string, isOwned: boolean) => {
    setCol((p) => {
      const cur = { ...blank, ...p[id] };
      return {
        ...p,
        [id]: isOwned
          ? { ...cur, owned: true, psa10: true, ownedAt: Date.now(), acquiredDate: cur.acquiredDate || new Date().toISOString().slice(0, 10) }
          : { ...cur, owned: false, psa10: false },
      };
    });
    if (isOwned) {
      setLastUnlocked(id);
      setTimeout(() => setLastUnlocked((c) => (c === id ? null : c)), 2500);
    }
  }, []);

  const resetCard = useCallback((id: string) => setCol((p) => { const n = { ...p }; delete n[id]; return n; }), []);

  const exportJson = useCallback(
    () => JSON.stringify({ app: "TIGER BINDER", version: 1, exportedAt: new Date().toISOString(), collection: col }, null, 2),
    [col],
  );

  const importJson = useCallback((text: string) => {
    try {
      const data = JSON.parse(text);
      const c = data?.collection ?? data;
      if (!c || typeof c !== "object" || Array.isArray(c)) throw new Error("Invalid format");
      const known = new Set(CATALOG.map((x) => x.id));
      const next: Collection = {};
      let n = 0;
      for (const [id, r] of Object.entries(c as Collection)) {
        if (known.has(id) && r && typeof r === "object") { next[id] = { ...blank, ...r }; n++; }
      }
      prevPct.current = (Object.values(next).filter((r) => r.owned).length / TARGET_TOTAL) * 100;
      setCol(next);
      return { ok: true, message: `Imported ${n} card records.` };
    } catch (e) {
      return { ok: false, message: e instanceof Error ? e.message : "Import failed" };
    }
  }, []);

  const resetAll = useCallback(() => {
    prevPct.current = 0;
    localStorage.removeItem(MS_KEY);
    setCol({});
  }, []);

  const value: Store = {
    ready, cards, owned, psa10, missing: TARGET_TOTAL - owned, percent, recent,
    update, setOwned, resetCard, exportJson, importJson, resetAll,
    celebration, dismissCelebration: () => setCelebration(null), lastUnlocked,
  };
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
