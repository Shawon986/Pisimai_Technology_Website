"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

export function RouteScrollReset() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    // Override the site's smooth anchor scrolling for route transitions.
    // This prevents the browser from animating/restoring the previous page's scroll position.
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.style.removeProperty("scroll-behavior");
  }, [pathname]);

  return null;
}
