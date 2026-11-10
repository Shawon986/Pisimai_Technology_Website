"use client";

import { useEffect, useRef } from "react";

type NetworkPoint = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  accent: boolean;
};

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touchLayout = window.matchMedia("(hover: none), (max-width: 760px)").matches;
    const animateEnabled = !reducedMotion && !touchLayout;
    const lowPowerDevice = (navigator.hardwareConcurrency || 8) <= 4;
    const maxPoints = lowPowerDevice ? 40 : 52;
    let points: NetworkPoint[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let running = false;
    let inView = false;
    let lastFrame = 0;
    let pixelRatio = 1;

    const createPoints = () => {
      const count = Math.max(24, Math.min(maxPoints, Math.round(width / 24)));
      points = Array.from({ length: count }, (_, index) => {
        const angle = Math.random() * Math.PI * 2;
        const speed = (0.1 + Math.random() * 0.14) * 1.28;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          accent: index % 10 === 0,
        };
      });
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      // A 1x backing store avoids expensive high-DPI canvas overdraw in this large hero.
      pixelRatio = 1;
      canvas.width = Math.max(1, Math.round(width * pixelRatio));
      canvas.height = Math.max(1, Math.round(height * pixelRatio));
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      createPoints();
      render();
    };

    const render = (time = 0) => {
      context.clearRect(0, 0, width, height);

      const maxDistance = width < 600 ? 116 : 148;
      const maxDistanceSquared = maxDistance * maxDistance;
      const lineBuckets: number[][] = [[], [], [], []];
      const spatialCells = new Map<string, number[]>();

      // Spatial hashing keeps the denser network inexpensive to connect.
      for (let i = 0; i < points.length; i += 1) {
        const point = points[i];
        const cellX = Math.floor(point.x / maxDistance);
        const cellY = Math.floor(point.y / maxDistance);
        const cellKey = cellX + "," + cellY;
        const nearby: number[] = [];
        for (let offsetY = -1; offsetY <= 1; offsetY += 1) {
          for (let offsetX = -1; offsetX <= 1; offsetX += 1) {
            const cell = spatialCells.get((cellX + offsetX) + "," + (cellY + offsetY));
            if (cell) nearby.push(...cell);
          }
        }

        for (const j of nearby) {
          const other = points[j];
          const dx = point.x - other.x;
          const dy = point.y - other.y;
          const distanceSquared = dx * dx + dy * dy;
          if (distanceSquared >= maxDistanceSquared) continue;
          const strength = 1 - Math.sqrt(distanceSquared) / maxDistance;
          const bucket = Math.min(3, Math.floor(strength * 4));
          lineBuckets[bucket].push(point.x, point.y, other.x, other.y);
        }

        const cell = spatialCells.get(cellKey);
        if (cell) cell.push(i);
        else spatialCells.set(cellKey, [i]);
      }

      for (let bucket = 0; bucket < lineBuckets.length; bucket += 1) {
        const lines = lineBuckets[bucket];
        if (!lines.length) continue;
        context.beginPath();
        for (let i = 0; i < lines.length; i += 4) {
          context.moveTo(lines[i], lines[i + 1]);
          context.lineTo(lines[i + 2], lines[i + 3]);
        }
        context.strokeStyle = `rgba(63, 213, 255, ${0.07 + bucket * 0.065})`;
        context.lineWidth = 0.8;
        context.stroke();
      }

      for (const point of points) {
        const pulse = point.accent ? 0.5 + (Math.sin(time * 0.0014 + point.x * 0.018) + 1) * 0.25 : 0;
        context.beginPath();
        context.arc(point.x, point.y, point.accent ? 1.7 + pulse * 0.8 : 1.3, 0, Math.PI * 2);
        context.fillStyle = point.accent
          ? `rgba(242, 202, 112, ${0.58 + pulse * 0.38})`
          : "rgba(111, 225, 255, 0.72)";
        context.fill();
      }
    };

    const animate = (time: number) => {
      if (!running) return;

      // Keep a steady 40fps ceiling while allowing the particles to travel slightly faster.
      if (lastFrame && time - lastFrame < 25) {
        frame = window.requestAnimationFrame(animate);
        return;
      }
      const delta = lastFrame ? Math.min((time - lastFrame) / 16.67, 2) : 1;
      lastFrame = time;

      for (const point of points) {
        point.x += point.vx * delta;
        point.y += point.vy * delta;
        point.vx *= 0.999;
        point.vy *= 0.999;

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
        render();
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
