import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/motion";

type Crumb = { label: string; href?: string };

export function PageHero({
  folio,
  crumbs,
  title,
  subtitle,
  children,
}: {
  folio: string;
  crumbs: Crumb[];
  title: string;
  subtitle?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative pt-[calc(5rem+4rem)] pb-16 border-b border-[var(--rule)]">
      <div className="mx-auto max-w-[1180px] px-6 md:px-12">
        <Reveal>
          <span
            className="inline-block mb-4 not-italic font-semibold text-[0.78rem] tracking-[0.28em] text-gold-leaf"
            style={{ fontVariant: "small-caps" }}
          >
            {folio}
          </span>
        </Reveal>

        <Reveal delay={80}>
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-2 font-display italic text-[0.92rem] text-ink-soft"
          >
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                {c.href ? (
                  <Link href={c.href} className="hover:text-gold-leaf transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page">{c.label}</span>
                )}
                {i < crumbs.length - 1 ? (
                  <span aria-hidden className="text-gold-leaf opacity-70">›</span>
                ) : null}
              </span>
            ))}
          </nav>
        </Reveal>

        <Reveal delay={160}>
          <h1 className="font-display italic font-medium text-ink leading-[1.05] text-[clamp(2.5rem,6vw,4.8rem)] mb-5 max-w-[18ch]">
            {title}
          </h1>
        </Reveal>

        {subtitle ? (
          <Reveal delay={240}>
            <p className="font-body text-ink-soft text-[clamp(1.05rem,1.4vw,1.2rem)] leading-[1.65] max-w-[60ch]">
              {subtitle}
            </p>
          </Reveal>
        ) : null}

        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
