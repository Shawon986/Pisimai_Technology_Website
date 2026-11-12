import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { RouteScrollReset } from "@/components/route-scroll-reset";
import { ConversionTracking } from "@/components/conversion-tracking";

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
  openGraph: { type: "website", siteName: "PISIMAI TECHNOLOGY", title: "PISIMAI TECHNOLOGY", description: "Engineering Tomorrow. Empowering Today." },
  robots: { index: true, follow: true }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PISIMAI TECHNOLOGY",
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

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale === "zh" ? "zh-CN" : "en"} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: organizationJsonLd }} />
        <RouteScrollReset />
        <ConversionTracking />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
