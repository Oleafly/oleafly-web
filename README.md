# oleafly.com

The website for [Oleafly](https://github.com/Oleafly/Oleafly) — landing page at `/`, product documentation at `/docs/*`. Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build), deployed as a fully static site on Cloudflare Pages.

## Structure

| Path | What |
|---|---|
| `src/pages/index.astro` | The landing page (self-contained: markup, styles, and a little JS) |
| `src/content/docs/docs/` | Documentation pages (Starlight routes them under `/docs/*`) |
| `src/styles/` | Starlight theme (docs only; the landing page has its own styles) |
| `public/media/` | Screenshots and GIFs shared with the app repo's README |
| `public/llms.txt` | AEO: a summary of the product for AI crawlers |
| `public/_headers` | Cloudflare Pages cache/security headers |

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # static output in dist/
pnpm preview
```

## Deploy (Cloudflare Pages)

- **Build command:** `pnpm build`
- **Build output directory:** `dist`
- **Custom domain:** `oleafly.com`

No environment variables or server functions required — the site is 100% static. A sitemap is generated automatically at `/sitemap-index.xml` (Starlight's built-in integration), referenced from `public/robots.txt`.

## Updating docs

Doc pages are authored directly in `src/content/docs/docs/` (they were originally synced from the app repo's `docsite/`; this site is now the standalone source). Sidebar order lives in `astro.config.mjs`.
