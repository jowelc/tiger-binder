"use client";
import { animate, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

export function AnimatedNumber({ value, decimals = 0, suffix = "" }: { value: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const from = useRef(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduce) { el.textContent = value.toFixed(decimals) + suffix; from.current = value; return; }
    const c = animate(from.current, value, {
      duration: 0.9, ease: "easeOut",
      onUpdate: (v) => { el.textContent = v.toFixed(decimals) + suffix; from.current = v; },
    });
    return () => c.stop();
  }, [value, decimals, suffix, reduce]);
  return <span ref={ref}>{(0).toFixed(decimals) + suffix}</span>;
}
