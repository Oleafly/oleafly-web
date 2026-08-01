<div align="center">

# oleafly.com

### The web home of [Oleafly](https://github.com/Oleafly/Oleafly), the free, open-source, local-first LaTeX studio.

[![Deploy](https://github.com/Oleafly/oleafly-web/actions/workflows/deploy.yml/badge.svg)](https://github.com/Oleafly/oleafly-web/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-22c55e.svg)](LICENSE)
[![Lighthouse desktop](https://img.shields.io/badge/Lighthouse_desktop-98_·_100_·_100_·_100-22c55e)](https://oleafly.com)
[![Lighthouse mobile](https://img.shields.io/badge/Lighthouse_mobile-83_·_100_·_100_·_100-3b82f6)](https://oleafly.com)
[![Stars](https://img.shields.io/github/stars/Oleafly/oleafly-web?style=social)](https://github.com/Oleafly/oleafly-web)

<a href="https://oleafly.com"><img src=".github/site.png" alt="oleafly.com" width="90%" /></a>

**[oleafly.com](https://oleafly.com) · [Docs](https://oleafly.com/docs/overview/) · [Download the app](https://github.com/Oleafly/Oleafly/releases/latest)**

</div>

<br/>

This repo is the website: the page you see at [oleafly.com](https://oleafly.com) and the product docs at [oleafly.com/docs](https://oleafly.com/docs/overview/). If you're looking for the app itself, that lives at [Oleafly/Oleafly](https://github.com/Oleafly/Oleafly).

Built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build). Everything is static. No server, no database, no third-party requests, and the only JavaScript that ships is for the animations.

## Run it locally

You need Node 22+ and pnpm.

```bash
git clone https://github.com/Oleafly/oleafly-web.git
cd oleafly-web
pnpm install
pnpm dev
```

Open http://localhost:4321 and you're looking at the site. Edits reload live.

## Where things live

The marketing landing is `src/views/LandingPage.astro` (wired from `src/pages/index.astro` and `src/pages/[lang]/index.astro`). Docs are markdown under `src/content/docs/docs/`. Blog and Learn lessons live in `src/content/blog/` and `src/content/learn/` with per-locale subfolders (`zh-cn/`, `ja/`, …).

A few other places you might touch:

- `src/i18n/` — locales, paths, UI dictionaries (`ui/en.ts` + `ui/generated.ts`), template catalog
- `src/components/` — interactive pieces (bento grid, language switcher, confetti)
- `public/media/` — screenshots and demo videos shared with the app's README
- `src/styles/theme.css` — docs theme (the landing does not use it)

## Internationalization (i18n)

The site ships **18 locales**. English is the default at the site root (no URL prefix). Every other language is a first-class path under `/{locale}/…` (for example `https://oleafly.com/zh-cn/learn/`). The header language switcher shows a **flag + native name** for each option (flag images, not emoji, so they render on Windows too).

### Supported languages

Source of truth: `src/i18n/locales.ts` (`LOCALES` + `LOCALE_META`). Switcher order is the table order below (English first, then major Asian markets, then the rest).

| Flag | Locale code | Native name | English name | URL | BCP-47 |
|:----:|:-----------:|-------------|--------------|-----|--------|
| <img src="https://flagcdn.com/w40/us.png" width="20" height="15" alt="United States" /> | `en` | English | English | `/` (default) | `en` |
| <img src="https://flagcdn.com/w40/cn.png" width="20" height="15" alt="China" /> | `zh-cn` | 简体中文 | Chinese (Simplified) | `/zh-cn/` | `zh-CN` |
| <img src="https://flagcdn.com/w40/tw.png" width="20" height="15" alt="Taiwan" /> | `zh-tw` | 繁體中文 | Chinese (Traditional) | `/zh-tw/` | `zh-TW` |
| <img src="https://flagcdn.com/w40/jp.png" width="20" height="15" alt="Japan" /> | `ja` | 日本語 | Japanese | `/ja/` | `ja` |
| <img src="https://flagcdn.com/w40/kr.png" width="20" height="15" alt="South Korea" /> | `ko` | 한국어 | Korean | `/ko/` | `ko` |
| <img src="https://flagcdn.com/w40/es.png" width="20" height="15" alt="Spain" /> | `es` | Español | Spanish | `/es/` | `es` |
| <img src="https://flagcdn.com/w40/br.png" width="20" height="15" alt="Brazil" /> | `pt-br` | Português | Portuguese (Brazil) | `/pt-br/` | `pt-BR` |
| <img src="https://flagcdn.com/w40/fr.png" width="20" height="15" alt="France" /> | `fr` | Français | French | `/fr/` | `fr` |
| <img src="https://flagcdn.com/w40/de.png" width="20" height="15" alt="Germany" /> | `de` | Deutsch | German | `/de/` | `de` |
| <img src="https://flagcdn.com/w40/in.png" width="20" height="15" alt="India" /> | `hi` | हिन्दी | Hindi | `/hi/` | `hi` |
| <img src="https://flagcdn.com/w40/it.png" width="20" height="15" alt="Italy" /> | `it` | Italiano | Italian | `/it/` | `it` |
| <img src="https://flagcdn.com/w40/nl.png" width="20" height="15" alt="Netherlands" /> | `nl` | Nederlands | Dutch | `/nl/` | `nl` |
| <img src="https://flagcdn.com/w40/pl.png" width="20" height="15" alt="Poland" /> | `pl` | Polski | Polish | `/pl/` | `pl` |
| <img src="https://flagcdn.com/w40/ru.png" width="20" height="15" alt="Russia" /> | `ru` | Русский | Russian | `/ru/` | `ru` |
| <img src="https://flagcdn.com/w40/ua.png" width="20" height="15" alt="Ukraine" /> | `uk` | Українська | Ukrainian | `/uk/` | `uk` |
| <img src="https://flagcdn.com/w40/tr.png" width="20" height="15" alt="Turkey" /> | `tr` | Türkçe | Turkish | `/tr/` | `tr` |
| <img src="https://flagcdn.com/w40/sa.png" width="20" height="15" alt="Saudi Arabia" /> | `ar` | العربية | Arabic (RTL) | `/ar/` | `ar` |
| <img src="https://flagcdn.com/w40/vn.png" width="20" height="15" alt="Vietnam" /> | `vi` | Tiếng Việt | Vietnamese | `/vi/` | `vi` |

Examples:

- Japanese learn index → https://oleafly.com/ja/learn/
- Simplified Chinese home → https://oleafly.com/zh-cn/
- Spanish templates → https://oleafly.com/es/templates/
- Hindi tools → https://oleafly.com/hi/tools/

**Language is not forced by country (geo-IP).** Behavior is on-demand and preference-based:

1. **URL** — `/zh-cn/…` always wins for that page  
2. **Saved choice** — switcher writes `localStorage.oleafly-locale`; bare `/` soft-redirects once per session  
3. **Browser languages** — on first visit to `/` only, a one-time banner suggests a match (`navigator.languages`); user can switch or stay in English  
4. **Deep links** — never rewritten  

No “China → Chinese / India → Hindi” hard lock.

| What stays English (by design) | What is translated |
|--------------------------------|--------------------|
| URL slugs, LaTeX/Typst source, code fences | UI chrome, landing sections, template names/descriptions |
| Product tokens (LaTeX, Git, BibTeX, KaTeX, …) | Blog/learn titles, descriptions, and prose bodies (where available) |

### Coverage tracker

```bash
pnpm i18n:coverage          # terminal table + writes src/i18n/coverage-report.{json,md}
pnpm i18n:coverage:md       # also refreshes the README block below
```

<!-- i18n-coverage:start -->
## i18n coverage

Generated: `2026-08-01T05:15:34.669Z`

| Surface | English source |
|---------|----------------|
| UI strings | 481 keys |
| Learn lessons | 139 |
| Blog posts | 19 |
| Locales in switcher | 18 (incl. English) |
| Chinese in switcher | yes — 简体中文 + 繁體中文 |

### Target markets (composite score)

| Locale | Composite | UI | Learn meta | Learn body | Blog meta | Blog body | Templates |
|--------|-----------|----|------------|------------|-----------|-----------|-----------|
| `zh-cn` | **100%** | 100% | 100% | 100% | 100% | 100% | 100% |
| `zh-tw` | **100%** | 100% | 100% | 100% | 100% | 100% | 100% |
| `ja` | **100%** | 100% | 100% | 100% | 100% | 100% | 100% |
| `ko` | **100%** | 100% | 100% | 100% | 100% | 100% | 100% |
| `es` | **97.1%** | 92.9% | 99.3% | 100% | 100% | 100% | 100% |
| `pt-br` | **99.4%** | 98.8% | 99.3% | 100% | 100% | 100% | 100% |
| `fr` | **99.7%** | 99.6% | 99.3% | 100% | 100% | 100% | 100% |
| `de` | **99.6%** | 99.2% | 99.3% | 100% | 100% | 100% | 100% |
| `hi` | **100%** | 100% | 100% | 100% | 100% | 100% | 100% |
| `it` | **62.5%** | 98.5% | 51.8% | 51.8% | 0% | 0% | 100% |
| `nl` | **44.1%** | 97.7% | 0% | 0% | 0% | 0% | 100% |
| `pl` | **44.8%** | 99.4% | 0% | 0% | 0% | 0% | 100% |
| `ru` | **45%** | 100% | 0% | 0% | 0% | 0% | 100% |
| `uk` | **44.5%** | 98.8% | 0% | 0% | 0% | 0% | 100% |
| `tr` | **44.8%** | 99.4% | 0% | 0% | 0% | 0% | 100% |
| `ar` | **45%** | 100% | 0% | 0% | 0% | 0% | 100% |
| `vi` | **44.8%** | 99.4% | 0% | 0% | 0% | 0% | 100% |

### All locales

| Locale | UI % | Learn body % | Blog body % | Templates % | Composite |
|--------|------|--------------|-------------|-------------|-----------|
| `ar` | 100% | 0% | 0% | 100% | 45% |
| `de` | 99.2% | 100% | 100% | 100% | 99.6% |
| `es` | 92.9% | 100% | 100% | 100% | 97.1% |
| `fr` | 99.6% | 100% | 100% | 100% | 99.7% |
| `hi` | 100% | 100% | 100% | 100% | 100% |
| `it` | 98.5% | 51.8% | 0% | 100% | 62.5% |
| `ja` | 100% | 100% | 100% | 100% | 100% |
| `ko` | 100% | 100% | 100% | 100% | 100% |
| `nl` | 97.7% | 0% | 0% | 100% | 44.1% |
| `pl` | 99.4% | 0% | 0% | 100% | 44.8% |
| `pt-br` | 98.8% | 100% | 100% | 100% | 99.4% |
| `ru` | 100% | 0% | 0% | 100% | 45% |
| `tr` | 99.4% | 0% | 0% | 100% | 44.8% |
| `uk` | 98.8% | 0% | 0% | 100% | 44.5% |
| `vi` | 99.4% | 0% | 0% | 100% | 44.8% |
| `zh-cn` | 100% | 100% | 100% | 100% | 100% |
| `zh-tw` | 100% | 100% | 100% | 100% | 100% |

### How to refresh

```bash
# Coverage report
pnpm i18n:coverage
pnpm i18n:coverage -- --markdown

# Fill content (meta or full body; code fences protected)
node scripts/translate-site-content.mjs --locales=zh-cn,zh-tw --only=learn
node scripts/translate-site-content.mjs --locales=zh-cn,zh-tw --only=blog

# Fill UI dictionary overrides
node scripts/translate-ui-gtx.mjs --locales=zh-cn,zh-tw
```

**Note:** LaTeX/Typst source, URL slugs, and product tokens (LaTeX, Git, BibTeX, …) stay untranslated by design.
<!-- i18n-coverage:end -->

### Filling gaps toward 100%

```bash
# UI dictionary (landing, tools, learn chrome, …)
pnpm i18n:translate:ui -- --locales=zh-cn,zh-tw,ja,ko

# Content: meta-only (titles/descriptions) or full bodies (code fences protected)
pnpm i18n:translate:content -- --locales=zh-cn,zh-tw --only=learn
pnpm i18n:translate:content -- --locales=zh-cn,zh-tw --only=blog
pnpm i18n:translate:content -- --locales=zh-cn,zh-tw,ja,ko --only=templates
```

### Compare matrix note (OpenAI Prism)

OpenAI markets [Prism](https://openai.com/prism/) as a **free** LaTeX workspace for anyone with a ChatGPT personal account (Free/Go/Plus/Pro). Official launch copy also states that **more powerful AI features will be available through paid ChatGPT plans over time**. Our compare table therefore says: **“Free base; full AI on paid ChatGPT”** — not “requires a paid subscription for the app itself,” but not “all AI is unlimited free” either.

## Contributing

Typo fixes and small improvements: open a pull request directly, no need to ask first.

Bigger changes (new sections, layout changes, new pages): open an issue first so we can talk it through. The page is deliberately tight and we say no to most additions, not because they're bad ideas but because a short page that loads fast is one of our primary goals.

Run `pnpm build` before you push. If the build passes locally it will pass in CI.

## How deploys work

Every push to `main` deploys automatically. A GitHub Action builds the site and uploads it to Cloudflare Pages, usually live within a minute. Pull requests don't deploy, so you can't break production with one.

`www.oleafly.com` and `docs.oleafly.com` both redirect to the main domain (`docs.oleafly.com/faq` lands on `oleafly.com/docs/faq`).

## License

MIT. The Oleafly app itself is AGPL-3.0, but this website's code is free to reuse however you like.
