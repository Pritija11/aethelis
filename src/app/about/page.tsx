import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { IntroductionCTA } from "@/components/IntroductionCTA";
import { IconMapPin, IconUsers, IconScale } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Aethelis is an early-stage private wealth management startup based in Kathmandu, Nepal, built around one dedicated advisor per family.",
  alternates: {
    canonical: "/about",
  },
};

const quickFacts = [
  { icon: IconMapPin, label: "Based in Kathmandu" },
  { icon: IconUsers, label: "Small founding team" },
  { icon: IconScale, label: "Founded 2025" },
];

const principles = [
  {
    title: "One advisor, the whole picture",
    description:
      "Splitting a relationship across specialists means nobody is accountable for how the pieces fit together. We built Aethelis around the opposite idea.",
  },
  {
    title: "Say the fee before the pitch",
    description:
      "If a fee only makes sense once you're already invested, it isn't a fee worth charging. Ours is published before the first real conversation.",
  },
  {
    title: "Software that serves the advisor",
    description:
      "The platform exists so your advisor walks into every conversation already knowing your full position — not so you're left managing a dashboard alone.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>About Aethelis</Eyebrow>
            <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-display)] text-4xl leading-[1.15] tracking-tight text-[var(--fg)] md:text-5xl">
              We built the firm we wished existed for our own families.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[var(--fg-muted)]">
              Aethelis is an early-stage private wealth management startup
              based in Kathmandu, Nepal, built around a simple idea: one
              dedicated advisor, fully informed, accountable for the
              whole relationship.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-[var(--border)] pt-8">
              {quickFacts.map((f) => (
                <div key={f.label} className="flex items-center gap-2.5">
                  <f.icon className="h-4 w-4 flex-none text-[var(--fg-faint)]" />
                  <span className="text-sm text-[var(--fg-muted)]">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Founder's letter */}
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container className="flex justify-center">
          <Reveal>
            <div className="max-w-xl border border-[var(--border)] bg-[var(--surface)] px-9 py-12 sm:px-14">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-faint)]">
                A letter from our founder
              </p>

              <div className="mt-7 flex flex-col gap-5 font-[family-name:var(--font-display)] text-[17px] leading-[1.8] text-[var(--fg-muted)]">
                <p>
                  <span className="float-left mr-2 mt-1 font-[family-name:var(--font-display)] text-5xl leading-[0.8] text-[var(--primary)]">
                    I
                  </span>
                  spent the better part of a decade on the other side of
                  this industry, watching clients get handed off between
                  specialists who rarely spoke to each other. An
                  investment advisor who didn&apos;t know about the trust
                  restructuring. An estate attorney working from a tax
                  assumption that was two years out of date. Nobody lying,
                  exactly — just nobody accountable for the whole picture.
                </p>
                <p>
                  Aethelis exists because that gap is fixable. One advisor,
                  fully informed, with software built to keep them that
                  way — not a committee, not a rotating point of contact,
                  not a dashboard you&apos;re left to interpret alone.
                </p>
                <p>
                  We are a small team, deliberately. Every family we work
                  with is one our advisors actually know.
                </p>
              </div>

              <p className="mt-8 font-[family-name:var(--font-display)] text-lg italic text-[var(--fg)]">
                Founder &amp; Managing Partner
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Principles */}
      <section className="bg-[var(--bg-alt)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>How we think</Eyebrow>
            <h2 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-3xl tracking-tight text-[var(--fg)] md:text-4xl">
              Principles we build with
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <div className="h-full border border-[var(--border)] bg-[var(--surface)] p-7">
                  <h3 className="font-[family-name:var(--font-display)] text-lg tracking-tight text-[var(--fg)]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--fg-muted)]">
                    {p.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <IntroductionCTA
        title="Want to be one of our first client families?"
        description="We're working closely with a small group of early relationships. Tell us about yours."
        buttonLabel="Request an introduction"
        buttonHref="/contact"
      />
    </>
  );
}
