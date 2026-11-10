"use client";

import type { PointerEvent as ReactPointerEvent } from "react";

const CENTER_X = 300;
const CENTER_Y = 220;
const RADIUS_X = 286;
const RADIUS_Y = 204;
const SPOKE_COUNT = 18;

function point(angle: number, scale: number) {
  return {
    x: CENTER_X + Math.cos(angle) * RADIUS_X * scale,
    y: CENTER_Y + Math.sin(angle) * RADIUS_Y * scale,
  };
}

const spokes = Array.from({ length: SPOKE_COUNT }, (_, index) => {
  const angle = (Math.PI * 2 * index) / SPOKE_COUNT - Math.PI / 2;
  return { angle, end: point(angle, 1) };
});

const rings = [0.18, 0.31, 0.44, 0.57, 0.70, 0.83, 0.96].map((scale) =>
  spokes.map((spoke, index) => {
    const next = spokes[(index + 1) % SPOKE_COUNT];
    const start = point(spoke.angle, scale);
    const end = point(next.angle, scale);
    const middleAngle = (spoke.angle + next.angle) / 2;
    const control = point(middleAngle, scale * 0.88);
    return `M ${start.x.toFixed(1)} ${start.y.toFixed(1)} Q ${control.x.toFixed(1)} ${control.y.toFixed(1)} ${end.x.toFixed(1)} ${end.y.toFixed(1)}`;
  })
);

export function InteractiveSpiderWeb() {
  function handlePointerMove(event: ReactPointerEvent<SVGSVGElement>) {
    if (event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    event.currentTarget.style.setProperty("--web-x", `${(x * 100).toFixed(1)}%`);
    event.currentTarget.style.setProperty("--web-y", `${(y * 100).toFixed(1)}%`);
    event.currentTarget.style.setProperty("--web-dx", `${((x - 0.5) * 13).toFixed(1)}px`);
    event.currentTarget.style.setProperty("--web-dy", `${((y - 0.5) * 10).toFixed(1)}px`);
  }

  function handlePointerLeave(event: ReactPointerEvent<SVGSVGElement>) {
    event.currentTarget.style.setProperty("--web-x", "50%");
    event.currentTarget.style.setProperty("--web-y", "50%");
    event.currentTarget.style.setProperty("--web-dx", "0px");
    event.currentTarget.style.setProperty("--web-dy", "0px");
  }

  return (
    <svg
      className="architecture-network architecture-spider-web"
      viewBox="0 0 600 440"
      preserveAspectRatio="none"
      aria-hidden="true"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <defs>
        <radialGradient id="spider-web-cursor-glow" gradientUnits="userSpaceOnUse" cx="var(--web-x, 50%)" cy="var(--web-y, 50%)" r="150">
          <stop offset="0%" stopColor="#72eaff" stopOpacity=".2" />
          <stop offset="55%" stopColor="#72eaff" stopOpacity=".055" />
          <stop offset="100%" stopColor="#72eaff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect
        className="spider-web-cursor-glow"
        x="0"
        y="0"
        width="600"
        height="440"
        fill="url(#spider-web-cursor-glow)"
      />
      <g className="spider-web-reactive">
        <g className="spider-web-strands">
          {spokes.map((spoke, index) => (
            <path
              key={`spoke-${index}`}
              d={`M ${CENTER_X} ${CENTER_Y} L ${spoke.end.x.toFixed(1)} ${spoke.end.y.toFixed(1)}`}
            />
          ))}
          {rings.flatMap((segments, ringIndex) =>
            segments.map((path, segmentIndex) => (
              <path key={`ring-${ringIndex}-${segmentIndex}`} d={path} />
            ))
          )}
        </g>
        <g className="spider-web-nodes">
          {spokes.filter((_, index) => index % 2 === 0).map((spoke, index) => {
            const node = point(spoke.angle, index % 2 === 0 ? 0.7 : 0.46);
            return <circle key={`node-${index}`} cx={node.x} cy={node.y} r="2.2" />;
          })}
          <circle className="spider-web-center" cx={CENTER_X} cy={CENTER_Y} r="4" />
        </g>
      </g>
    </svg>
  );
}
