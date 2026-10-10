import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const SITE_URL = "https://aethelis.ltd";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Aethelis — Private Wealth Management",
    template: "%s · Aethelis",
  },
  description:
    "Aethelis is an early-stage private wealth management startup based in Kathmandu, Nepal, pairing a dedicated advisor with a consolidated digital view of your entire portfolio.",
  keywords: [
    "Aethelis",
    "private wealth management",
    "wealth management startup",
    "investment management",
    "estate planning",
    "family office",
    "fintech startup",
    "Nepal startup",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aethelis — Private Wealth Management",
    description:
      "A dedicated advisor paired with a consolidated digital view of your entire portfolio.",
    siteName: "Aethelis",
    url: SITE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aethelis — Private Wealth Management",
    description:
      "A dedicated advisor paired with a consolidated digital view of your entire portfolio.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aethelis",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Aethelis is an early-stage private wealth management startup based in Kathmandu, Nepal, pairing a dedicated advisor with a consolidated digital view of your entire portfolio.",
  email: "hello@aethelis.ltd",
  telephone: "+977-986-1023457",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Naxal",
    addressLocality: "Kathmandu",
    postalCode: "44600",
    addressCountry: "NP",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--bg)] text-[var(--fg)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
