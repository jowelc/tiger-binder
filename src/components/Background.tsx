"use client";
import { useEffect, useRef } from "react";

/** Living backdrop: drifting glow orbs, perspective grid, linked particles that flee the cursor, scanline. */
export function Background() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse = { x: -9999, y: -9999 };
    let w = 0, h = 0, raf = 0;
    type P = { x: number; y: number; vx: number; vy: number; gold: boolean };
    let pts: P[] = [];

    const resize = () => {
      w = innerWidth; h = innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + "px"; canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(110, Math.floor((w * h) / 14000));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4, gold: Math.random() > 0.55,
      }));
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      const horizon = h * 0.55;
      const off = (t * 0.00006) % 1;
      ctx.lineWidth = 1;
      for (let i = 0; i < 18; i++) {
        const p = (i + off) / 18;
        const y = horizon + Math.pow(p, 2.2) * (h - horizon);
        ctx.strokeStyle = `rgba(255,138,50,${0.04 + p * 0.14})`;
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }
      ctx.strokeStyle = "rgba(214,166,75,0.10)";
      for (let i = -14; i <= 14; i++) {
        ctx.beginPath(); ctx.moveTo(w / 2 + i * 20, horizon); ctx.lineTo(w / 2 + i * w * 0.09, h); ctx.stroke();
      }
      for (const p of pts) {
        if (!reduce) { p.x += p.vx; p.y += p.vy; }
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
        if (d < 140 && d > 0) { p.x += (dx / d) * 1.2; p.y += (dy / d) * 1.2; }
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
          if (d < 130) {
            ctx.strokeStyle = `rgba(255,170,90,${0.2 * (1 - d / 130)})`;
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke();
          }
        }
        ctx.fillStyle = pts[i].gold ? "rgba(240,205,130,0.85)" : "rgba(255,160,90,0.85)";
        ctx.beginPath(); ctx.arc(pts[i].x, pts[i].y, 1.4, 0, 7); ctx.fill();
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    const move = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    resize();
    addEventListener("resize", resize);
    addEventListener("mousemove", move);
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", resize); removeEventListener("mousemove", move); };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-void" aria-hidden>
      <div className="orb orb-a" /><div className="orb orb-b" /><div className="orb orb-c" />
      <div className="stripes absolute inset-0 opacity-70" />
      <canvas ref={ref} className="absolute inset-0" />
      <div className="scanline" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--c-void)_100%)]" />
    </div>
  );
}
