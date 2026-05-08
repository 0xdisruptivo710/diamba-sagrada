# Design System: Codex Diamba — Diamba Sagrada

> A digital herbal manuscript for a Brazilian medical cannabis patients' association. Editorial-botanical register. Designed to feel like a 19th-century apothecary's codex translated into a contemporary, accessible website — not a SaaS landing page, not a clinic dashboard, not a wellness app.

## 1. Visual Theme & Atmosphere

The atmosphere is a **sacred herbal almanac** — paper-textured, ink-set, hand-bound. Reading the site should feel like opening a leather-and-cloth volume in a quiet library: the warmth of aged parchment, the weight of italicized serif type, the discipline of hairline rules dividing articles.

- **Density: 4 (Editorial Balanced)** — generous breathing room around long-form passages, but content-rich enough to feel substantive. Not gallery-airy (this isn't a portfolio), not cockpit-dense (this isn't a tool).
- **Variance: 7 (Asymmetric Editorial)** — the page is composed like a folio, not a wireframe. Marginalia columns, staggered 12-column grids, drop-cap entries, ornamental rules. Centered symmetric layouts are forbidden except inside ceremonial CTAs.
- **Motion: 4 (Ceremonial Breathing)** — slow, reverent reveals on scroll. No bounces, no springs, no scroll-jacking, no parallax. A 1.1-second exponential ease on entrance. Subtle letter-spacing shift on link hover. Glyph rotation on pillar hover. Nothing that would interrupt reading.

The reader is a **patient, a family member, a doctor, a lawyer** — frequently in distress, looking for guidance, not entertainment. The design earns trust through restraint, scholarship, and the absence of marketing pressure.

## 2. Color Palette & Roles

The palette is **drenched-warm with cool ink and gold accents** — a deliberate refusal of the wellness-clinic stereotype (white + sage + sans-serif) and the cannabis-brand stereotype (matte black + neon green).

### Surface
- **Paper** (`#F1E8D3`) — Primary canvas. Warm aged-vellum cream with SVG turbulence grain layered fixed-attachment. All sections sit on this surface unless noted.
- **Paper Deep** (`#E8DCBE`) — Section accents, section transitions, raised emphasis blocks.
- **Paper Shade** (`#D9C9A2`) — Bottom-edge button shadow color (letterpress effect), deepest paper tone.
- **Forest** (`#1F3A2C`) — Inverted surfaces (final CTA panel). Deep botanical green, near-ink.
- **Forest Deep** (`#14271E`) — Footer surface, the deepest bound-cover green.

### Ink (text)
- **Ink** (`#1B2A21`) — Primary body and heading color. Cool dark green-black with botanical undertone. Never `#000000`, never `#1F1F1F`-style cool tech ink.
- **Ink Soft** (`#4D5C53`) — Secondary text, marginalia, metadata. Pulls 35% lightness toward paper.
- **Ink Faded** (`rgba(27, 42, 33, 0.55)`) — Disclaimers, fine print, attribution lines.

### Accent
- **Gold Leaf** (`#B7902F`) — *The single ornamental accent.* Used for: roman numerals in nav and pillars, ornamental dividers (`❦`, `⁂`), drop caps in editorial passages, link underline strokes (hand-drawn SVG), the highlighter band under the hero word "dignidade", glyph color in trust sigils. Saturation deliberately ~60% — leaf-foil gold, not pure-yellow gold.
- **Gold Deep** (`#936F1C`) — Hover state on gold buttons; bottom border of footer/CTA.
- **Sepia** (`#8A6A45`) — Date stamps, edition numerals, earth-tone secondary accent. Used very sparingly.
- **Vermilion** (`#A6432B`) — Reserved for *single-letter ornamental punctuation* (rubricated initials in long-form articles, drop caps on featured passages). Used at most once per page. Never on buttons, never on links, never on UI chrome.

### Structural
- **Rule** (`rgba(45, 64, 47, 0.22)`) — Default hairline. 1px gradient-fade dividers between sections.
- **Rule Strong** (`rgba(45, 64, 47, 0.42)`) — Pillar entry top-rules, trust-row vertical separators.

