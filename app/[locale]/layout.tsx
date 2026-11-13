import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../globals.css";
import { RouteScrollReset } from "@/components/route-scroll-reset";
import { MotionVisibilityManager } from "@/components/motion-visibility-manager";
import { ConversionTracking } from "@/components/conversion-tracking";
import { isLocale, locales } from "@/lib/i18n";
import { siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "PISIMAI TECHNOLOGY | Engineering Tomorrow", template: "%s | PISIMAI TECHNOLOGY" },
  description: "PISIMAI TECHNOLOGY — an international technology partner across AI, software, intelligent automation, and system integration.",
  applicationName: "PISIMAI TECHNOLOGY",
  icons: {
    icon: [{ url: "/brand/pisimai-favicon.svg", type: "image/svg+xml" }],
    shortcut: ["/brand/pisimai-favicon.svg"],
    apple: [{ url: "/brand/pisimai-favicon.svg", type: "image/svg+xml" }]
  },
  openGraph: {
    type: "website",
    siteName: "PISIMAI TECHNOLOGY",
    title: "PISIMAI TECHNOLOGY",
    description: "Engineering Tomorrow. Empowering Today."
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PISIMAI TECHNOLOGY",
  legalName: "匹思麦(深圳)科技有限公司",
  address: {
    "@type": "PostalAddress",
    streetAddress: "淘景商务大厦 1212",
    addressLocality: "Shenzhen",
    addressRegion: "Guangdong",
    addressCountry: "CN"
  },
  url: siteUrl,
  logo: siteUrl + "/brand/pisimai-favicon.svg",
  description: "An international technology partner across AI, software, intelligent automation, and system integration.",
  knowsAbout: [
    "Artificial intelligence and intelligent systems",
    "Software and digital platforms",
    "Robotics and automation",
    "System integration"
  ]
};

const organizationJsonLd = JSON.stringify(organizationSchema).replace(/</g, "\\u003c");

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/**
 * The locale segment is the root layout so the document language is correct
 * in the server-rendered HTML for both English and Simplified Chinese routes.
 */
export default async function LocaleRootLayout({
  children,
  params
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale === "zh" ? "zh-CN" : "en"} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: organizationJsonLd }} />
        <RouteScrollReset />
        <MotionVisibilityManager />
        <ConversionTracking />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
