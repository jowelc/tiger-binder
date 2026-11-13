"use client";
import { memo, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { Lock, Sparkles } from "lucide-react";
import type { BinderCard } from "@/data/types";
import { PsaSlab } from "./PsaSlab";

function CardSlotBase({ card, onOpen, justUnlocked, index }: { card: BinderCard; onOpen: (c: BinderCard) => void; justUnlocked: boolean; index: number }) {
  const reduce = useReducedMotion();
  const [failed, setFailed] = useState(false);
  const mx = useMotionValue(0.5), my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [10, -10]), { stiffness: 220, damping: 20 });
  const ry = useSpring(useTransform(mx, [0, 1], [-12, 12]), { stiffness: 220, damping: 20 });
  const glare = useTransform([mx, my], ([x, y]) => `radial-gradient(circle at ${(x as number) * 100}% ${(y as number) * 100}%, rgba(255,255,255,.28), transparent 55%)`);
  const owned = card.owned;

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(card)}
      aria-label={`${card.displayName}, ${card.setName} ${card.number}, ${owned ? "owned" : "missing"}`}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index, 24) * 0.02, duration: 0.4 }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width); my.set((e.clientY - r.top) / r.height);
      }}
      onPointerLeave={() => { mx.set(0.5); my.set(0.5); }}
      whileHover={reduce ? undefined : { scale: 1.06, zIndex: 20 }}
      whileTap={{ scale: 0.98 }}
      style={reduce ? undefined : { rotateX: rx, rotateY: ry, transformPerspective: 800 }}
      className="group relative block w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-ember"
    >
      <div className={`relative rounded-[12px] transition-shadow duration-500 ${owned ? "shadow-[0_0_28px_-4px_#ff8a32bb] group-hover:shadow-[0_0_44px_0_#ff8a32]" : "shadow-[0_0_14px_-6px_#ff8a3255] group-hover:shadow-[0_0_24px_-4px_#ff8a32aa]"}`}>
        <PsaSlab card={card}>
          <div className="relative aspect-[63/88] overflow-hidden rounded-[2px] slot-silhouette">
            {!failed && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={card.image} alt={owned ? card.displayName : ""} loading="lazy" draggable={false}
                onError={() => setFailed(true)}
                className={`h-full w-full object-cover transition-all duration-700 ${owned ? "" : "locked-art"}`}
              />
            )}
            {!owned && <div className="absolute right-1.5 top-1.5 rounded-full bg-black/60 p-1"><Lock className="h-3.5 w-3.5 text-ember" /></div>}
            {owned && <div className="slab-shine absolute inset-0 overflow-hidden" />}
            {!reduce && <motion.div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-0 transition group-hover:opacity-100" style={{ background: glare }} />}
          </div>
        </PsaSlab>
        {justUnlocked && !reduce && (
          <motion.div className="pointer-events-none absolute inset-0 bg-white" initial={{ opacity: 0.9 }} animate={{ opacity: 0 }} transition={{ duration: 1.1 }} />
        )}
      </div>
      {justUnlocked && !reduce && (
        <>
          <motion.div className="pointer-events-none absolute inset-0 rounded-xl border-2 border-ember" initial={{ scale: 1, opacity: 1 }} animate={{ scale: 1.5, opacity: 0 }} transition={{ duration: 1.2 }} />
          <motion.div className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 text-gold" initial={{ y: 0, opacity: 1 }} animate={{ y: -34, opacity: 0 }} transition={{ duration: 1.6 }}>
            <Sparkles className="h-6 w-6" />
          </motion.div>
        </>
      )}
    </motion.button>
  );
}
export const CardSlot = memo(CardSlotBase);
