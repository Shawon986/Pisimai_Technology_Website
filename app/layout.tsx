import type { Metadata } from "next";
import "./globals.css";
import { RouteScrollReset } from "@/components/route-scroll-reset";

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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body suppressHydrationWarning><RouteScrollReset />{children}</body></html>;
}
