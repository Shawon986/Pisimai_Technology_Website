"use client";

import { useEffect, useRef } from "react";

type NetworkPoint = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  accent: boolean;
};

type NetworkLink = {
  from: number;
  to: number;
};

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", {
      alpha: true,
      desynchronized: true,
    });
    if (!canvas || !context) return;

    // Use the same network motion and particle budget on phones and desktop.
    const animateEnabled = true;
    const maxPoints = 44;
    const maxDistance = 154;
    const maxDistanceSquared = maxDistance * maxDistance;

    let points: NetworkPoint[] = [];
    let links: NetworkLink[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let running = false;
    let inView = false;
    let lastFrame = 0;
    let pixelRatio = 1;

    const createPoints = () => {
      const count = maxPoints;
      points = Array.from({ length: count }, (_, index) => {
        const angle = Math.random() * Math.PI * 2;
        // Faster visible drift without adding more particles or expensive effects.
        const speed = 0.55 + Math.random() * 0.4;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          accent: index % 9 === 0,
        };
      });

      // Build a lightweight, stable web once. Frames only update coordinates.
      links = [];
      for (let i = 0; i < points.length; i += 1) {
        const nearest: { index: number; distance: number }[] = [];
        for (let j = i + 1; j < points.length; j += 1) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const distance = dx * dx + dy * dy;
          if (distance >= maxDistanceSquared) continue;
          nearest.push({ index: j, distance });
        }
        nearest.sort((a, b) => a.distance - b.distance);
        for (const candidate of nearest.slice(0, 3)) {
          links.push({ from: i, to: candidate.index });
        }
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      // Render at 0.8x resolution: keeps every particle and its speed,
      // while reducing the full-hero canvas pixel workload by 36%.
      pixelRatio = 0.8;
      canvas.width = Math.max(1, Math.round(width * pixelRatio));
      canvas.height = Math.max(1, Math.round(height * pixelRatio));
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      createPoints();
      render(0);
    };

    const render = (time: number) => {
      context.clearRect(0, 0, width, height);

      // Draw all network segments in one canvas stroke instead of many buckets.
      context.beginPath();
      for (const link of links) {
        const a = points[link.from];
        const b = points[link.to];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        if (dx * dx + dy * dy > maxDistanceSquared) continue;
        context.moveTo(a.x, a.y);
        context.lineTo(b.x, b.y);
      }
      context.strokeStyle = "rgba(63, 213, 255, 0.19)";
      context.lineWidth = 0.85;
      context.stroke();

      // Batch ordinary nodes and warm accent nodes separately; no blur filters.
      context.beginPath();
      for (const point of points) {
        if (!point.accent) {
          context.moveTo(point.x + 1.3, point.y);
          context.arc(point.x, point.y, 1.3, 0, Math.PI * 2);
        }
      }
      context.fillStyle = "rgba(111, 225, 255, 0.78)";
      context.fill();

      context.beginPath();
      for (const point of points) {
        if (point.accent) {
          const pulse = 0.5 + (Math.sin(time * 0.0018 + point.x * 0.018) + 1) * 0.25;
          const radius = 1.8 + pulse * 0.85;
          context.moveTo(point.x + radius, point.y);
          context.arc(point.x, point.y, radius, 0, Math.PI * 2);
        }
      }
      context.fillStyle = "rgba(255, 207, 119, 0.95)";
      context.fill();
    };

    const animate = (time: number) => {
      if (!running) return;

      // Cap at 40fps to leave headroom for the rest of the page.
      if (lastFrame && time - lastFrame < 25) {
        frame = window.requestAnimationFrame(animate);
        return;
      }
      const delta = lastFrame ? Math.min((time - lastFrame) / 16.67, 2) : 1;
      lastFrame = time;

      for (const point of points) {
        point.x += point.vx * delta;
        point.y += point.vy * delta;
        if (point.x < -8) point.x = width + 8;
        if (point.x > width + 8) point.x = -8;
        if (point.y < -8) point.y = height + 8;
        if (point.y > height + 8) point.y = -8;
      }

      render(time);
      frame = window.requestAnimationFrame(animate);
    };

    const start = () => {
      if (running || !inView || document.visibilityState !== "visible") return;
      if (!animateEnabled) {
        render(0);
        return;
      }
      running = true;
      lastFrame = 0;
      frame = window.requestAnimationFrame(animate);
    };

    const stop = () => {
      running = false;
      window.cancelAnimationFrame(frame);
    };

    const handleVisibility = () => {
      if (document.visibilityState === "visible") start();
      else stop();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView) start();
      else stop();
    }, { threshold: 0.01 });

    observer.observe(canvas);
    document.addEventListener("visibilitychange", handleVisibility);
    resize();

    return () => {
      stop();
      resizeObserver.disconnect();
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-network-canvas" aria-hidden="true" />;
}