### Color Strategy
**Drenched** — paper IS the surface, the surface IS the brand. The site is not a neutral container with brand color on top; the brand is the parchment itself. This is the opposite of the "Restrained: tinted neutrals + 10% accent" strategy and is the correct choice for an editorial register.

### Bans
- No `#000000`. No `#FFFFFF`. No pure neutrals.
- No purple, no electric blue, no neon, no magenta.
- No green that reads as "tech green" (`#00C853`, `#16A34A`-style) — always botanical-deep, never mint.
- No more than one accent on a surface at a time. Gold Leaf and Vermilion never appear in the same paragraph.
- No saturation above 70%.
- No CSS gradients on text (`background-clip: text`). The gold-leaf word "dignidade" uses a horizontal background-image highlighter band, not a text gradient.

## 3. Typography Rules

**Two fonts. Both deliberate. Both editorial.**

- **Display: Cormorant Garamond** (Catharine Roberts, distinctive contemporary revival — the high-contrast, characterful italic is its signature). Weights used: 400, 500, 600, 700 (italic and roman). Hierarchy is built on **italic vs. roman** and **weight contrast (500 vs. 600)**, not on size alone.
- **Body: Lora** (Cyreal — humanist serif, optimized for screen body text, calligraphic terminals). Weights: 400, 500, 600 (italic and roman). Generous 1.7–1.9 line-height for long-form passages.

### Treatment Rules
- **All major headings are italic 500.** The italic display voice is the manuscript register's signature — it must be consistent across hero, sections, pillars, journey, ancestral, vision.
- **Section overlines are small caps** (`font-variant: small-caps`, letter-spacing 0.22–0.28em, gold-leaf color, ~0.78–0.82rem). They precede every section title and read like article numbers in a codex ("Articulus Primus", "Articulus Secundus").
- **Drop caps are required** on the first paragraph of long-form sections (Ancestral). They are 5em italic gold-leaf with a subtle letterpress text-shadow.
- **Marginalia uses Cormorant Italic at 0.95rem**, prefixed with a small-caps gold-leaf label ("Nota de Margem", "Manifesto"), separated from main column by a 1px rule.
- **Body line length capped at 38ch–65ch.** Pillar bodies clamp at 38ch. Editorial passages clamp at ~65ch via `max-width: 880px` containers.
- **Numbers in display are roman numerals** (I, II, III, IV, V) — pillars, journey etapas, nav sumário, footer edition number. Never Arabic numerals in ornamental positions.
- **Nav links are italic 500 with a roman small-caps numeral prefix** generated by CSS counters. Never duplicate the numeral in the markup.

### Banned
- **Inter, Geist, Satoshi, Outfit** — all banned. They are the SaaS register; this site is the editorial register.
- **System sans-serifs** (Helvetica, Arial, system-ui) — banned everywhere.
- **Generic serifs** — Times New Roman, Georgia, Palatino, EB Garamond — banned. (Cormorant Garamond is a distinct contemporary revival, not generic Garamond, and is the chosen display face on purpose.)
- **Mixed-serif body / sans-serif heading** — banned. Both faces are serif by design; the manuscript register collapses without it.
- **Monospace anywhere** — banned. There is no code, no metric, no timestamp on this site.
- **All-caps headlines** — banned. Use small caps for section overlines only.
- **Gradient text** — banned everywhere.

## 4. Component Stylings

### Buttons
- **Primary** (`btn--primary`): Forest fill (`#1F3A2C`), paper-cream label, italic Cormorant 500, 0.04em letter-spacing, 2px border-radius (letterpress, not pill). Inset 1px gold-leaf hairline + 1px paper-shade bottom border for letterpress depth. Hover deepens to Forest Deep and intensifies the inset gold hairline.
- **Gold** (`btn--gold`): Gold Leaf fill, Forest Deep label, same italic treatment. Used for the final CTA only.
- **Outlined Gold** (CTA Final variant): Transparent fill, gold-leaf border, gold-leaf label. Hovers to filled gold. Used inside the dark Forest Deep section so the button reads as ceremonial.
- **Inline Link** (`inline-link`): Cormorant italic 1.05rem, ink color, hand-drawn gold ink-stroke underline rendered via inline SVG data-URI background. On hover, color shifts to gold-leaf and letter-spacing widens 0.015em (subtle calligraphic stretch). A subscript `↘` glyph sits to the right.
- **No filled secondary buttons.** Twin equal-weight buttons in a CTA row are forbidden — pair a primary button with an inline link instead.
- **No glow, no neon, no shadow halos.** Letterpress depth only.

