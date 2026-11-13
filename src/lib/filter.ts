import type { BinderCard } from "@/data/types";
import { CATALOG_SETS } from "@/data/cards";

export type Filter = "all" | "owned" | "missing" | "pokemon" | "trainer";
export type Sort = "set" | "name" | "number" | "owned" | "missing";

export const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All Cards" },
  { id: "owned", label: "Owned" },
  { id: "missing", label: "Missing" },
  { id: "pokemon", label: "Pokémon TAG TEAM" },
  { id: "trainer", label: "Trainer TAG TEAM" },
];
export const SORTS: { id: Sort; label: string }[] = [
  { id: "set", label: "Expansion / Set" },
  { id: "name", label: "Card Name" },
  { id: "number", label: "Card Number" },
  { id: "owned", label: "Owned First" },
  { id: "missing", label: "Missing First" },
];

const num = (n: string) => parseFloat(n.replace(/\D/g, "")) || 0;
const setIdx = (id: string) => CATALOG_SETS.findIndex((s) => s.id === id);

export function applyView(cards: BinderCard[], filter: Filter, sort: Sort, query: string): BinderCard[] {
  const q = query.trim().toLowerCase();
  let out = cards.filter((c) => {
    if (filter === "owned" && !c.owned) return false;
    if (filter === "missing" && c.owned) return false;
    if (filter === "pokemon" && c.category !== "pokemon") return false;
    if (filter === "trainer" && c.category !== "trainer") return false;
    if (q && !`${c.displayName} ${c.name} ${c.setName} ${c.number} ${c.variant ?? ""}`.toLowerCase().includes(q)) return false;
    return true;
  });
  const bySet = (a: BinderCard, b: BinderCard) => setIdx(a.setId) - setIdx(b.setId) || num(a.number) - num(b.number);
  out = [...out].sort((a, b) => {
    switch (sort) {
      case "name": return a.displayName.localeCompare(b.displayName) || bySet(a, b);
      case "number": return num(a.number) - num(b.number) || bySet(a, b);
      case "owned": return Number(b.owned) - Number(a.owned) || bySet(a, b);
      case "missing": return Number(a.owned) - Number(b.owned) || bySet(a, b);
      default: return bySet(a, b);
    }
  });
  return out;
}
