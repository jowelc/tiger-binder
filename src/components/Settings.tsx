"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { X, Download, Upload, Trash2, AlertTriangle } from "lucide-react";
import { useStore } from "@/lib/store";
import { MANIFEST_NOTES } from "@/data/cards";

export function Settings({ onClose }: { onClose: () => void }) {
  const { exportJson, importJson, resetAll } = useStore();
  const fileRef = useRef<HTMLInputElement>(null);
  const [msg, setMsg] = useState("");
  const [confirmReset, setConfirmReset] = useState(false);

  const doExport = () => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([exportJson()], { type: "application/json" }));
    a.download = `tiger-binder-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
    setMsg("Exported.");
  };
  const btn = "flex w-full items-center gap-3 rounded-xl border border-line bg-void/60 px-4 py-3 text-left text-sm font-semibold transition hover:border-ember/50";
  return (
    <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} />
      <motion.div initial={{ scale: 0.92, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0 }} className="glass relative max-h-[90vh] w-full max-w-lg space-y-3 overflow-y-auto rounded-2xl border-ember/30 p-5 sm:p-6">
        <button onClick={onClose} aria-label="Close settings" className="absolute right-4 top-4 text-muted hover:text-white"><X className="h-5 w-5" /></button>
        <h2 className="font-display text-lg font-bold tracking-widest text-tiger">SETTINGS · DATA</h2>
        <button className={btn} onClick={doExport}><Download className="h-4 w-4 text-ember" /> Export collection (JSON)</button>
        <button className={btn} onClick={() => fileRef.current?.click()}><Upload className="h-4 w-4 text-gold" /> Import collection (JSON)</button>
        <input ref={fileRef} type="file" accept="application/json" hidden onChange={async (e) => {
          const f = e.target.files?.[0]; if (!f) return;
          setMsg(importJson(await f.text()).message); e.target.value = "";
        }} />
        {!confirmReset ? (
          <button className={`${btn} hover:!border-red-500/60`} onClick={() => setConfirmReset(true)}><Trash2 className="h-4 w-4 text-red-400" /> Reset collection…</button>
        ) : (
          <div className="rounded-xl border border-red-500/50 bg-red-500/10 p-4">
            <p className="mb-3 flex items-center gap-2 text-sm text-red-300"><AlertTriangle className="h-4 w-4" /> This erases every owned card, note and image. Export first!</p>
            <div className="flex gap-2">
              <button onClick={() => { resetAll(); setConfirmReset(false); setMsg("Collection reset."); }} className="flex-1 rounded-lg bg-red-600 py-2 text-sm font-bold">Yes, erase everything</button>
              <button onClick={() => setConfirmReset(false)} className="flex-1 rounded-lg border border-line py-2 text-sm">Cancel</button>
            </div>
          </div>
        )}
        {msg && <p className="text-sm text-gold" role="status">{msg}</p>}
        <div className="border-t border-line pt-4">
          <h3 className="mb-2 text-[11px] tracking-[0.3em] text-muted">CATALOG VALIDATION NOTES</h3>
          <ul className="list-disc space-y-1.5 pl-5 text-xs text-silver/80">{MANIFEST_NOTES.map((n) => <li key={n}>{n}</li>)}</ul>
        </div>
      </motion.div>
    </motion.div>
  );
}
