import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { IntroductionCTA } from "@/components/IntroductionCTA";
import { PortfolioSummary } from "@/components/mocks/PortfolioSummary";
import { AllocationBreakdown } from "@/components/mocks/AllocationBreakdown";
import { IconCheck, IconClose } from "@/components/icons";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "Discovery, strategy, implementation, and ongoing stewardship — how Aethelis builds and manages a private wealth relationship.",
  alternates: {
    canonical: "/approach",
  },
};

const stages = [
  {
    numeral: "I",
    title: "Discovery",
    description:
      "Before any recommendation, we spend real time understanding your full financial picture — existing accounts, entities, family circumstances, and what you're actually trying to accomplish.",
    bullets: [
      "A full inventory of existing accounts and entities",
      "A direct conversation about goals, not a risk-tolerance quiz",
      "No commitment required to have this conversation",
    ],
  },
  {
    numeral: "II",
    title: "Strategy",
    description:
      "Your advisor builds a plan that spans investment, estate, and tax considerations together — because a decision in one area routinely affects the other two.",
    bullets: [
      "A written strategy you can take to your own attorney or accountant",
      "Coordinated with outside counsel, not built in isolation",
      "Every recommendation tied to a specific goal, not a generic model",
    ],
  },
  {
    numeral: "III",
    title: "Implementation",
    description:
      "Once a strategy is agreed, we execute it — opening accounts, restructuring holdings, and coordinating the legal and tax work required, with you informed at every step.",
    bullets: [
      "Clear timeline for every action item",
      "Your advisor coordinates directly with your other professionals",
      "Nothing moves without your explicit sign-off",
    ],
  },
  {
    numeral: "IV",
    title: "Stewardship",
    description:
      "A plan built once and never revisited isn't a plan. Your advisor reviews the full picture on a set schedule and whenever your circumstances meaningfully change.",
    bullets: [
      "Standing quarterly reviews, not reactive check-ins only",
      "Rebalancing and tax-loss harvesting handled proactively",
      "Direct advisor access between scheduled reviews",
    ],
  },
];

const comparisonRows = [
  { feature: "Named, dedicated advisor", traditional: false, aethelis: true },
  { feature: "Full fee disclosure up front", traditional: false, aethelis: true },
  { feature: "Investment, estate, and tax coordinated together", traditional: false, aethelis: true },
  { feature: "Proprietary fund incentives", traditional: true, aethelis: false },
  { feature: "Consolidated digital portfolio view", traditional: false, aethelis: true },
  { feature: "Quarterly standing reviews", traditional: false, aethelis: true },
];

export default function ApproachPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--border)] py-20 md:py-24">
        <div className="ledger-field" aria-hidden />
        <Container className="relative z-10">
          <Reveal>
            <Eyebrow>Approach</Eyebrow>
            <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-display)] text-4xl tracking-tight text-[var(--fg)] md:text-5xl">
              Four stages. One advisor accountable for all of them.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              A wealth plan only works if the person managing it
              understands the whole picture. Every relationship at
              Aethelis moves through the same four stages, with a single
              advisor responsible from the first conversation onward.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="flex flex-col">
            {stages.map((s, i) => (
              <Reveal key={s.numeral} delay={i * 50}>
                <div className="grid grid-cols-1 gap-6 border-l border-[var(--border-strong)] py-10 pl-10 last:pb-0 md:grid-cols-[3rem_1fr] md:gap-10">
                  <span className="font-[family-name:var(--font-display)] text-2xl text-[var(--primary)]">
                    {s.numeral}
                  </span>
                  <div>
                    <h2 className="font-[family-name:var(--font-display)] text-2xl tracking-tight text-[var(--fg)]">
                      {s.title}
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--fg-muted)]">
                      {s.description}
                    </p>
                    <ul className="mt-5 flex flex-col gap-2">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-baseline gap-2 text-xs text-[var(--fg-muted)]"
                        >
                          <span className="h-1 w-1 flex-none translate-y-[-2px] rounded-full bg-[var(--primary)]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>The difference</Eyebrow>
            <h2 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-3xl tracking-tight text-[var(--fg)] md:text-4xl">
              Traditional wealth management vs. Aethelis
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-12 overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[var(--border-strong)] text-left">
                    <th className="py-3 pr-4 font-normal text-[var(--fg-faint)]" />
                    <th className="py-3 px-4 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--fg-faint)]">
                      Traditional
                    </th>
                    <th className="py-3 pl-4 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--primary)]">
                      Aethelis
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr
                      key={row.feature}
                      className="border-b border-[var(--border)]"
                    >
                      <td className="py-3.5 pr-4 text-[var(--fg)]">
                        {row.feature}
                      </td>
                      <td className="py-3.5 px-4">
                        {row.traditional ? (
                          <IconCheck className="h-4 w-4 text-[var(--fg-muted)]" />
                        ) : (
                          <IconClose className="h-4 w-4 text-[var(--fg-faint)]" />
                        )}
                      </td>
                      <td className="py-3.5 pl-4">
                        {row.aethelis ? (
                          <IconCheck className="h-4 w-4 text-[var(--primary)]" />
                        ) : (
                          <IconClose className="h-4 w-4 text-[var(--fg-faint)]" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Reveal>
            <PortfolioSummary />
          </Reveal>
          <Reveal delay={80}>
            <AllocationBreakdown />
          </Reveal>
        </Container>
      </section>

      <IntroductionCTA
        title="Curious what stage one looks like for you?"
        description="A discovery conversation carries no obligation — it's simply how we learn whether we're a fit for each other."
        buttonLabel="Request an introduction"
        buttonHref="/contact"
      />
    </>
  );
}
