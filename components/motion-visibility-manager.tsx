"use client";

import { useEffect } from "react";

/**
 * Keep the existing motion exactly as authored while ensuring animations
 * outside the user's viewing area do not consume CPU/GPU time.
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
    ].join(","));

    if (motionRegions.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const region = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            region.removeAttribute("data-motion-paused");
          } else {
            region.setAttribute("data-motion-paused", "true");
          }
        }
      },
      {
        // Resume motion shortly before a region enters the viewport so
        // users never see an animation abruptly restart while scrolling.
        rootMargin: "300px 0px",
        threshold: 0,
      },
    );

    motionRegions.forEach((region) => observer.observe(region));

    return () => observer.disconnect();
  }, []);

  return null;
}
