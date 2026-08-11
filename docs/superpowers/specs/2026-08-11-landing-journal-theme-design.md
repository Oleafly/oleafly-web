# Landing page: scholarly journal theme

**Date:** 2026-08-11  
**Status:** Approved for planning (user confirmed scope A, intensity B, accent B, structure A, theme A, visual system + approach 1)  
**Scope:** `oleafly.com` landing page only (`src/views/LandingPage.astro` and landing-local assets). Docs, learn, tools, blog, and shared `SiteLayout` stay on the existing dark/Mintlify systems.

## Goal

Restyle the home page to feel like an **18th-century scholarly journal / parchment title plate**—aged paper, sepia ink, classical serif display type, restrained bronze ornaments—while remaining a clear product landing page for Oleafly (local-first writing studio).

Reference mood: parchment ground, ornamental corner flourishes, double rules, framed serif title (user-provided history presentation slide). Intensity is **scholarly journal**, not full costume manuscript.

## Non-goals

- Site-wide theme change (docs/Starlight, learn, tools, blog marketing shell)
- Dark mode variant for landing
- New sections, copy rewrites, or i18n key changes
- Full Magic UI component library rewrite
- Changing app product colors inside screenshots

## Decisions (locked)

| Decision | Choice |
|----------|--------|
| Scope | Landing only |
| Intensity | Scholarly journal (restrained ornaments) |
| Accent | Quiet ink + one academic blue/indigo for primary CTA + key links |
| Structure | Restyle in place — same sections, same i18n keys |
| Color mode | Light-only landing (force parchment; no dark parchment) |
| Implementation | CSS/token-first restyle; selective motion stripping |

## Visual system

### Palette

| Token role | Direction | Notes |
|------------|-----------|--------|
| `--bg` | Aged cream parchment `~#F3EAD7`–`#EDE3CF` | Page ground |
| `--bg-deep` | Slightly deeper parchment for footer / contrast bands | Still warm, not gray |
| `--surface` / `--surface-2` | Darker paper `~#E8DCC4` / `~#DFD2B8` | Cards, code chips |
| `--text` | Near-black brown ink `~#2C2416` | Body |
| Headlines | Deeper ink `~#1A140C` | Serif display |
| `--muted` | Warm taupe ink `~#6B5E4E` | Secondary text |
| `--line` / rules | Muted bronze `~#8B7355` at low opacity | Borders, hairlines |
| Ornament gold | `~#A68B5B` | Corner flourishes, double rules (sparse) |
| `--brand` | Academic indigo (not electric `#2563EB`) | e.g. `#2F4A8A`–`#3D5A80` range; pick one and tune contrast |
| `--brand-hover` | Slightly lighter/darker indigo for hover | WCAG AA on parchment |
| `--brand-text` | Indigo for inline links on parchment | Readable on cream |
| Success / logo leaf | Keep Oleafly green where brand mark requires it | Logo path may stay `#34B44A` or a slightly muted leaf green |

Paper grain: CSS-only subtle noise (SVG filter or tiny data-URI noise) at **very low** opacity; no heavy texture images required for v1.

### Typography

| Role | Choice |
|------|--------|
| Display / H1–H2 | Self-hosted classical serif — **Source Serif 4** (preferred) or Literata |
| Body UI | Same serif at text sizes **or** a warm readable face; prefer **Source Serif 4** for true journal cohesion if metrics hold at 15–16px; if body feels heavy, use a restrained humanist fallback only on dense UI chrome (nav, buttons) |
| Mono | Keep **JetBrains Mono** for code |

Self-host woff2 under `public/fonts/` (latin + latin-ext if feasible). Preload display font on landing. Update head preloads (drop Inter preload on landing if unused).

### Shape & chrome

- Radii: tighter than SaaS defaults — **2–4px** primary; avoid large pills except existing small badge if needed
- Cards: paper surface, 1px bronze border, soft warm shadow (no glassmorphism)
- Screenshots: **plate frames** — double rule, small caption under figure where captions already exist or are trivial to style
- Nav: parchment bar, thin bronze bottom rule, ink wordmark; sticky OK if translucent parchment (not dark glass)
- Scroll progress: thin bronze/ink line (keep `ScrollProgress`, restyle color)

### Motion & Magic UI

| Component | Action |
|-----------|--------|
| `RainbowLink` / rainbow CTAs | **Replace** with solid academic-blue / ink `.btn-primary` |
| `AnimatedShinyText` | **Remove** shimmer; plain ink badge/pill |
| `BorderBeam` | **Remove** or replace with static double-rule frame |
| `DotPattern` (white dots on dark) | **Replace** with subtle paper grain or remove |
| `VelocityStrip` | **Remove** or heavily restyle if it reads as modern marquee noise |
| `KineticText` / loud kinetic | Prefer static serif headline or very subtle fade |
| `NoiseTexture` | May keep if it reads as paper; lower opacity, warm tint |
| `WordRotate` | Keep only if typography stays elegant on parchment; else static first word |
| `Highlighter` | Restyle highlight color to warm wash (sepia/indigo wash), not neon |
| `BentoSection`, file tree, code comparison, marquee logos | **Keep structure**; restyle via tokens / class overrides |
| `GlyphMatrix` | Restyle colors or simplify to static ornament |
| `PhilosophyReveal` | Keep if content-critical; ensure colors inherit journal tokens |
| `ScrollProgress` | Keep; bronze/ink track |

