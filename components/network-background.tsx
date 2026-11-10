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
    const pointer = { x: 0, y: 0, active: false };
    let points: NetworkPoint[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let running = false;
    let inView = false;
    let lastFrame = 0;
    let pixelRatio = 1;

    const createPoints = () => {
      const count = Math.max(26, Math.min(56, Math.round(width / 22)));
      points = Array.from({ length: count }, (_, index) => {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.1 + Math.random() * 0.14;
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
      pixelRatio = Math.min(window.devicePixelRatio || 1, touchLayout ? 1 : 1.15);
      canvas.width = Math.max(1, Math.round(width * pixelRatio));
      canvas.height = Math.max(1, Math.round(height * pixelRatio));
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      createPoints();
      render();
    };

    const render = () => {
      context.clearRect(0, 0, width, height);

      if (pointer.active && animateEnabled) {
        const glow = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 128);
        glow.addColorStop(0, "rgba(63, 213, 255, 0.09)");
        glow.addColorStop(0.6, "rgba(63, 213, 255, 0.025)");
        glow.addColorStop(1, "rgba(63, 213, 255, 0)");
        context.fillStyle = glow;
        context.fillRect(pointer.x - 128, pointer.y - 128, 256, 256);
      }

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
        context.beginPath();
        context.arc(point.x, point.y, point.accent ? 1.8 : 1.3, 0, Math.PI * 2);
        context.fillStyle = point.accent ? "rgba(232, 196, 111, 0.86)" : "rgba(111, 225, 255, 0.72)";
        context.fill();
      }
    };

    const animate = (time: number) => {
      if (!running) return;

      // A steady 40fps cadence keeps motion fluid without repainting at full display refresh.
      if (lastFrame && time - lastFrame < 25) {
        frame = window.requestAnimationFrame(animate);
        return;
      }
      const delta = lastFrame ? Math.min((time - lastFrame) / 16.67, 2) : 1;
      lastFrame = time;

      for (const point of points) {
        if (pointer.active) {
          const dx = point.x - pointer.x;
          const dy = point.y - pointer.y;
          const distance = Math.max(1, Math.hypot(dx, dy));
          if (distance < 128) {
            const force = ((128 - distance) / 128) * 0.007;
            point.vx += (dx / distance) * force * delta;
            point.vy += (dy / distance) * force * delta;
          }
        }

        point.x += point.vx * delta;
        point.y += point.vy * delta;
        point.vx *= 0.999;
        point.vy *= 0.999;

        if (point.x < -8) point.x = width + 8;
        if (point.x > width + 8) point.x = -8;
        if (point.y < -8) point.y = height + 8;
        if (point.y > height + 8) point.y = -8;
      }

      render();
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

    const handlePointerMove = (event: PointerEvent) => {
      if (!animateEnabled || event.pointerType !== "mouse") return;
      const rect = canvas.getBoundingClientRect();
      const inside = event.clientX >= rect.left && event.clientX <= rect.right &&
        event.clientY >= rect.top && event.clientY <= rect.bottom;
      pointer.active = inside;
      if (inside) {
        pointer.x = event.clientX - rect.left;
        pointer.y = event.clientY - rect.top;
      }
    };

    const handlePointerLeave = () => {
      pointer.active = false;
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

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    document.addEventListener("visibilitychange", handleVisibility);
    resize();

    return () => {
      stop();
      resizeObserver.disconnect();
      observer.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-network-canvas" aria-hidden="true" />;
}
