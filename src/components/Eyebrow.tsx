export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="gold-rule" />
      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--primary)]">
        {children}
      </span>
    </div>
  );
}
