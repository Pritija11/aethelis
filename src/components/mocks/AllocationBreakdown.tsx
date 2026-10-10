const allocation = [
  { label: "Public equities", value: 42, color: "var(--primary)" },
  { label: "Fixed income", value: 24, color: "var(--accent-steel)" },
  { label: "Real assets", value: 16, color: "var(--accent-sage)" },
  { label: "Private markets", value: 12, color: "var(--accent-bronze)" },
  { label: "Cash & equivalents", value: 6, color: "var(--accent-wine)" },
];

export function AllocationBreakdown() {
  return (
    <div className="w-full max-w-md border border-[var(--border)] bg-[var(--surface)]">
      <div className="border-b border-[var(--border)] px-6 py-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--fg-faint)]">
          Asset allocation
        </span>
      </div>

      <div className="px-6 pt-5">
        <div className="flex h-2.5 w-full overflow-hidden">
          {allocation.map((a) => (
            <div
              key={a.label}
              style={{ width: `${a.value}%`, background: a.color }}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 px-6 py-5">
        {allocation.map((a) => (
          <div key={a.label} className="flex items-center justify-between">
            <span className="flex items-center gap-2.5 text-sm text-[var(--fg-muted)]">
              <span
                className="h-2 w-2 flex-none rounded-full"
                style={{ background: a.color }}
              />
              {a.label}
            </span>
            <span className="font-mono text-xs text-[var(--fg)]">
              {a.value}%
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-[var(--border)] px-6 py-3 font-mono text-[11px] text-[var(--fg-faint)]">
        Rebalanced quarterly, reviewed with your advisor
      </div>
    </div>
  );
}