### Cards
- Cards are **forbidden as a default container**. The pillar section explicitly destroys the white-card-with-shadow pattern: pillars are presented as illuminated entries with hairline top-rules, breakthrough roman-numeral display caps, hand-drawn glyphs, and asymmetric column placement (`grid-column: 1/span 6 → 5/span 6 (offset 2.5rem) → 8/span 5`).
- The mission-vision-values pattern (`mvv-card`) and service cards on internal pages use **paper-tinted backgrounds with single hairline borders, square corners (`border-radius: 0`)**, and a 2px translateY hover that brightens the gold-leaf border. No shadow.
- **Cards never nest.** Ever.

### Inputs (forms — for future contact / association pages)
- Label above input, italic Cormorant 500, small-caps section overline style for required field markers.
- Input itself is a 1px ink-soft border on paper-deep fill, 0 radius, ~0.85rem ink-color body (Lora).
- Focus state: border darkens to forest, paper-deep fill brightens slightly, no outer ring glow.
- Error text below input in Vermilion italic, prefixed by a small `※` glyph.
- Submit buttons follow the primary button rules above.

### Icons / Glyphs
- **All glyphs are hand-drawn inline SVG**, stroke-width 1.0–1.2, `stroke-linecap: round`, `stroke-linejoin: round`, no fill. The cannabis-leaf decoration sets the precedent; pillar (chalice, mortar+pestle, asymmetric balance scale), trust (scroll, wax seal, caduceus echo, open hands), and triad icons all match its line-quality.
- **Icons rotate slightly (-4deg) and lift 2px on hover**, never bounce, never scale.
- **No icon fonts. No FontAwesome. No Lucide. No Material Icons.** Every glyph is custom-drawn for this codex.

### Loaders / Empty / Error States
- **Loaders:** skeletal grain-textured paper rectangles matching layout dimensions exactly. No spinners.
- **Empty states:** an ornamental fleuron (`❦`) centered, with Cormorant italic message in ink-soft, and a single gold inline-link to the next action. Never a blank "No results" line.
- **Error states:** inline below the offending field, vermilion italic, never a modal or toast.

### Ornament library
Reusable across pages:
- `.codex-rule` — flexbox horizontal rule with a centered gold glyph (`❦`, `⁂`, `❧`) and gradient-fade lines on both sides.
- `.codex-asterism` — three asterisks (`⁂`) in gold-leaf, centered, used to break long passages.
- `.codex-quote` — pull-quote block, italic Cormorant clamp(1.4rem, 2.2vw, 1.85rem), 2px gold-leaf left border, oversized opening quote glyph in gold, citation in small caps with a leading `—` rule.
- `.marginalia` — italic Cormorant 0.95rem, 1px gold-leaf left border, optional small-caps gold label.
- `.dropcap` — float-left first-letter, 5em italic gold-leaf with letterpress shadow.
- `.smallcaps` — `font-variant: small-caps`, 0.22em letter-spacing, weight 600.

## 5. Layout Principles

### Grid Architecture
- **CSS Grid only for structural layout.** Flexbox is reserved for inline elements (button-groups, nav rows, ornamental rules). Never `calc(percentage)` math.
- **The pillar grid is 12-column with deliberate offsets** at ≥900px: pillar I at columns 1–6, pillar II at columns 5–10 with a `translateY(2.5rem)` drop, pillar III at columns 8–12. This staggered offset is the section's signature — a flat 3-column grid is forbidden.
- **The hero grid is 1.55fr / 1fr** with the marginalia column on the right. Below 900px both columns collapse to single column and the marginalia falls below the title block.
- **Containers cap at 1180px (hero, pillars), 880px (ancestral long-form), 1140px (default sections).** Never edge-to-edge.

### Spacing Rhythm
- **Vertical rhythm is fluid:** sections use `padding-block: clamp(5rem, 9vw, 8rem)` to `clamp(7rem, 10vw, 10rem)`. Different sections deliberately use different clamps — variation creates rhythm.
- **Hairline rules separate sections,** not background color blocks. Vision and Trust sections use 1px gradient-fade rules at top and bottom; the journey section uses double horizontal rules; the ancestral section sits inside a soft radial paper-shade gradient.

