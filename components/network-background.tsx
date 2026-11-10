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
      const count = Math.max(24, Math.min(68, Math.round(width / 17)));
      points = Array.from({ length: count }, (_, index) => {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.12 + Math.random() * 0.18;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          accent: index % 11 === 0,
        };
      });
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.35);
      canvas.width = Math.max(1, Math.round(width * pixelRatio));
      canvas.height = Math.max(1, Math.round(height * pixelRatio));
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      createPoints();
      render();
    };

    const render = () => {
      context.clearRect(0, 0, width, height);

      if (pointer.active) {
        const glow = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 150);
        glow.addColorStop(0, "rgba(63, 213, 255, 0.11)");
        glow.addColorStop(0.55, "rgba(63, 213, 255, 0.035)");
        glow.addColorStop(1, "rgba(63, 213, 255, 0)");
        context.fillStyle = glow;
        context.fillRect(pointer.x - 150, pointer.y - 150, 300, 300);
      }

      const maxDistance = width < 600 ? 128 : 166;
      for (let i = 0; i < points.length; i += 1) {
        const point = points[i];
        for (let j = i + 1; j < points.length; j += 1) {
          const other = points[j];
          const dx = point.x - other.x;
          const dy = point.y - other.y;
          const distance = Math.hypot(dx, dy);
          if (distance >= maxDistance) continue;
          const opacity = (1 - distance / maxDistance) * 0.34;
          context.strokeStyle = `rgba(63, 213, 255, ${opacity.toFixed(3)})`;
          context.lineWidth = 0.8;
          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(other.x, other.y);
          context.stroke();
        }
      }

      for (const point of points) {
        context.beginPath();
        context.arc(point.x, point.y, point.accent ? 2 : 1.45, 0, Math.PI * 2);
        context.fillStyle = point.accent ? "rgba(232, 196, 111, 0.9)" : "rgba(111, 225, 255, 0.82)";
        context.fill();
      }
    };

    const animate = (time: number) => {
      if (!running) return;
      const delta = lastFrame ? Math.min((time - lastFrame) / 16.67, 2) : 1;
      lastFrame = time;

      for (const point of points) {
        if (pointer.active) {
          const dx = point.x - pointer.x;
          const dy = point.y - pointer.y;
          const distance = Math.max(1, Math.hypot(dx, dy));
          if (distance < 142) {
            const force = ((142 - distance) / 142) * 0.012;
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
      if (reducedMotion) {
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
      if (event.pointerType !== "mouse") return;
      const rect = canvas.getBoundingClientRect();
      const inside = event.clientX >= rect.left && event.clientX <= rect.right &&
        event.clientY >= rect.top && event.clientY <= rect.bottom;
      pointer.active = inside;
      if (inside) {
        pointer.x = event.clientX - rect.left;
        pointer.y = event.clientY - rect.top;
      }
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
    document.addEventListener("visibilitychange", handleVisibility);
    resize();

    return () => {
      stop();
      resizeObserver.disconnect();
      observer.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-network-canvas" aria-hidden="true" />;
}
