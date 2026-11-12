"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

/**
 * Track contact-intent clicks without collecting form values or personal data.
 * The Analytics SDK only sends events when Vercel Web Analytics is enabled.
 */
export function ConversionTracking() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const anchor = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor) return;

      let destination: URL;
      try {
        destination = new URL(anchor.href, window.location.origin);
      } catch {
        return;
      }

      if (!/(^|\/)contact(?:\/|$)/.test(destination.pathname) && !destination.hash.includes("contact")) {
        return;
      }

      track("contact_cta_click", {
        source_path: window.location.pathname,
        destination_path: destination.pathname,
        destination_hash: destination.hash || "none"
      });
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
