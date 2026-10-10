import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { IntroductionCTA } from "@/components/IntroductionCTA";
import { IconCheck } from "@/components/icons";

export const metadata: Metadata = {
  title: "Fees",
  description:
    "Aethelis publishes a single, transparent fee schedule based on assets under advisement — no commissions, no proprietary fund incentives.",
  alternates: {
    canonical: "/fees",
  },
};

const tiers = [
  { range: "First $1,000,000", rate: "0.90%" },
  { range: "$1,000,000 – $5,000,000", rate: "0.70%" },
  { range: "$5,000,000 – $15,000,000", rate: "0.55%" },
  { range: "Above $15,000,000", rate: "By arrangement" },
];

const included = [
  "A dedicated, named advisor",
  "Investment management across all accounts",
  "Estate and trust coordination with outside counsel",
  "Annual tax strategy review",
  "Quarterly standing portfolio reviews",
  "Consolidated digital portfolio and document vault access",
];

const notIncluded = [
  "Commissions on any investment product",
  "Proprietary fund management fees",
  "Charges for additional advisor meetings",
  "Fees for adding family members to the relationship",
];

const faqs = [
  {
    q: "Is this fee charged on top of fund expense ratios?",
    a: "Underlying fund expense ratios, where applicable, are separate and disclosed individually — we select low-cost vehicles by default and will always show you the all-in cost before you commit to anything.",
  },
  {
    q: "How is the fee billed?",
    a: "Quarterly, in arrears, deducted directly from the account unless you request an invoice instead. You'll always see the exact calculation before it's charged.",
  },
  {
    q: "Does the rate apply to the whole relationship or per account?",
    a: "Per relationship — assets across all your accounts with us are combined to determine your tier, so consolidating accounts with Aethelis can lower your effective rate.",
  },
  {
    q: "What happens below $1,000,000?",
    a: "We occasionally take on relationships below our typical minimum for younger professionals with a clear trajectory. Reach out and we'll have a direct conversation about fit and fees.",
  },
];

export default function FeesPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>Fees</Eyebrow>
            <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-display)] text-4xl tracking-tight text-[var(--fg)] md:text-5xl">
              One published rate. No hidden layers.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              Aethelis charges a single, transparent percentage of assets
              under advisement. No commissions, no proprietary fund
              incentives, and nothing you have to find in a footnote.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-14 max-w-2xl border border-[var(--border)]">
              <div className="border-b border-[var(--border)] px-7 py-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--fg-faint)]">
                  Annual fee schedule
                </span>
              </div>
              <div className="flex flex-col">
                {tiers.map((t) => (
                  <div
                    key={t.range}
                    className="flex items-center justify-between border-b border-[var(--border)] px-7 py-5 last:border-b-0"
                  >
                    <span className="text-sm text-[var(--fg)]">
                      {t.range}
                    </span>
                    <span className="font-[family-name:var(--font-display)] text-xl text-[var(--primary)]">
                      {t.rate}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>What&apos;s included</Eyebrow>
            <h2 className="mt-5 max-w-sm font-[family-name:var(--font-display)] text-2xl tracking-tight text-[var(--fg)]">
              Every tier, every relationship
            </h2>
            <ul className="mt-6 flex flex-col gap-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <IconCheck className="mt-0.5 h-4 w-4 flex-none text-[var(--primary)]" />
                  <span className="text-sm leading-6 text-[var(--fg-muted)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80}>
            <Eyebrow>What we never charge for</Eyebrow>
            <h2 className="mt-5 max-w-sm font-[family-name:var(--font-display)] text-2xl tracking-tight text-[var(--fg)]">
              No surprise line items
            </h2>
            <ul className="mt-6 flex flex-col gap-3">
              {notIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 flex-none rounded-full bg-[var(--fg-faint)]" />
                  <span className="text-sm leading-6 text-[var(--fg-muted)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>Billing questions</Eyebrow>
            <h2 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-3xl tracking-tight text-[var(--fg)] md:text-4xl">
              Before your first statement
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
        title="Not sure which tier fits your situation?"
        description="Tell us roughly where you stand and we'll walk through the numbers directly, before any commitment."
        buttonLabel="Request an introduction"
        buttonHref="/contact"
      />
    </>
  );
}
