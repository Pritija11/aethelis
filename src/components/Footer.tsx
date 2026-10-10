import Link from "next/link";
import { Container } from "./Container";
import { IconLogo, IconMail, IconPhone, IconMapPin } from "./icons";

const serviceLinks = [
  "Investment Management",
  "Estate Planning",
  "Tax Strategy",
  "Family Office Services",
];

const YEAR = 2026;

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-alt)] text-[var(--fg-muted)]">
      <Container className="grid grid-cols-1 gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <IconLogo className="h-5 w-5 text-[var(--primary)]" />
            <span className="font-[family-name:var(--font-display)] text-base text-[var(--fg)]">
              Aethelis
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6">
            A private wealth management firm built for families who expect
            a dedicated advisor and the software to match.
          </p>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-faint)]">
            Navigate
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li>
              <Link href="/" className="hover:text-[var(--fg)]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/approach" className="hover:text-[var(--fg)]">
                Approach
              </Link>
            </li>
            <li>
              <Link href="/fees" className="hover:text-[var(--fg)]">
                Fees
              </Link>
            </li>
            <li>
              <Link href="/security" className="hover:text-[var(--fg)]">
                Security
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[var(--fg)]">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[var(--fg)]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-faint)]">
            Services
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {serviceLinks.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-faint)]">
            Contact
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li className="flex items-center gap-2.5">
              <IconMail className="h-4 w-4 flex-none" />
              <a
                href="mailto:hello@aethelis.ltd"
                className="hover:text-[var(--fg)]"
              >
                hello@aethelis.ltd
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <IconPhone className="h-4 w-4 flex-none" />
              <a href="tel:+9779861023457" className="hover:text-[var(--fg)]">
                +977 986-1023457
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <IconMapPin className="mt-0.5 h-4 w-4 flex-none" />
              <span>Naxal, Kathmandu 44600, Nepal</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-[var(--border)]">
        <Container className="flex flex-col gap-4 py-6 font-mono text-[11px] text-[var(--fg-faint)] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {YEAR} Aethelis. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-[var(--fg)]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[var(--fg)]">
              Terms of Service
            </Link>
            <p className="hidden sm:block">
              Private wealth management, built from Kathmandu.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
