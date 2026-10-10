import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { IntroductionCTA } from "@/components/IntroductionCTA";
import { PortfolioSummary } from "@/components/mocks/PortfolioSummary";
import { AllocationBreakdown } from "@/components/mocks/AllocationBreakdown";
import { AdvisorCard } from "@/components/mocks/AdvisorCard";
import { StatementVault } from "@/components/mocks/StatementVault";
import {
  IconArrowRight,
  IconTrendingUp,
  IconScale,
  IconHandshake,
  IconCheck,
} from "@/components/icons";

const stats = [
  { value: "$340M+", label: "Assets under advisement" },
  { value: "48", label: "Client families" },
  { value: "1:12", label: "Client families per advisor" },
];

const services = [
  {
    icon: IconTrendingUp,
    title: "Investment Management",
    description:
      "A portfolio built around your actual goals and time horizon, reviewed quarterly with your advisor — not a model portfolio assigned by an algorithm.",
    mock: <PortfolioSummary />,
  },
  {
    icon: IconScale,
    title: "Estate Planning",
    description:
      "Trusts, succession, and transfer strategy coordinated with your attorney and accountant, so your plan is consistent across every document that touches it.",
    mock: <AllocationBreakdown />,
  },
  {
    icon: IconHandshake,
    title: "Family Office Services",
    description:
      "One advisor who knows the whole picture — accounts, entities, and the people involved — instead of a different relationship manager for each piece.",
    mock: <AdvisorCard />,
  },
];

const principles = [
  "A dedicated advisor, not a rotating support queue",
  "Every fee disclosed up front, nothing buried in a prospectus",
  "Full portfolio transparency — see what you hold and why",
  "Advice built around your goals, not products we're paid to sell",
];

const testimonialQuote =
  "I'd spent a decade with a private bank that never once explained what I was actually paying for. Aethelis sent me a fee breakdown before I'd even signed anything.";

