import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Aethelis collects, uses, and protects data for clients of our private wealth management advisory.",
  alternates: {
    canonical: "/privacy",
  },
};

const sections = [
  {
    heading: "1. What we collect",
    body: [
      "When you request an introduction, we collect your name, contact details, and the information you choose to share about your financial situation.",
      "Once you become a client, we collect the account, holdings, and transaction data required to provide advisory services — sourced from the independent custodian holding your assets, not collected directly by us outside that relationship.",
      "Like most web services, our site logs IP addresses and request metadata for security and abuse prevention.",
    ],
  },
  {
    heading: "2. How we use it",
    body: [
      "Information is used to provide advisory services, prepare your portfolio reviews, and meet our regulatory recordkeeping obligations.",
      "We do not use client financial information for marketing, and we do not sell or share it with unrelated third parties.",
    ],
  },
  {
    heading: "3. Who we share it with",
    body: [
      "Only the custodian holding your assets, and professionals you explicitly authorize — such as your attorney or accountant. We may also share information when legally required to by a regulator or court order.",
    ],
  },
  {
    heading: "4. Data retention",
    body: [
      "Client records are retained for the duration of the relationship plus the period required by applicable financial recordkeeping regulations, after which they are securely deleted.",
    ],
  },
  {
    heading: "5. Your rights",
    body: [
      "You can request a copy of the personal data we hold, ask us to correct it, or request deletion of your data once it's no longer subject to a regulatory retention requirement. Reach out through the contact details below.",
    ],
  },
  {
    heading: "6. Changes to this policy",
    body: [
      "If this policy changes in a way that materially affects how we handle your data, we'll notify active clients directly before the change takes effect.",
    ],
  },
  {
    heading: "7. Contact",
    body: [
      "Questions about this policy can be sent to hello@aethelis.ltd, or by post to Naxal, Kathmandu 44600, Nepal.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <Reveal>
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-6 max-w-xl font-[family-name:var(--font-display)] text-4xl tracking-tight text-[var(--fg)] md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
            This explains what data Aethelis collects, how it&apos;s used,
            and what you can do about it.
          </p>
        </Reveal>

        <div className="mt-16 max-w-2xl">
          {sections.map((section, i) => (
            <Reveal key={section.heading} delay={Math.min(i * 40, 240)}>
              <div className="border-t border-[var(--border)] py-8 first:border-t-0 first:pt-0">
                <h2 className="font-[family-name:var(--font-display)] text-xl tracking-tight text-[var(--fg)]">
                  {section.heading}
                </h2>
                <div className="mt-4 flex flex-col gap-3">
                  {section.body.map((p) => (
                    <p
                      key={p}
                      className="text-sm leading-7 text-[var(--fg-muted)]"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
