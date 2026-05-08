"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";
import Link from "next/link";

/* ==========================================================================
   Reveal — IntersectionObserver-driven entrance.
   Uses CSS transitions (.codex-reveal) for hardware-accelerated transform/opacity.
   Skill rule: avoid setState for transient values where possible — but here we
   need a single one-shot boolean to flip a data attribute, so useState is fine.
   ========================================================================== */

type RevealProps = {
  children: ReactNode;
  as?: "div" | "section" | "article" | "aside" | "li" | "p";
  delay?: number;
  className?: string;
};

export function Reveal({
  children,
  as: As = "div",
  delay = 0,
  className,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <As
      ref={ref as never}
      className={`codex-reveal ${className ?? ""}`}
      data-visible={visible || undefined}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </As>
  );
}

/* ==========================================================================
   Stagger — wraps a list and applies cascading delays to direct children.
   Children must be Reveal components; the parent injects the delay prop
   via cloneElement is overkill here — simpler: parent sets a CSS variable
   and Reveal reads it. We instead just apply a delay-by-index via a
   deterministic mapping based on the children index.
   ========================================================================== */

type StaggerProps = {
  children: ReactNode[] | ReactNode;
  step?: number;
  className?: string;
};

export function Stagger({ children, step = 120, className }: StaggerProps) {
  const items = Array.isArray(children) ? children : [children];
  return (
    <>
      {items.map((child, i) => (
        <Reveal key={i} delay={i * step} className={className}>
          {child}
        </Reveal>
      ))}
    </>
  );
}

/* ==========================================================================
   MagneticCTA — primary button that pulls toward the cursor.
   Skill directive (MOTION>5): use useMotionValue + useTransform / useSpring,
   never useState for continuous motion. Disabled under prefers-reduced-motion.
   ========================================================================== */

type MagneticCTAProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "gold" | "outlined-gold";
  className?: string;
};

const variantClasses: Record<NonNullable<MagneticCTAProps["variant"]>, string> = {
  primary:
    "bg-forest text-paper border border-forest-deep " +
    "shadow-[inset_0_0_0_1px_rgba(183,144,47,0.25),0_1px_0_var(--color-paper-shade)] " +
    "hover:bg-forest-deep",
  gold:
    "bg-gold-leaf text-forest-deep border border-gold-deep " +
    "shadow-[inset_0_0_0_1px_rgba(255,244,200,0.35),0_1px_0_var(--color-paper-shade)] " +
    "hover:bg-gold-deep hover:text-paper",
  "outlined-gold":
    "bg-transparent text-gold-leaf border border-gold-leaf " +
    "hover:bg-gold-leaf hover:text-forest-deep",
};

export function MagneticCTA({
  href,
  children,
  variant = "primary",
  className,
}: MagneticCTAProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 120, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 120, damping: 18, mass: 0.4 });

  const onMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    x.set(dx * 0.18);
    y.set(dy * 0.22);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const cls =
    "inline-flex items-center justify-center gap-2 px-10 py-[1.05rem] " +
    "rounded-[2px] font-display italic font-medium tracking-[0.04em] text-[1.05rem] " +
    "transition-[background-color,color,box-shadow] duration-200 " +
    "active:translate-y-px focus-visible:outline-2 focus-visible:outline-gold-leaf " +
    "focus-visible:outline-offset-2 will-change-transform " +
    `${variantClasses[variant]} ${className ?? ""}`;

  return (
    <motion.span style={{ x: sx, y: sy }} className="inline-block">
      <Link
        ref={ref}
        href={href}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className={cls}
      >
        {children}
      </Link>
    </motion.span>
  );
}
