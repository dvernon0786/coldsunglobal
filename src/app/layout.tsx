import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const siteUrl = "https://coldsunglobal.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cold Sun Global — Enterprise Transformation Worldwide",
    template: "%s | Cold Sun Global",
  },
  description:
    "Cold Sun Global is an international enterprise technology consulting group. We deliver Salesforce, NetSuite, IFS Cloud, and ServiceNow transformations across North America, UK, EU, and India.",
  keywords: [
    "Salesforce consulting partner",
    "NetSuite implementation",
    "IFS Cloud",
    "ServiceNow",
    "field service management",
    "ERP transformation",
    "enterprise consulting",
    "Cold Sun Global",
    "Agentforce",
    "digital transformation",
  ],
  authors: [{ name: "Cold Sun Global", url: siteUrl }],
  creator: "Cold Sun Global",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Cold Sun Global",
    title: "Cold Sun Global — Enterprise Transformation Worldwide",
    description:
      "Platform-agnostic enterprise consulting. Salesforce, NetSuite, IFS Cloud, ServiceNow. Delivered across 4 global regions.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Cold Sun Global",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cold Sun Global — Enterprise Transformation Worldwide",
    description:
      "Platform-agnostic enterprise consulting. Salesforce, NetSuite, IFS Cloud, ServiceNow. 4 global regions.",
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
