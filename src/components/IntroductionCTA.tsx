import Link from "next/link";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function IntroductionCTA({
  title,
  description,
  buttonLabel,
  buttonHref,
}: {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}) {
  return (
    <section className="border-t border-[var(--border)] py-24 md:py-28">
      <Container className="flex justify-center">
        <Reveal>
          <div className="relative max-w-xl px-10 py-16 text-center sm:px-16">
            <div className="absolute inset-0 border border-[var(--border-strong)]" aria-hidden />
            <div className="absolute inset-3 border border-[var(--border)]" aria-hidden />

            <div className="relative">
              <span className="gold-rule mx-auto" />
              <h2 className="mt-6 font-[family-name:var(--font-display)] text-3xl tracking-tight text-[var(--fg)] md:text-4xl">
                {title}
              </h2>
              <p className="mx-auto mt-5 max-w-sm text-sm leading-6 text-[var(--fg-muted)]">
                {description}
              </p>
              <Link
                href={buttonHref}
                className="mt-9 inline-flex items-center gap-2.5 border border-[var(--primary)] px-7 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--primary)] transition-colors hover:bg-[var(--primary)] hover:text-[var(--on-primary)]"
              >
                {buttonLabel}
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
