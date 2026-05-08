import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type ButtonVariant = "primary" | "gold" | "outlined-gold" | "secondary";
type ButtonSize = "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-forest text-paper border border-forest-deep " +
    "shadow-[inset_0_0_0_1px_rgba(183,144,47,0.25),0_1px_0_var(--color-paper-shade)] " +
    "hover:bg-forest-deep hover:shadow-[inset_0_0_0_1px_rgba(183,144,47,0.55),0_2px_0_var(--color-paper-shade)]",
  gold:
    "bg-gold-leaf text-forest-deep border border-gold-deep " +
    "shadow-[inset_0_0_0_1px_rgba(255,244,200,0.35),0_1px_0_var(--color-paper-shade)] " +
    "hover:bg-gold-deep hover:text-paper " +
    "hover:shadow-[inset_0_0_0_1px_rgba(255,244,200,0.5),0_2px_0_var(--color-paper-shade)]",
  "outlined-gold":
    "bg-transparent text-gold-leaf border border-gold-leaf " +
    "hover:bg-gold-leaf hover:text-forest-deep",
  secondary:
    "bg-transparent text-ink border border-ink " +
    "hover:bg-ink hover:text-paper",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-7 py-[0.95rem] text-[1rem]",
  lg: "px-10 py-[1.05rem] text-[1.05rem]",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 " +
  "rounded-[2px] font-display italic font-medium " +
  "tracking-[0.04em] text-center leading-tight " +
  "transition-[background-color,color,box-shadow,transform] duration-200 " +
  "active:translate-y-px focus-visible:outline-2 focus-visible:outline-gold-leaf " +
  "focus-visible:outline-offset-2";

type ButtonAsLinkProps = {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  external?: boolean;
} & Omit<ComponentProps<typeof Link>, "href">;

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  external,
  className,
  children,
  ...rest
}: ButtonAsLinkProps) {
  const cls = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className ?? ""}`;
  if (external) {
    return (
      <a
        href={href}
        className={cls}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
} & ComponentProps<"button">;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className ?? ""}`}
      {...rest}
    >
      {children}
    </button>
  );
}

/* ---------- InlineLink — italic ink-stroke underlined editorial link ----- */
type InlineLinkProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
};

export function InlineLink({ href, children, external }: InlineLinkProps) {
  const cls =
    "codex-inkstroke relative inline-flex items-baseline gap-1 " +
    "font-display italic text-[1.05rem] text-ink " +
    "transition-[color,letter-spacing] duration-300 " +
    "hover:text-gold-leaf hover:tracking-[0.015em] " +
    "after:content-['↘'] after:not-italic after:text-[0.8em] after:text-gold-leaf";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
