/**
 * Codex Diamba — Hand-drawn SVG glyphs.
 * Stroke 0.6–1.2, round caps/joins, no fill, organic asymmetric paths.
 * All glyphs are pure server-renderable JSX — no client logic.
 */

import type { SVGProps } from "react";

type GlyphProps = SVGProps<SVGSVGElement>;

const baseProps: Partial<GlyphProps> = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function CannabisLeaf(props: GlyphProps) {
  return (
    <svg viewBox="0 0 200 300" strokeWidth="0.8" {...baseProps} {...props}>
      <path d="M100 290V100" />
      <path d="M100 100c-15-30-50-55-85-55 5 35 35 65 85 70" />
      <path d="M100 100c15-30 50-55 85-55-5 35-35 65-85 70" />
      <path d="M100 160c-20-15-55-18-78-5 10 22 40 30 78 18" />
      <path d="M100 160c20-15 55-18 78-5-10 22-40 30-78 18" />
      <path d="M100 60c-8-25-30-48-55-55 2 30 18 52 55 65" />
      <path d="M100 60c8-25 30-48 55-55-2 30-18 52-55 65" />
      <path d="M100 40c-5-15-18-30-35-38 1 20 12 35 35 43" />
      <path d="M100 40c5-15 18-30 35-38-1 20-12 35-35 43" />
    </svg>
  );
}

export function CannabisLeafFull(props: GlyphProps) {
  return (
    <svg viewBox="0 0 300 500" strokeWidth="0.6" {...baseProps} {...props}>
      <path d="M150 490V200" />
      <path d="M150 200c-20-40-65-75-115-75 6 48 45 85 115 95" />
      <path d="M150 200c20-40 65-75 115-75-6 48-45 85-115 95" />
      <path d="M150 280c-28-20-75-24-105-8 14 30 55 42 105 25" />
      <path d="M150 280c28-20 75-24 105-8-14 30-55 42-105 25" />
      <path d="M150 120c-12-32-42-60-75-70 3 38 25 65 75 82" />
      <path d="M150 120c12-32 42-60 75-70-3 38-25 65-75 82" />
      <path d="M150 70c-8-20-28-40-50-48 2 25 16 42 50 55" />
      <path d="M150 70c8-20 28-40 50-48-2 25-16 42-50 55" />
      <path d="M150 360c-15-10-40-12-55-3 8 15 28 22 55 12" />
      <path d="M150 360c15-10 40-12 55-3-8 15-28 22-55 12" />
      <path d="M150 490c-10 0-30 5-40 15" />
      <path d="M150 490c10 0 30 5 40 15" />
      <path d="M150 490c-5 5-15 15-18 25" />
      <path d="M150 490c5 5 15 15 18 25" />
      <path d="M150 490c0 5-8 18-10 28" />
      <path d="M150 490c0 5 8 18 10 28" />
    </svg>
  );
}

export function Chalice(props: GlyphProps) {
  return (
    <svg viewBox="0 0 64 64" strokeWidth="1.1" {...baseProps} {...props}>
      <path d="M16 14c0 12 7 22 16 22s16-10 16-22" />
      <path d="M16 14h32" />
      <path d="M32 36v12" />
      <path d="M22 50h20" />
      <path d="M20 53h24" />
      <path d="M32 14c-3-4-9-6-15-5 2 6 8 9 15 9" />
      <path d="M32 14c3-4 9-6 15-5-2 6-8 9-15 9" />
      <path d="M28 6c0 2 1 3 2 4M32 4c0 2 1 3 2 4M36 6c0 2 1 3 2 4" opacity="0.55" />
    </svg>
  );
}

export function MortarPestle(props: GlyphProps) {
  return (
    <svg viewBox="0 0 64 64" strokeWidth="1.1" {...baseProps} {...props}>
      <path d="M14 32c0 10 7 18 18 18s18-8 18-18" />
      <path d="M12 32h40" />
      <path d="M18 50l3 6h22l3-6" />
      <path d="M22 28L42 6" />
      <path d="M40 4l4 4" />
      <path d="M28 36c2-4 4-6 8-6" />
      <path d="M30 38c-1-2 0-4 2-5M34 36c-1-2 1-4 3-4M37 33c-1-1 1-3 3-2" opacity="0.7" />
    </svg>
  );
}