const faqs = [
  {
    q: "What's the minimum to work with Aethelis?",
    a: "Our advisory relationships typically begin at $500,000 in investable assets, though we make exceptions for younger professionals with a clear trajectory. Reach out and we'll have a direct conversation about fit.",
  },
  {
    q: "Do I get a dedicated advisor, or a call center?",
    a: "A dedicated advisor, by name, with direct contact details. You will never be routed through a general support queue for a portfolio question.",
  },
  {
    q: "How is Aethelis different from a robo-advisor?",
    a: "A robo-advisor optimizes a model portfolio. We build a strategy around your specific goals, tax situation, and family circumstances, with a human advisor accountable for the outcome — the software exists to make that advisor better informed, not to replace them.",
  },
  {
    q: "How are fees structured?",
    a: "A simple, published percentage of assets under advisement, with no commissions, no proprietary fund incentives, and no hidden layers. The full schedule is on our Fees page.",
  },
  {
    q: "Is Aethelis a new company?",
    a: "Yes — we're an early-stage private wealth management startup based in Kathmandu, Nepal. We're deliberately keeping our first group of client families small so every relationship gets real attention.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="ledger-field" aria-hidden />
        <div className="vault-glow" aria-hidden />
        <Container className="relative z-10 py-20 md:py-28">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <Eyebrow>Private Wealth Management</Eyebrow>
              <h1 className="mt-7 max-w-lg font-[family-name:var(--font-display)] text-5xl font-medium leading-[1.12] tracking-tight text-[var(--fg)] md:text-6xl">
                Your wealth, overseen by one advisor who actually knows you.
              </h1>
              <p className="mt-7 max-w-md text-base leading-7 text-[var(--fg-muted)]">
                Aethelis pairs a dedicated advisor with a consolidated view
                of your entire portfolio — investments, estate, and tax
                strategy, in one place, reviewed together rather than
                managed in separate silos.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-7">
                <Button href="/contact">Request an introduction</Button>
                <Link
                  href="/approach"
                  className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-muted)] hover:text-[var(--fg)]"
                >
                  See our approach
                  <IconArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="mt-16 grid grid-cols-3 gap-8 border-t border-[var(--border)] pt-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-[family-name:var(--font-display)] text-2xl text-[var(--fg)]">
                      {s.value}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[var(--fg-muted)]">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <PortfolioSummary />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-24 md:py-28">
        <Container className="flex flex-col gap-24">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <s.icon className="h-6 w-6 text-[var(--primary)]" />
                  <h2 className="mt-5 max-w-sm font-[family-name:var(--font-display)] text-3xl tracking-tight text-[var(--fg)]">
                    {s.title}
                  </h2>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--fg-muted)]">
                    {s.description}
                  </p>
                </div>
                <div
                  className={`flex justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  {s.mock}
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* Principles */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>What we believe</Eyebrow>
            <h2 className="mt-5 max-w-md font-[family-name:var(--font-display)] text-3xl tracking-tight text-[var(--fg)] md:text-4xl">
              Advice that answers to you, not a product shelf
            </h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-[var(--fg-muted)]">
              Most wealth management firms are paid, in part, by the
              products they recommend. We aren&apos;t. Our advisors are
              compensated the same way regardless of which fund, trust
              structure, or strategy ends up being right for you.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <ul className="flex flex-col gap-4">
              {principles.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 border border-[var(--border)] bg-[var(--surface)] p-4"
                >
                  <IconCheck className="mt-0.5 h-4 w-4 flex-none text-[var(--primary)]" />
                  <span className="text-sm leading-6 text-[var(--fg-muted)]">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Document vault feature */}
      <section className="py-24">
        <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Everything in one vault</Eyebrow>
            <h2 className="mt-5 max-w-sm font-[family-name:var(--font-display)] text-3xl tracking-tight text-[var(--fg)]">
              Every statement, trust document, and tax form — in one place
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--fg-muted)]">
              No more chasing down a PDF from three different
              institutions. Every document tied to your relationship is
              encrypted, organized, and available the moment you need it.
            </p>
          </Reveal>
          <Reveal delay={80} className="flex justify-center">
            <StatementVault />
          </Reveal>
        </Container>
      </section>

      {/* Testimonial */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container>
          <Reveal>
            <p className="mx-auto max-w-2xl text-center font-[family-name:var(--font-display)] text-2xl italic leading-[1.5] tracking-tight text-[var(--fg)] md:text-3xl">
              &ldquo;{testimonialQuote}&rdquo;
            </p>
            <div className="mt-7 flex items-center justify-center gap-3">
              <Image
                src="/2.jpeg"
                alt="Client since 2025"
                width={40}
                height={40}
                className="h-10 w-10 flex-none rounded-full object-cover"
              />
              <div className="text-left">
                <p className="text-sm text-[var(--fg)]">
                  Client since 2025
                </p>
                <p className="font-mono text-[11px] text-[var(--fg-faint)]">
                  Kathmandu, Nepal
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Fees teaser */}
      <section className="py-24">
        <Container className="flex flex-col items-center text-center">
          <Reveal>
            <Eyebrow>Fees</Eyebrow>
            <h2 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-3xl tracking-tight text-[var(--fg)] md:text-4xl">
              One published rate. No hidden layers.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[var(--fg-muted)]">
              A single, transparent percentage of assets under advisement
              — no commissions, no proprietary fund incentives.
            </p>
            <Link
              href="/fees"
              className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--primary)] hover:underline"
            >
              See the fee schedule
              <IconArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container>
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-3xl tracking-tight text-[var(--fg)] md:text-4xl">
              Before your first conversation
            </h2>
          </Reveal>

          <div className="mt-12 flex flex-col divide-y divide-[var(--border)]">
            {faqs.map((item, i) => (
              <Reveal key={item.q} delay={i * 50}>
                <details className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base text-[var(--fg)]">
                    {item.q}
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-[var(--border-strong)] font-mono text-sm text-[var(--fg-faint)] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--fg-muted)]">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <IntroductionCTA
        title="Let's start with a conversation, not a sales pitch."
        description="Tell us about your situation and we'll have an advisor reach out directly — no obligation, no automated follow-up sequence."
        buttonLabel="Request an introduction"
        buttonHref="/contact"
      />
    </>
  );
}
