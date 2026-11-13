import type { BinderCard } from "@/data/types";

/** PSA-style graded slab: clear case, red-bordered label (GEM MT / 10 / barcode / hologram), card well. */
export function PsaSlab({ card, large = false, children }: { card: BinderCard; large?: boolean; children: React.ReactNode }) {
  const owned = card.owned;
  const z = large
    ? { h: "h-[84px]", gem: "text-[22px]", ten: "text-[64px]", bar: "h-[18px] w-[110px]", holo: "h-[26px] w-[26px] text-[9px]", name: "text-[11px]", pad: "p-3", bw: "border-[5px]" }
    : { h: "h-[46px]", gem: "text-[11px]", ten: "text-[32px]", bar: "h-[9px] w-[52px]", holo: "h-[14px] w-[14px] text-[5px]", name: "text-[7px]", pad: "p-[7px]", bw: "border-[3px]" };
  return (
    <div className={`psa-case psa-gloss relative rounded-[10px] ${z.pad} ${owned ? "" : "grayscale-[0.6] brightness-[0.55]"}`}>
      {/* label */}
      <div className={`relative mb-[6px] ${z.h} ${z.bw} overflow-visible rounded-[3px] border-[#e32c25] bg-white text-black shadow-[0_1px_2px_#0006]`}>
        <div className="flex h-full items-center justify-between px-[7%]">
          <div className="flex min-w-0 flex-col justify-center gap-[3px]">
            <div className={`whitespace-nowrap font-medium leading-none tracking-tight ${z.gem}`}>GEM MT</div>
            <div className={`psa-barcode ${z.bar} opacity-90`} />
          </div>
          <div className={`font-light leading-none ${z.ten}`} style={{ fontFamily: "var(--font-display)" }}>10</div>
        </div>
        {/* silver PSA hologram sticker overlapping the bottom border */}
        <div className={`absolute left-1/2 top-full -translate-x-1/2 -translate-y-[62%] ${z.holo} flex items-center justify-center rounded-[1px] bg-gradient-to-br from-[#e9ecf2] via-[#9ea6b5] to-[#dfe3ea] font-black italic text-[#1f3f9a] shadow ring-1 ring-black/20`}>
          PSA
        </div>
      </div>
      {/* card well */}
      <div className="psa-well relative rounded-[4px] p-[3px]">{children}</div>
      <div className={`mt-[5px] truncate px-1 text-center font-semibold uppercase tracking-wide text-black/45 ${z.name}`}>
        {owned ? `${card.displayName} · ${card.setName} #${card.number}` : `${card.variant} · ${card.setName}`}
      </div>
    </div>
  );
}
