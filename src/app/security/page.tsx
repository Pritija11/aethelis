import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { IntroductionCTA } from "@/components/IntroductionCTA";
import { StatementVault } from "@/components/mocks/StatementVault";
import {
  IconLock,
  IconShieldCheck,
  IconUser,
  IconFileText,
  IconGlobe,
  IconCheck,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Security",
  description:
    "How Aethelis protects client assets and data — custody, encryption, access controls, and regulatory oversight.",
  alternates: {
    canonical: "/security",
  },
};

const safeguards = [
  {
    icon: IconLock,
    title: "Assets held at independent custody",
    description:
      "Aethelis never takes direct custody of client assets. Holdings sit with an independent, regulated custodian — we can direct trades, but we cannot withdraw your funds.",
  },
  {
    icon: IconShieldCheck,
    title: "Encrypted in transit and at rest",
    description:
      "Portfolio data, statements, and documents in your vault are encrypted end to end, both while moving between systems and while stored.",
  },
  {
    icon: IconUser,
    title: "Individual access, individually logged",
    description:
      "Every login and every document view is tied to a specific person and recorded. No shared logins, no anonymous access to your relationship.",
  },
  {
    icon: IconFileText,
    title: "Independent annual review",
    description:
      "Our controls are reviewed by an outside firm annually, not just audited internally. Findings are addressed before the next review cycle begins.",
  },
];

const dataPoints = [
  "Assets held at independent custody",
  "Two-factor authentication required on every account",
  "Full audit log on every document and statement access",
  "Advisors can view your portfolio, never move funds directly",
];

const faqs = [
  {
    q: "Can an Aethelis advisor withdraw money from my accounts?",
    a: "No. Advisors can recommend and, with your authorization, direct trades — they cannot initiate a withdrawal to an outside account. That control sits with the custodian and requires your separate authorization.",
  },
  {
    q: "What happens to my data if I leave Aethelis?",
    a: "You can request a full export of your documents and portfolio history at any time. Once an account is closed, data is retained only as long as legally required, then deleted.",
  },
  {
    q: "Who actually holds my investments?",
    a: "An independent, regulated custodian — not Aethelis directly. This separation is standard practice in wealth management and exists specifically so an advisory firm can never directly access client funds.",
  },
  {
    q: "Is my data ever shared with third parties?",
    a: "Only with the professionals you explicitly authorize — your attorney or accountant, for example — and with the custodian and processors required to run the service. Never sold, never used for marketing.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>Security</Eyebrow>
            <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-display)] text-4xl tracking-tight text-[var(--fg)] md:text-5xl">
              Discretion is the product, not a feature.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              Trust with your wealth starts with how carefully it&apos;s
              protected. Here is exactly how custody, access, and data are
              handled — not a vague assurance, the actual mechanics.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {safeguards.map((s, i) => (
              <Reveal key={s.title} delay={i * 50}>
                <div className="h-full border border-[var(--border)] bg-[var(--surface)] p-7">
                  <s.icon className="h-5 w-5 text-[var(--primary)]" />
                  <h2 className="mt-4 font-[family-name:var(--font-display)] text-xl tracking-tight text-[var(--fg)]">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[var(--fg-muted)]">
                    {s.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>At a glance</Eyebrow>
            <h2 className="mt-5 max-w-sm font-[family-name:var(--font-display)] text-3xl tracking-tight text-[var(--fg)]">
              What that means in practice
            </h2>
            <ul className="mt-6 flex flex-col gap-3">
              {dataPoints.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <IconCheck className="mt-0.5 h-4 w-4 flex-none text-[var(--primary)]" />
                  <span className="text-sm leading-6 text-[var(--fg-muted)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80} className="flex justify-center">
            <StatementVault />
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container className="flex flex-col items-center text-center">
          <Reveal>
            <IconGlobe className="mx-auto h-6 w-6 text-[var(--primary)]" />
            <h2 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-2xl tracking-tight text-[var(--fg)] md:text-3xl">
              Regulated, reviewed, and accountable to an outside standard
              — not just our own.
            </h2>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>Security questions</Eyebrow>
            <h2 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-3xl tracking-tight text-[var(--fg)] md:text-4xl">
              Before you share anything with us
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
        title="Have a specific security question?"
        description="Ask us directly — we'd rather answer it before you're a client than after."
        buttonLabel="Request an introduction"
        buttonHref="/contact"
      />
    </>
  );
}
