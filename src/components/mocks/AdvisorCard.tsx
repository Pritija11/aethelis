import Image from "next/image";
import { IconMail, IconPhone, IconCalendar } from "../icons";

export function AdvisorCard() {
  return (
    <div className="w-full max-w-md border border-[var(--border)] bg-[var(--surface)]">
      <div className="border-b border-[var(--border)] px-6 py-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--fg-faint)]">
          Your advisor
        </span>
      </div>

      <div className="flex items-center gap-4 px-6 py-5">
        <Image
          src="/1.jpeg"
          alt="Senior Wealth Advisor"
          width={56}
          height={56}
          className="h-14 w-14 flex-none rounded-full object-cover"
        />
        <div>
          <p className="font-[family-name:var(--font-display)] text-lg text-[var(--fg)]">
            Senior Wealth Advisor
          </p>
          <p className="mt-0.5 text-sm text-[var(--fg-muted)]">
            Chartered Financial Analyst (CFA)
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-[var(--border)] px-6 py-4">
        <div className="flex items-center gap-2.5 text-sm text-[var(--fg-muted)]">
          <IconMail className="h-4 w-4 flex-none text-[var(--fg-faint)]" />
          advisor@aethelis.ltd
        </div>
        <div className="flex items-center gap-2.5 text-sm text-[var(--fg-muted)]">
          <IconPhone className="h-4 w-4 flex-none text-[var(--fg-faint)]" />
          Direct line on request
        </div>
        <div className="flex items-center gap-2.5 text-sm text-[var(--fg-muted)]">
          <IconCalendar className="h-4 w-4 flex-none text-[var(--fg-faint)]" />
          Next review — Nov 14, 2026
        </div>
      </div>
    </div>
  );
}
