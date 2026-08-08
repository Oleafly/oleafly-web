<div align="center">

# oleafly.com

### The website and documentation for [Oleafly](https://github.com/Oleafly/Oleafly), a free and open-source local-first writing studio.

[![CI](https://img.shields.io/github/actions/workflow/status/Oleafly/oleafly-web/deploy.yml?branch=main&label=CI)](https://github.com/Oleafly/oleafly-web/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-22c55e.svg)](LICENSE)
[![Lighthouse desktop](https://img.shields.io/badge/Lighthouse_desktop-98_·_100_·_100_·_100-22c55e)](https://oleafly.com)
[![Lighthouse mobile](https://img.shields.io/badge/Lighthouse_mobile-83_·_100_·_100_·_100-3b82f6)](https://oleafly.com)
[![Stars](https://img.shields.io/github/stars/Oleafly/oleafly-web?style=social)](https://github.com/Oleafly/oleafly-web)

<a href="https://oleafly.com"><img src=".github/site.png" alt="oleafly.com" width="90%" /></a>

**[oleafly.com](https://oleafly.com) · [Docs](https://oleafly.com/docs/overview/) · [Download the app](https://github.com/Oleafly/Oleafly/releases/latest)**

</div>

<br/>

This repository contains [oleafly.com](https://oleafly.com) and its [product documentation](https://oleafly.com/docs/overview/). The desktop app lives in [Oleafly/Oleafly](https://github.com/Oleafly/Oleafly).

The site uses [Astro](https://astro.build) and [Starlight](https://starlight.astro.build) and deploys as static files. It has no application server or database. Client JavaScript supports interactive pages, navigation, localization, and privacy-aware analytics. The production build also fetches release and project data used to generate static pages.

## Run it locally

You need Node 22+ and pnpm.

```bash
git clone https://github.com/Oleafly/oleafly-web.git
cd oleafly-web
pnpm install
pnpm dev
```

Open <http://localhost:4321>. Edits reload as you work.

## Supported languages

The site ships **18 locales**. English is the default at the site root (no URL prefix). Every other language is a first-class path under `/{locale}/…` (for example `https://oleafly.com/zh-cn/learn/`). The header language switcher shows a **flag + native name** for each option.

| Flag | Locale | Native name | English name | URL | BCP-47 |
|:----:|:------:|-------------|--------------|-----|--------|
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

Language is **not** forced by country or IP address. The URL always wins. The switcher can save a preference, and the home page may suggest a browser-language match on a first visit. Shared deep links are never rewritten.

## Contributing

For typo fixes and small improvements, open a pull request directly.

For new sections, layout changes, or new pages, open an issue first. Keeping the site focused and fast is a product requirement.

Run `pnpm test` and `pnpm build` before you push.

## How deploys work

Every push to `main` deploys automatically. A GitHub Action builds the site and uploads it to Cloudflare Pages, usually live within a minute. Pull requests don't deploy, so you can't break production with one.

`www.oleafly.com` and `docs.oleafly.com` both redirect to the main domain (`docs.oleafly.com/faq` lands on `oleafly.com/docs/faq`).

## License

MIT. The Oleafly app itself is AGPL-3.0, but this website's code is free to reuse however you like.
