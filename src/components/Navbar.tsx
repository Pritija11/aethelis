"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { IconClose, IconMenu, IconLogo } from "./icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/approach", label: "Approach" },
  { href: "/fees", label: "Fees" },
  { href: "/security", label: "Security" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-[var(--border)] bg-[var(--bg)]/92 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between py-5">
        <Link href="/" className="flex items-center gap-3">
          <IconLogo className="h-6 w-6 text-[var(--primary)]" />
          <span className="font-[family-name:var(--font-display)] text-lg tracking-tight text-[var(--fg)]">
            Aethelis
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
                  active
                    ? "text-[var(--primary)]"
                    : "text-[var(--fg-muted)] hover:text-[var(--fg)]"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden items-center gap-2 border border-[var(--border-strong)] px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)] md:inline-flex"
        >
          Request an introduction
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="text-[var(--fg)] md:hidden"
        >
          {open ? (
            <IconClose className="h-6 w-6" />
          ) : (
            <IconMenu className="h-6 w-6" />
          )}
        </button>
      </Container>

      {open && (
        <div className="border-t border-[var(--border)] md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`px-1 py-2.5 font-mono text-xs uppercase tracking-[0.12em] transition-colors ${
                    active
                      ? "text-[var(--primary)]"
                      : "text-[var(--fg-muted)] hover:text-[var(--fg)]"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 border border-[var(--border-strong)] px-4 py-3 text-center font-mono text-xs uppercase tracking-[0.12em] text-[var(--fg)]"
            >
              Request an introduction
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