### Hero Layout
- **Asymmetric, not centered.** Title and CTA are left-aligned in the wider left column. The right column carries marginalia (status notes, manifesto epigraph) and a faded cannabis silhouette.
- **No pill badge above the title.** The folio strip ("Fólio I · Codex Diamba · Anno MMXXIV") replaces it — italic Cormorant + small-caps gold-leaf folio number + 8px gold-leaf rotated-square separators.
- **Single primary CTA + one inline link.** Twin equal-weight buttons are forbidden.
- **No "scroll to explore" copy. No bouncing chevron. No down-arrow.**

### Section Headers
- All section headers use the same architecture: small-caps gold-leaf overline (italic Articulus number + topic), then italic Cormorant 500 title, then optional ornamental rule. The pillars header uses a special grid layout where the overline sits to the left of the title rather than above.

### Footer Layout
- Three-column on desktop (`2fr 1fr 1fr`), single-column below 768px.
- A "Cólofon — Diamba Sagrada" header strip is added via CSS pseudo-elements above the grid, with a centered gold-leaf asterism beneath.
- Bottom bar is italic Cormorant 0.82rem, prefixed by an ornamental `❧` glyph.

### Bans
- No centered hero.
- No horizontal "3 equal cards" feature row anywhere.
- No overlapping z-stacked elements (decorative SVG leaves at opacity 0.045–0.07 are atmospheric layers, not stacked content).
- No glassmorphism, no backdrop-blur cards (the scrolled nav is the single permitted backdrop-blur).
- No `h-screen` — `min-height` only when absolutely required.
- No edge-to-edge content. Always contained.

## 6. Motion & Interaction

The motion vocabulary is **slow, exponential, ceremonial**.

- **Page-enter and reveal duration:** 1100ms with cubic-bezier(0.22, 0.61, 0.36, 1). Translation offsets are small (14–20px). Opacity from 0 → 1.
- **Stagger:** reveal children inside `.stagger` cascade at 0/100/200/300/400ms.
- **Hover transitions:** 280–320ms ease-out for color and letter-spacing; 600ms ease-out for icon rotation. Never under 200ms (feels reactive), never over 700ms (feels broken).
- **Nav link underline:** hand-drawn SVG ink-stroke (data-URI) revealed by `transform: scaleX(0 → 1)` from `transform-origin: left`. Never animate width/right.
- **Pillar icon hover:** `transform: rotate(-4deg) translateY(-2px)` — the glyph nods, doesn't lift like a card.
- **Hero accent word:** the gold-leaf highlighter under "dignidade" is a static background-image, not animated. Restraint.
- **Scrolled nav:** crossfades to `rgba(241, 232, 211, 0.92)` paper with `backdrop-filter: saturate(140%) blur(8px)` and a hairline bottom shadow. 400ms.

### Banned
- No spring physics. No bounces, no overshoot, no elastic.
- No scroll-jacking, no parallax.
- No infinite micro-loop animations on idle elements (no shimmer, no pulse, no float). Animation is *triggered by intent* (scroll, hover, page-load), not perpetual.
- No animating layout properties (`top`, `left`, `width`, `height`, `padding`, `margin`). Only `transform` and `opacity`.
- No custom cursors.
- No video backgrounds, no Lottie, no GSAP. CSS-only motion + IntersectionObserver triggers.

## 7. Anti-Patterns (Banned — AI-Slop Tells)

The following are absolute bans. If a generated screen contains any of these, it has failed the brief.

