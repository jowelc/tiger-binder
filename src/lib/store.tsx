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
  sync: { mode: "loading" | "local" | "shared"; canEdit: boolean; pinRequired: boolean; status: "idle" | "saving" | "saved" | "error"; error?: string };
  unlock: (pin: string) => Promise<boolean>;
  lock: () => void;
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
  const [mode, setMode] = useState<"loading" | "local" | "shared">("loading");
  const [pinReq, setPinReq] = useState(false);
  const [pin, setPin] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [syncError, setSyncError] = useState<string | undefined>();
  const lastSynced = useRef<Collection | null>(null); // what the server is known to hold
  const dirty = useRef(false);
  const canEdit = mode !== "shared" || !pinReq || pin !== "";

  const pullRemote = useCallback(async (initial: boolean) => {
    try {
      const r = await fetch("/api/collection", { cache: "no-store" });
      const d = await r.json();
      if (!d.configured) { setMode("local"); return; }
      setPinReq(Boolean(d.pinRequired));
      if (d.error || !d.collection) { if (initial) setMode("local"); return; }
      const remote = d.collection as Collection;
      if (!initial && dirty.current) return; // don't clobber in-flight edits
      const first = lastSynced.current === null;
      lastSynced.current = remote;
      setMode("shared");
      if (Object.keys(remote).length || !first) {
        // server is the source of truth once it has data (empty server on first load = migrate local data up)
        prevPct.current = (Object.values(remote).filter((x) => x.owned).length / TARGET_TOTAL) * 100;
        setCol((cur) => (JSON.stringify(cur) === JSON.stringify(remote) ? cur : remote));
      }
    } catch { if (initial) setMode("local"); }
  }, []);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrate from localStorage after mount
      if (raw) setCol(JSON.parse(raw));
      setPin(localStorage.getItem("tiger-binder:pin") || "");
    } catch {}
    setReady(true);
    pullRemote(true);
  }, [pullRemote]);

  // refresh when the tab regains focus and every 15s so other people's changes appear
  useEffect(() => {
    if (mode !== "shared") return;
    const tick = () => document.visibilityState === "visible" && pullRemote(false);
    const id = setInterval(tick, 15000);
    document.addEventListener("visibilitychange", tick);
    return () => { clearInterval(id); document.removeEventListener("visibilitychange", tick); };
  }, [mode, pullRemote]);

  // push only the cards that changed (debounced)
  useEffect(() => {
    if (!ready || mode !== "shared" || !canEdit || lastSynced.current === null) return;
    const base = lastSynced.current;
    const changes: Record<string, CardRecord | null> = {};
    for (const [id, rec] of Object.entries(col)) if (JSON.stringify(rec) !== JSON.stringify(base[id])) changes[id] = rec;
    for (const id of Object.keys(base)) if (!(id in col)) changes[id] = null;
    if (!Object.keys(changes).length) { dirty.current = false; return; }
    dirty.current = true;
    const t = setTimeout(async () => {
      setStatus("saving");
      try {
        const r = await fetch("/api/collection", { method: "PATCH", headers: { "x-pin": pin, "content-type": "application/json" }, body: JSON.stringify({ changes }) });
        if (!r.ok) {
          const e = await r.json().catch(() => ({}));
          if (r.status === 401) { setPin(""); localStorage.removeItem("tiger-binder:pin"); }
          throw new Error(e.error === "bad_pin" ? "Wrong PIN." : "Save failed — will retry on next change.");
        }
        const next = { ...base };
        for (const [id, rec] of Object.entries(changes)) { if (rec === null) delete next[id]; else next[id] = rec; }
        lastSynced.current = next; dirty.current = false; setStatus("saved"); setSyncError(undefined);
      } catch (e) { setStatus("error"); setSyncError(e instanceof Error ? e.message : "Save failed"); }
    }, 600);
    return () => clearTimeout(t);
  }, [col, ready, mode, canEdit, pin]);

  const unlock = useCallback(async (p: string) => {
    const r = await fetch("/api/auth", { method: "POST", body: JSON.stringify({ pin: p }) });
    if (!r.ok) return false;
    localStorage.setItem("tiger-binder:pin", p); setPin(p); return true;
  }, []);
  const lock = useCallback(() => { localStorage.removeItem("tiger-binder:pin"); setPin(""); }, []);

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
    sync: { mode, canEdit, pinRequired: pinReq, status, error: syncError }, unlock, lock,
  };
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