export function BalanceScale(props: GlyphProps) {
  return (
    <svg viewBox="0 0 64 64" strokeWidth="1.1" {...baseProps} {...props}>
      <path d="M32 8v44" />
      <circle cx="32" cy="8" r="2" fill="currentColor" stroke="none" />
      <path d="M14 16L50 14" />
      <path d="M14 16L8 32" />
      <path d="M14 16L20 32" />
      <path d="M6 32c0 4 3 6 8 6s8-2 8-6" />
      <path d="M50 14L46 28" />
      <path d="M50 14L54 28" />
      <path d="M44 28c0 3 3 5 6 5s6-2 6-5" />
      <path d="M22 52h20" />
      <path d="M20 55h24" />
    </svg>
  );
}

export function Scroll(props: GlyphProps) {
  return (
    <svg viewBox="0 0 32 32" strokeWidth="1.1" {...baseProps} {...props}>
      <path d="M6 6c0-1 1-2 2-2h16c1 0 2 1 2 2v20c0 1-1 2-2 2H8c-1 0-2-1-2-2V6z" />
      <path d="M10 9h12M10 13h12M10 17h8" />
      <path d="M22 22l-3 3-2-2" />
    </svg>
  );
}

export function WaxSeal(props: GlyphProps) {
  return (
    <svg viewBox="0 0 32 32" strokeWidth="1.1" {...baseProps} {...props}>
      <circle cx="16" cy="14" r="8" />
      <path d="M11 14a5 5 0 0 1 10 0" />
      <path d="M16 9v5l3 2" />
      <path d="M12 22l-2 7 6-3 6 3-2-7" />
    </svg>
  );
}

export function Caduceus(props: GlyphProps) {
  return (
    <svg viewBox="0 0 32 32" strokeWidth="1.1" {...baseProps} {...props}>
      <path d="M16 4v24" />
      <path d="M16 4l-3-3M16 4l3-3" />
      <path d="M11 10c0-3 2-5 5-5s5 2 5 5-2 5-5 5-5-2-5-5z" opacity="0.65" />
      <path d="M16 16c-3 2-5 5-5 8M16 16c3 2 5 5 5 8" />
      <path d="M11 28h10" />
    </svg>
  );
}

export function OpenHands(props: GlyphProps) {
  return (
    <svg viewBox="0 0 32 32" strokeWidth="1.1" {...baseProps} {...props}>
      <path d="M6 22c0-3 2-5 4-5h12c2 0 4 2 4 5" />
      <path d="M10 17V8c0-1 1-2 2-2s2 1 2 2v6" />
      <path d="M14 14V6c0-1 1-2 2-2s2 1 2 2v8" />
      <path d="M18 14V8c0-1 1-2 2-2s2 1 2 2v9" />
      <path d="M16 17l-3-2M16 17l3-2" />
      <circle cx="16" cy="13" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TriadCorpo(props: GlyphProps) {
  return (
    <svg viewBox="0 0 32 32" strokeWidth="1.2" {...baseProps} {...props}>
      <circle cx="16" cy="7" r="4" />
      <path d="M10 14h12c1 0 2 1 2 2v4l-4 2v8h-4v-6h-4v6h-4v-8l-4-2v-4c0-1 1-2 2-2z" />
    </svg>
  );
}

export function TriadMente(props: GlyphProps) {
  return (
    <svg viewBox="0 0 32 32" strokeWidth="1.2" {...baseProps} {...props}>
      <path d="M16 4C10 4 5 8.5 5 14c0 3 1.5 5.5 4 7.5V28h14v-6.5c2.5-2 4-4.5 4-7.5 0-5.5-5-10-11-10z" />
      <path d="M12 18c1 1.5 3 2.5 4 2.5s3-1 4-2.5" />
      <path d="M5 14h22" />
      <path d="M12 14v-3c0-1 1-2 2-2h4c1 0 2 1 2 2v3" />
    </svg>
  );
}

export function TriadEspirito(props: GlyphProps) {
  return (
    <svg viewBox="0 0 32 32" strokeWidth="1.2" {...baseProps} {...props}>
      <path d="M16 28c-1-2-3-4-4-6-2-3-4-5-4-8a8 8 0 0 1 16 0c0 3-2 5-4 8-1 2-3 4-4 6z" />
      <path d="M16 10v6" />
      <path d="M13 13h6" />
      <path d="M14 20c0 1 1 2 2 2s2-1 2-2" />
    </svg>
  );
}

export function TriadLines(props: GlyphProps) {
  return (
    <svg viewBox="0 0 200 200" strokeWidth="0.5" {...baseProps} {...props}>
      <line x1="100" y1="30" x2="30" y2="170" />
      <line x1="100" y1="30" x2="170" y2="170" />
      <line x1="30" y1="170" x2="170" y2="170" />
    </svg>
  );
}