### Visual
- **No pill badges above hero titles** ("Now in beta", "Associação de Pacientes" floating in a green-pale rounded chip). Replaced by the editorial folio strip.
- **No twin equal-weight CTA buttons.** Primary button + inline link only.
- **No centered hero with two CTAs side-by-side.**
- **No white card grids with `translateY(-4px) + box-shadow` hover.** This is the single most overused interaction pattern of the past five years.
- **No SaaS purple, no electric blue, no neon green.**
- **No gradient text on headlines.**
- **No emojis.** Unicode ornamental glyphs (`❦`, `⁂`, `❧`, `※`, `❀`) are *not emojis* and are the intentional ornamental vocabulary; emoji-style symbols (✨, 🌿, 🔒, 🌱) are forbidden.
- **No bouncing chevron, no "scroll to explore" copy, no down-arrow icon.**
- **No glassmorphism by default** (one purposeful backdrop-blur on scrolled nav is permitted).
- **No identical-card horizontal feature rows.** Pillars are staggered offset entries, not cards.
- **No nested cards.**
- **No side-stripe borders >1px as decorative accents** on cards or callouts.
- **No drop shadows over 8px blur radius.** Letterpress 1–2px only.

### Typography
- **No Inter, Geist, Satoshi, Outfit, Manrope.**
- **No system sans-serif.**
- **No generic Garamond, Times, Georgia, Palatino.**
- **No mixing serif body with sans-serif heading.**
- **No monospace.**
- **No all-caps headlines.**
- **No gradient text.**

### Copy
- **No em dashes** (—). Use commas, colons, semicolons, periods, parentheses. Also no `--`. (Note: this site uses em dashes intentionally in body prose because Portuguese editorial convention permits them — when generating *new* screens via Stitch, follow the no-em-dash rule.)
- **No AI marketing clichés:** "Elevate", "Seamless", "Unleash", "Next-Gen", "Empower", "Transform", "Revolution", "Redefine", "Cutting-edge", "AI-powered", "Built different". All banned.
- **No restated headings as subtitles** ("About Us — Learn about us").
- **No fake round-number testimonials** ("99.99% uptime", "10,000+ happy patients").
- **No generic placeholder names** ("John Doe", "Acme Corp", "Nexus Health").
- **No filler UI text:** "Scroll to explore", "Swipe to continue", "Loading...", "Please wait".

### Imagery
- **No stock-photo healthcare imagery** (smiling diverse doctors with arms crossed, hands holding pills, pill bottles on wood desks, families silhouetted at sunset).
- **No cannabis-leaf clipart.** All botanical illustrations are line-drawn SVG matching the existing path style (stroke 0.6–1.2, round caps, asymmetric organic curves).
- **No broken Unsplash links.** Use the project's existing assets (`logo.png`, `marca-dagua-branca.png`, `marca-dagua-dourada.png`, `marca-dagua-escura.png`) or generate inline SVG.

### Structural
- **No 3-column equal feature grids.**
- **No flat symmetric layouts above 900px viewport.**
- **No `<div>` soup** — use `<article>`, `<aside>`, `<section>`, `<nav>`, `<figure>`, `<blockquote>`, `<cite>` semantically.
- **No accessibility shortcuts.** Every interactive element has visible focus, every decorative SVG has `aria-hidden="true"`, every meaningful image has descriptive `alt`.

---

## Reference: Token Map (machine-readable)

```css
/* Surfaces */
--paper:        #F1E8D3;
--paper-deep:   #E8DCBE;
--paper-shade:  #D9C9A2;
--forest:       #1F3A2C;
--forest-deep:  #14271E;

/* Ink */
--ink:          #1B2A21;
--ink-soft:     #4D5C53;
--ink-faded:    rgba(27, 42, 33, 0.55);

/* Accent */
--gold-leaf:    #B7902F;
--gold-deep:    #936F1C;
--sepia:        #8A6A45;
--vermilion:    #A6432B;

/* Structural */
--rule:         rgba(45, 64, 47, 0.22);
--rule-strong:  rgba(45, 64, 47, 0.42);

/* Typography */
--font-display: 'Cormorant Garamond', Georgia, serif;
--font-body:    'Lora', 'Libre Baskerville', serif;

/* Motion */
--ease-codex:   cubic-bezier(0.22, 0.61, 0.36, 1);
--duration-reveal: 1100ms;
```

---

When generating new screens for this codex, treat the rules above as load-bearing. The site's authority — the reason a frightened patient or family member trusts it — comes from the consistency of this manuscript register. Do not soften it toward SaaS defaults, do not modernize the typography toward sans-serifs, do not introduce a brand-color accent beyond gold-leaf, and do not add a single decorative emoji. The voice is editorial, ancestral, and quiet on purpose.
