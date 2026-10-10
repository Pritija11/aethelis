import { IconFileText } from "../icons";

const documents = [
  { name: "Q3 Portfolio Review", type: "Statement", date: "Oct 1, 2026" },
  { name: "Annual Tax Summary 2025", type: "Tax", date: "Apr 12, 2026" },
  { name: "Trust Amendment — Draft", type: "Estate", date: "Mar 28, 2026" },
  { name: "Capital Call Notice", type: "Private markets", date: "Mar 3, 2026" },
];

export function StatementVault() {
  return (
    <div className="w-full max-w-md border border-[var(--border)] bg-[var(--surface)]">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-6 py-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--fg-faint)]">
          Document vault
        </span>
        <span className="pill pill-neutral">Encrypted</span>
      </div>
      <div className="flex flex-col">
        {documents.map((d) => (
          <div
            key={d.name}
            className="flex items-center gap-3.5 border-b border-[var(--border)] px-6 py-3.5 last:border-b-0"
          >
            <IconFileText className="h-4 w-4 flex-none text-[var(--primary)]" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm text-[var(--fg)]">{d.name}</p>
              <p className="mt-0.5 font-mono text-[11px] text-[var(--fg-faint)]">
                {d.type}
              </p>
            </div>
            <span className="flex-none font-mono text-[11px] text-[var(--fg-faint)]">
              {d.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
