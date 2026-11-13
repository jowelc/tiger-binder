export function TigerEye({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <defs>
        <linearGradient id="te" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FF8A32" /><stop offset="1" stopColor="#D6A64B" />
        </linearGradient>
      </defs>
      <path d="M2 24C10 10 38 10 46 24C38 38 10 38 2 24Z" fill="none" stroke="url(#te)" strokeWidth="2.2" />
      <ellipse cx="24" cy="24" rx="5" ry="11" fill="url(#te)" />
      <ellipse cx="24" cy="24" rx="1.6" ry="9" fill="#08090D" />
      <path d="M6 8l6 5M42 8l-6 5M4 40l7-4M44 40l-7-4" stroke="#FF8A32" strokeWidth="2" strokeLinecap="round" opacity=".7" />
    </svg>
  );
}

export function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  const lg = size === "lg";
  return (
    <div className="flex items-center gap-3">
      <TigerEye className={lg ? "h-14 w-14" : "h-9 w-9"} />
      <div className="leading-none">
        <div className={`text-tiger font-black ${lg ? "text-4xl" : "text-xl"}`} style={{ fontFamily: "var(--font-kr)" }}>호랑이</div>
        <div className={`font-display font-bold tracking-[0.35em] text-silver ${lg ? "mt-2 text-sm" : "mt-1 text-[10px]"}`}>TIGER BINDER</div>
      </div>
    </div>
  );
}
