import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern the advisory relationship and digital platform provided by Aethelis.",
  alternates: {
    canonical: "/terms",
  },
};

const sections = [
  {
    heading: "1. The advisory relationship",
    body: [
      "These terms describe the general relationship between Aethelis and prospective or current clients. The specific terms of any advisory engagement are set out in a separate advisory agreement signed before any assets are managed.",
    ],
  },
  {
    heading: "2. No advice before engagement",
    body: [
      "Nothing on this website constitutes personalized investment, tax, or legal advice. Introductory conversations are informational; formal advice begins only once an advisory agreement is in place.",
    ],
  },
  {
    heading: "3. Custody of assets",
    body: [
      "Aethelis does not take custody of client assets. Holdings are maintained with an independent, regulated custodian under a separate custodial agreement between you and that custodian.",
    ],
  },
  {
    heading: "4. Fees",
    body: [
      "Advisory fees are charged according to the published schedule on our Fees page, as confirmed in your individual advisory agreement. Fees are billed quarterly in arrears unless otherwise agreed.",
    ],
  },
  {
    heading: "5. Platform access",
    body: [
      "Access to the client portfolio portal and document vault is provided as part of an active advisory relationship. Credentials are personal and may not be shared.",
    ],
  },
  {
    heading: "6. Limitation of liability",
    body: [
      "Investment involves risk, including the potential loss of principal. Aethelis does not guarantee investment performance. To the extent permitted by law, liability for indirect or consequential damages is limited as set out in your advisory agreement.",
    ],
  },
  {
    heading: "7. Termination",
    body: [
      "Either party may terminate the advisory relationship as described in the advisory agreement. Access to historical statements and documents remains available for a reasonable transition period after termination.",
    ],
  },
  {
    heading: "8. Governing law",
    body: [
      "These terms are governed by the laws of Nepal. Any dispute arising from use of this website or the advisory relationship will be handled in the courts of Kathmandu, Nepal, except as otherwise specified in an individual advisory agreement.",
    ],
  },
  {
    heading: "9. Changes to these terms",
    body: [
      "If we make a material change to these terms, we'll notify active clients by email before the change takes effect.",
    ],
  },
  {
    heading: "10. Contact",
    body: [
      "Questions about these terms can be sent to hello@aethelis.ltd, or by post to Naxal, Kathmandu 44600, Nepal.",
    ],
  },
];

export default function TermsPage() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <Reveal>
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-6 max-w-xl font-[family-name:var(--font-display)] text-4xl tracking-tight text-[var(--fg)] md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
            The terms that govern use of the Aethelis website and the
            advisory relationship it introduces.
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
