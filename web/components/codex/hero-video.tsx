"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Cinematic background video for the hero.
 * - Full-bleed object-cover behind the type layer.
 * - Honors prefers-reduced-motion: pauses on first frame, no autoplay.
 * - Muted + playsInline so iOS Safari and Android Chrome autoplay reliably.
 * - preload="metadata" defers the bytes until intersection / page settle.
 */
export function HeroVideo({ src = "/video/hero.mp4" }: { src?: string }) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (reduced) {
      v.pause();
      v.currentTime = 0.6; // park on a representative frame
    } else {
      v.play().catch(() => {
        /* autoplay blocked — leave the poster frame visible */
      });
    }
  }, [reduced]);

  return (
    <video
      ref={ref}
      className="absolute inset-0 size-full object-cover"
      src={src}
      muted
      loop
      autoPlay
      playsInline
      preload="metadata"
      aria-hidden
      tabIndex={-1}
    />
  );
}
