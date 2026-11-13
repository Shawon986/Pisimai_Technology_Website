import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Content-Security-Policy", value: "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'self'; img-src 'self' data: blob: https://raw.githubusercontent.com; font-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com; connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com; upgrade-insecure-requests" },
  ...(process.env.NODE_ENV === "production"
    ? [{ key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" }]
    : [])
];

const nextConfig: NextConfig = {
  // Allow the phone on the local network to connect to the Next.js dev server.
  allowedDevOrigins: ["192.168.0.19"],
  images: { remotePatterns: [{ protocol: "https", hostname: "raw.githubusercontent.com", pathname: "/Shawon986/Pisimai_Technology_Website/**" }] },
  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders
      }
    ];
  }
};

export default nextConfig;
