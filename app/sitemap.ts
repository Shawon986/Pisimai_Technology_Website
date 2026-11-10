import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-url";

const publicPaths = [
  "",
  "/services",
  "/solutions",
  "/technology",
  "/about",
  "/contact",
  "/services/ai-intelligent-systems",
  "/services/software-digital-platforms",
  "/services/robotics-automation",
  "/services/system-integration"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPaths.flatMap((path) => {
    const en = siteUrl + "/en" + path;
    const zh = siteUrl + "/zh" + path;
    return [
      {
        url: en,
        changeFrequency: "monthly" as const,
        priority: path === "" ? 1 : path === "/contact" ? 0.8 : 0.7,
        alternates: { languages: { en, "zh-CN": zh } }
      },
      {
        url: zh,
        changeFrequency: "monthly" as const,
        priority: path === "" ? 1 : path === "/contact" ? 0.8 : 0.7,
        alternates: { languages: { en, "zh-CN": zh } }
      }
    ];
  });
}
