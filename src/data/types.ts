export type CardCategory = "pokemon" | "trainer";

/** Static catalog entry — never mutated at runtime. */
export interface CatalogCard {
  id: string; // unique, stable (pokemontcg.io id, e.g. "sm9-1")
  name: string;
  category: CardCategory;
  setId: string;
  setName: string;
  number: string;
  rarity: string;
  imageUrl: string; // default artwork (overridable, see cardImages.ts)
  variant?: string; // printing label, derived in cards.ts (Holo / Full Art / Alternate Art / Rainbow / Promo)
}

export interface CatalogSet {
  id: string;
  name: string;
  releaseDate: string;
}

/** Per-card user data, persisted in localStorage. */
export interface CardRecord {
  owned: boolean;
  psa10: boolean;
  acquiredDate?: string;
  price?: string;
  notes?: string;
  imageUrl?: string; // user override (URL, /cards/x.png path, or data URL)
  nameOverride?: string;
  ownedAt?: number;
}

export type Collection = Record<string, CardRecord>;

/** A catalog card merged with the user's record. */
export interface BinderCard extends CatalogCard {
  displayName: string;
  image: string;
  record: CardRecord;
  owned: boolean;
}
