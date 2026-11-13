"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { X, Check, Upload, RotateCcw, ShieldCheck, Lock } from "lucide-react";
import { useStore } from "@/lib/store";
import { fileToDataUrl } from "@/lib/image";
import type { BinderCard } from "@/data/types";
import { PsaSlab } from "./PsaSlab";

const field = "w-full rounded-lg border border-line bg-void/70 px-3 py-2.5 text-base md:py-2 md:text-sm outline-none transition focus:border-ember/60";
const lab = "mb-1 block text-[11px] tracking-[0.25em] text-muted";

export function CardModal({ id, onClose }: { id: string; onClose: () => void }) {
  const { cards, update, setOwned, resetCard, sync } = useStore();
  const card = cards.find((c) => c.id === id) as BinderCard;
  const fileRef = useRef<HTMLInputElement>(null);
  const [url, setUrl] = useState(card.record.imageUrl ?? "");
  const [err, setErr] = useState("");

  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    addEventListener("keydown", k);
    return () => removeEventListener("keydown", k);
  }, [onClose]);

  const r = card.record;
  return (
    <motion.div className="fixed inset-0 z-50 flex justify-end" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <motion.aside role="dialog" aria-modal aria-label={card.displayName}
        initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", stiffness: 260, damping: 30 }}
        className="relative h-full w-full max-w-[880px] overflow-y-auto border-l border-ember/30 bg-deep shadow-[-30px_0_80px_-20px_#ff8a3240] md:flex">
        <button onClick={onClose} aria-label="Close" className="absolute right-3 top-3 z-10 rounded-full bg-black/60 p-2.5 text-silver hover:text-white"><X className="h-5 w-5" /></button>

        <div className="flex shrink-0 items-center justify-center bg-gradient-to-b from-void to-deep p-5 pt-14 md:w-[360px] md:p-8">
          <motion.div key={card.image + card.owned} initial={{ rotateY: 90, opacity: 0 }} animate={{ rotateY: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="w-full max-w-[230px] md:max-w-[300px] [perspective:900px]">
            <div className={`rounded-[14px] ${card.owned ? "shadow-[0_0_60px_-8px_#ff8a32]" : ""}`}>
              <PsaSlab card={card} large>
                <div className="group relative aspect-[63/88] overflow-hidden rounded-[2px] slot-silhouette">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={card.image} alt={card.displayName} className={`h-full w-full object-cover ${card.owned ? "" : "locked-art"}`} />
                  {!card.owned && <div className="absolute right-2 top-2 rounded-full bg-black/60 p-1.5"><Lock className="h-4 w-4 text-ember" /></div>}
                  {card.owned && <div className="slab-shine absolute inset-0 overflow-hidden" />}
                </div>
              </PsaSlab>
            </div>
          </motion.div>
        </div>

        <fieldset disabled={!sync.canEdit} className="min-w-0 flex-1 space-y-5 border-0 p-4 pb-[max(2rem,env(safe-area-inset-bottom))] sm:p-6 md:pt-8">
          {!sync.canEdit && <div className="flex items-center gap-2 rounded-lg border border-gold/40 bg-gold/10 px-3 py-2 text-sm text-gold"><Lock className="h-4 w-4" /> View only — unlock editing in Settings.</div>}
          <div>
            <div className="text-[11px] tracking-[0.3em] text-ember">{card.category === "trainer" ? "TRAINER TAG TEAM" : "POKÉMON TAG TEAM"} · {card.variant?.toUpperCase()}</div>
            <h2 className="font-display mt-1 text-2xl font-bold text-ink">{card.displayName}</h2>
            <p className="text-sm text-muted">{card.setName} · #{card.number} · <code className="text-xs">{card.id}</code></p>
          </div>

          <div className="flex gap-2">
            <button onClick={() => setOwned(card.id, true)} className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 font-bold tracking-wide transition ${card.owned ? "bg-tiger text-black shadow-[0_0_20px_#ff8a3280]" : "border border-ember/40 text-ember hover:bg-ember/10"}`}>
              <Check className="h-4 w-4" /> {card.owned ? "Owned" : "Mark as Owned"}
            </button>
            <button onClick={() => setOwned(card.id, false)} className={`flex-1 rounded-lg py-2.5 font-bold tracking-wide transition ${!card.owned ? "bg-wash text-ink" : "border border-line text-silver hover:bg-wash"}`}>
              {card.owned ? "Mark as Missing" : "Missing"}
            </button>
          </div>

          <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-line bg-void/50 p-3">
            <input type="checkbox" checked={r.psa10} disabled={!card.owned} onChange={(e) => update(card.id, { psa10: e.target.checked })} className="h-4 w-4 accent-[#FF8A32]" />
            <ShieldCheck className="h-4 w-4 text-gold" />
            <span className="text-sm">Confirmed <b>PSA 10</b> Gem Mint slab {!card.owned && <span className="text-muted">(mark owned first)</span>}</span>
          </label>

          <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2">
            <div><label className={lab}>ACQUISITION DATE</label><input type="date" className={field} value={r.acquiredDate ?? ""} onChange={(e) => update(card.id, { acquiredDate: e.target.value })} /></div>
            <div><label className={lab}>PURCHASE PRICE (OPTIONAL)</label><input type="number" min="0" step="0.01" placeholder="0.00" className={field} value={r.price ?? ""} onChange={(e) => update(card.id, { price: e.target.value })} /></div>
          </div>
          <div><label className={lab}>CARD NAME</label><input className={field} value={r.nameOverride ?? card.name} onChange={(e) => update(card.id, { nameOverride: e.target.value })} /></div>
          <div><label className={lab}>PERSONAL NOTES</label><textarea rows={3} className={field} placeholder="Cert number, where you found it…" value={r.notes ?? ""} onChange={(e) => update(card.id, { notes: e.target.value })} /></div>

          <div className="rounded-xl border border-line p-4">
            <label className={lab}>CARD IMAGE · URL OR LOCAL PATH (e.g. /cards/{card.id}.png)</label>
            <div className="flex gap-2">
              <input className={field} placeholder="https://…  or  /cards/…" value={url} onChange={(e) => setUrl(e.target.value)} />
              <button onClick={() => { update(card.id, { imageUrl: url.trim() || undefined }); }} className="rounded-lg bg-wash px-3 text-sm font-semibold hover:bg-wash">Apply</button>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              <button onClick={() => fileRef.current?.click()} className="flex items-center gap-1.5 rounded-lg border border-ember/40 px-3 py-1.5 text-sm text-ember hover:bg-ember/10"><Upload className="h-4 w-4" /> Upload image</button>
              <button onClick={() => { setUrl(""); update(card.id, { imageUrl: undefined }); }} className="flex items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 text-sm text-silver hover:bg-wash"><RotateCcw className="h-4 w-4" /> Use default</button>
              <input ref={fileRef} type="file" accept="image/*" hidden onChange={async (e) => {
                const f = e.target.files?.[0]; if (!f) return;
                try { const d = await fileToDataUrl(f); update(card.id, { imageUrl: d }); setUrl(""); setErr(""); } catch { setErr("Could not read that image."); }
                e.target.value = "";
              }} />
            </div>
            {err && <p className="mt-2 text-sm text-red-400">{err}</p>}
          </div>

          <button onClick={() => { if (confirm("Clear all saved data for this card?")) { resetCard(card.id); setUrl(""); } }} className="text-xs tracking-widest text-muted hover:text-red-400">RESET THIS CARD</button>
        </fieldset>
      </motion.aside>
    </motion.div>
  );
}
