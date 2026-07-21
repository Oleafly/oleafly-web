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

Every push to `main` deploys automatically via GitHub Actions (`.github/workflows/deploy.yml`), which builds the site and uploads `dist/` to the `oleafly` Cloudflare Pages project with wrangler. The workflow needs two repo secrets: `CLOUDFLARE_API_TOKEN` (Account: Cloudflare Pages Edit) and `CLOUDFLARE_ACCOUNT_ID`.

Manual deploy from a checkout: `pnpm deploy` (reads the same credentials from `.env`, see `.env` in `.gitignore`).

- **Production:** [oleafly.com](https://oleafly.com) (`www.` and `docs.` 301-redirect to it, `docs.oleafly.com/x` lands on `/docs/x`)
- The site is 100% static: no environment variables at runtime, no server functions. A sitemap is generated at `/sitemap-index.xml` and referenced from `public/robots.txt`.

## Updating docs

Doc pages are authored directly in `src/content/docs/docs/` (they were originally synced from the app repo's `docsite/`; this site is now the standalone source). Sidebar order lives in `astro.config.mjs`.
