import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "PISIMAI TECHNOLOGY | Engineering Tomorrow", template: "%s | PISIMAI TECHNOLOGY" },
  description: "PISIMAI TECHNOLOGY — an international technology partner across AI, software, intelligent automation, and system integration.",
  applicationName: "PISIMAI TECHNOLOGY",
  icons: { icon: "/brand/pisimai-favicon.svg" },
  openGraph: { type: "website", siteName: "PISIMAI TECHNOLOGY", title: "PISIMAI TECHNOLOGY", description: "Engineering Tomorrow. Empowering Today." },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
