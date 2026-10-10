const points = [
  [0, 92], [20, 88], [40, 90], [60, 78], [80, 74],
  [100, 68], [120, 60], [140, 55], [160, 44], [180, 38], [200, 24],
];

const path = points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`).join(" ");
const areaPath = `${path} L200,120 L0,120 Z`;

export function PortfolioSummary() {
  return (
    <div className="w-full max-w-md border border-[var(--border)] bg-[var(--surface)]">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-6 py-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--fg-faint)]">
          Total portfolio value
        </span>
        <span className="pill pill-success">+8.4% YTD</span>
      </div>

      <div className="px-6 pt-5">
        <p className="font-[family-name:var(--font-display)] text-4xl text-[var(--fg)]">
          $4,286,910
        </p>
        <p className="mt-1 font-mono text-xs text-[var(--fg-faint)]">
          as of today, across 6 accounts
        </p>
      </div>

      <div className="px-6 pb-2 pt-5">
        <svg viewBox="0 0 200 120" className="w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="portfolioFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={areaPath} fill="url(#portfolioFill)" />
          <path d={path} fill="none" stroke="var(--primary)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="flex items-center justify-between border-t border-[var(--border)] px-6 py-3.5 font-mono text-[11px] text-[var(--fg-faint)]">
        <span>5-year view</span>
        <span className="text-[var(--success)]">benchmark +2.1pp</span>
      </div>
    </div>
  );
}
