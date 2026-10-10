import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { AdvisorCard } from "@/components/mocks/AdvisorCard";
import { IconMail, IconPhone, IconMapPin } from "@/components/icons";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request an introduction to an Aethelis advisor — private wealth management with a dedicated advisor for your family.",
  alternates: {
    canonical: "/contact",
  },
};

const faqs = [
  {
    q: "What happens after I submit this form?",
    a: "An advisor reviews your note personally and reaches out directly, usually within a business day. There's no automated sequence and no sales team in between.",
  },
  {
    q: "Is this conversation obligated to lead anywhere?",
    a: "No. The first conversation exists for both of us to decide whether there's a fit — nothing is signed, and there's no pressure either way.",
  },
  {
    q: "Can I request a specific advisor?",
    a: "If you were referred by someone already working with a particular advisor, mention it in your note and we'll route it accordingly.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="py-20 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-6 max-w-xl font-[family-name:var(--font-display)] text-4xl tracking-tight text-[var(--fg)] md:text-5xl">
              Let&apos;s start with a conversation.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[var(--fg-muted)]">
              Tell us a little about your situation and an advisor will
              reach out directly — no obligation, and no automated
              follow-up sequence.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div className="border border-[var(--border)] bg-[var(--surface)] p-8 md:p-10">
                <ContactForm />
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="flex flex-col gap-6">
                <div className="border border-[var(--border)] bg-[var(--surface)] p-7">
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--fg-faint)]">
                    Reach us directly
                  </p>
                  <div className="mt-5 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <IconMail className="h-4 w-4 flex-none text-[var(--primary)]" />
                      <a
                        href="mailto:hello@aethelis.ltd"
                        className="text-sm text-[var(--fg)] hover:text-[var(--primary)]"
                      >
                        hello@aethelis.ltd
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <IconPhone className="h-4 w-4 flex-none text-[var(--primary)]" />
                      <a
                        href="tel:+9779861023457"
                        className="text-sm text-[var(--fg)] hover:text-[var(--primary)]"
                      >
                        +977 986-1023457
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <IconMapPin className="mt-0.5 h-4 w-4 flex-none text-[var(--primary)]" />
                      <span className="text-sm text-[var(--fg)]">
                        Naxal, Kathmandu 44600
                        <br />
                        Nepal
                      </span>
                    </div>
                  </div>
                </div>

                <AdvisorCard />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>Before you write in</Eyebrow>
            <h2 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-3xl tracking-tight text-[var(--fg)] md:text-4xl">
              Quick answers
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-col divide-y divide-[var(--border)]">
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
    </>
  );
}
