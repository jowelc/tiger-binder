import raw from "./catalog.json";
import type { CatalogCard, CatalogSet } from "./types";

export const TARGET_TOTAL = 131;

export const CATALOG_SETS = raw.sets as CatalogSet[];
const base = raw.cards as CatalogCard[];

/** Label each printing so same-named cards are never confused. */
function variantOf(c: CatalogCard): string {
  switch (c.rarity) {
    case "Rare Holo GX": return "Holo";
    case "Rare Rainbow": return "Rainbow";
    case "Promo": return "Promo";
    case "Uncommon": return "Regular";
    case "Rare Ultra": {
      const sibs = base.filter((x) => x.name === c.name && x.setId === c.setId && x.rarity === "Rare Ultra");
      return sibs.length > 1 && sibs[0].id !== c.id ? "Alternate Art" : "Full Art";
    }
    default: return c.rarity;
  }
}
export const CATALOG: CatalogCard[] = base.map((c) => ({ ...c, variant: variantOf(c) }));

/**
 * Manifest notes — discrepancies / judgement calls to review.
 * Source: Pokémon TCG API (pokemontcg.io), filter subtypes:"TAG TEAM", 2026-11-13.
 */
export const MANIFEST_NOTES: string[] = [
  `Catalog contains ${CATALOG.length} unique printings (target ${TARGET_TOTAL}) — ${
    CATALOG.length === TARGET_TOTAL ? "matches the target." : "DOES NOT match the target; review."
  }`,
  "Pokémon TAG TEAM-GX and TAG TEAM Trainer cards are listed; ordinary Pokémon-GX are excluded.",
  "Includes Hidden Fates (3), SM Black Star Promos (17) and Cosmic Eclipse Togepi 143a as separate entries.",
  "'30th Celebration: Classic Collection' Pikachu & Zekrom-GX (me55c-33, Sep 2026) is a reprint counted toward 131 by the database. Verify it is in your reference screenshot; if not, the true set total may be 130.",
  "No screenshot was attached, so this catalog could not be compared against your reference image.",
];

export const POKEMON_COUNT = CATALOG.filter((c) => c.category === "pokemon").length;
export const TRAINER_COUNT = CATALOG.filter((c) => c.category === "trainer").length;
