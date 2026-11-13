"use client";

import { useEffect } from "react";

/**
 * Pause decorative motion outside the near-viewport and when the tab is hidden.
 * Animations use transform/opacity only; the observer keeps off-screen work idle.
 */
export function MotionVisibilityManager() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const motionRegions = document.querySelectorAll<HTMLElement>([
      ".hero-section",
      ".inner-page-hero",
      ".intro-section",
      ".services-section",
      ".technology-band",
      ".approach-section",
      ".about-section",
      ".contact-section",
      ".inner-content-section",
      ".contact-form-section",
      ".inner-page-cta",
      ".site-footer",
      ".action-showcase",
      ".innovation-section",
      ".industry-section",
      ".process-section",
      ".ecosystem-section",
      ".engineering-explorer",
      ".page-experience",
      ".exhibition-section",
    ].join(","));

    if (motionRegions.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const region = entry.target as HTMLElement;
          region.toggleAttribute("data-motion-paused", !entry.isIntersecting);
        }
      },
      { rootMargin: "240px 0px", threshold: 0 },
    );

    motionRegions.forEach((region) => observer.observe(region));

    const handleVisibility = () => {
      document.documentElement.toggleAttribute("data-document-hidden", document.visibilityState !== "visible");
    };
    document.addEventListener("visibilitychange", handleVisibility);
    handleVisibility();

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
      document.documentElement.removeAttribute("data-document-hidden");
    };
  }, []);

  return null;
}