### Force light

- Landing `html`/`body` always journal light tokens.
- Ignore or override any global `data-theme="dark"` for this page only.
- Theme toggle: if present only on other layouts, no change; if anything on landing forces dark, disable for this view.

## Content & structure (unchanged)

Sections remain, in order:

1. Nav  
2. Hero  
3. Features (`#features` / bento)  
4. Library, templates, git, disk, AI, preflight, resume stack-cards  
5. Compare (`#compare`)  
6. Privacy  
7. Velocity (if retained after restyle decision)  
8. Philosophy  
9. How it works  
10. Craft  
11. Download  
12. Footer  

Copy continues to use existing `t(locale, "landing.*")` keys. No new marketing copy required for v1.

## File-level plan

### Primary

| File | Change |
|------|--------|
| `src/views/LandingPage.astro` | Token block (`:root` in scoped/page `<style>`); button/nav/hero/card/footer rules; swap Rainbow CTAs for `.btn-primary`; strip/replace Magic UI usages per table; force light; update file header design-system comment; font preloads |
| `src/styles/fonts.css` | Add Source Serif 4 (or chosen serif) `@font-face` |
| `public/fonts/*` | Add self-hosted serif woff2 files |

### Secondary (only if needed for inheritance)

| File | Change |
|------|--------|
| `src/components/RainbowLink.tsx` | Prefer **not** editing shared component; replace call sites on landing with plain buttons |
| `src/components/BentoSection.tsx` | Token-driven colors if hard-coded dark hexes exist |
| `src/components/VelocityStrip.tsx` | Remove from landing **or** token restyle |
| `src/components/PhilosophyReveal.tsx` | Ensure no hard-coded dark-only colors |
| `src/components/magicui/*` | Prefer className overrides from landing; edit components only if colors are hard-coded and block the theme |
| `src/styles/landing.css` | **Do not** force journal theme site-wide; landing styles stay page-scoped in `LandingPage.astro` unless a tiny shared helper is cleaner |

### Out of scope files

- `src/styles/theme.css` (Starlight docs)
- `src/layouts/SiteLayout.astro` marketing pages
- i18n locale files (unless a class name string is embedded, which it should not be)

## Implementation approach

1. Create branch from current work base (e.g. `feat/landing-journal-theme`).
2. Add serif font files + `fonts.css` entries.
3. Replace landing CSS token block and core chrome (body, nav, buttons, cards, section titles).
4. Restyle hero as title-plate: optional SVG/CSS corner flourishes, double rule under title, remove dark glow/dot pattern.
5. Swap primary CTAs off `RainbowLink`.
6. Walk Magic UI usages; remove or recolor per table.
7. Plate-frame images and compare table for parchment readability.
8. Visual QA at mobile + desktop; check contrast (body text, muted, links, CTA).
9. `pnpm test` + `pnpm build` (or minimal landing build path if documented).

## Success criteria

- Landing immediately reads as scholarly journal / parchment, not Linear dark SaaS.
- All existing sections and locale strings still work.
- Primary download CTA remains obvious (academic blue on parchment).
- Ornaments are sparse (hero + major breaks), not wallpaper.
- No regression to docs/learn/tools themes.
- Lighthouse-level performance: self-hosted fonts only; no large texture bitmaps; reduced client motion JS where components are removed.
- WCAG AA for body text and primary CTA on parchment.

## Risks & mitigations

| Risk | Mitigation |
|------|------------|
| Hard-coded dark colors inside React islands | Grep hex in bento/philosophy/velocity; pass classes or CSS variables |
| Serif body feels slow or heavy | Use serif for display; slightly tighter body size/line-height; optional sans only on dense nav |
| Screenshots of dark app UI clash | Plate frames + caption; don’t recolor screenshots in v1 |
| i18n long strings break title-plate | Keep fluid type (`clamp`); test de/ru/ja hero |
| Unrelated dirty file `ship-status.json` | Leave untouched on branch unless user asks |

## Open implementation details (non-blocking)

- Exact indigo hex after contrast check on `#F3EAD7`
- Source Serif 4 variable vs static weights (400/600/700)
- Whether `VelocityStrip` is removed entirely in first PR (default: remove if it fights the theme)

## Approval

User confirmed: landing-only, scholarly journal intensity, ink + academic blue, restyle-in-place, light-only, CSS-first approach and visual system. This document is the implementation source of truth for the follow-up plan.
