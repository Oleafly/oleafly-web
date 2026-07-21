# oleafly.com

This is the website for [Oleafly](https://github.com/Oleafly/Oleafly), the local-first LaTeX studio. It's two things in one repo: the landing page at [oleafly.com](https://oleafly.com) and the product docs at [oleafly.com/docs](https://oleafly.com/docs).

Built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build). Everything is static. There's no server, no database, and the only JavaScript that ships is for the landing page animations.

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

The landing page is one file: `src/pages/index.astro`. Markup, styles, and scripts are all in there, so if you want to change the hero text or a section, that's the place.

The docs are markdown files in `src/content/docs/docs/`. One file per page. Fix a typo, save, done. If you add a new page, also add it to the sidebar in `astro.config.mjs` so people can find it.

A few other places you might touch:

- `src/components/` holds the interactive pieces (the bento grid, the file tree, the confetti). Most are React with small CSS animations defined in `src/styles/magicui.css`.
- `public/media/` has the screenshots and demo videos shared with the app's README.
- `src/styles/theme.css` is the docs theme. The landing page doesn't use it.

## Contributing

Typo fixes and small improvements: open a pull request directly, no need to ask first.

Bigger changes (new sections, layout changes, new pages): open an issue first so we can talk it through. The landing page is deliberately tight and we say no to most additions, not because they're bad ideas but because a short page that loads fast is the point.

Two writing rules for anything user-facing, learned the hard way:

1. Be accurate. Don't claim things the app doesn't do. When in doubt, check the [app's README](https://github.com/Oleafly/Oleafly) or ask.
2. Keep the copy plain. No em dashes, no semicolons, no marketing fluff.

Run `pnpm build` before you push. If the build passes locally it will pass in CI.

## How deploys work

Every push to `main` deploys automatically. A GitHub Action builds the site and uploads it to Cloudflare Pages, usually live within a minute. Pull requests don't deploy, so you can't break production with one.

`www.oleafly.com` and `docs.oleafly.com` both redirect to the main domain (`docs.oleafly.com/faq` lands on `oleafly.com/docs/faq`).

One thing to know if you add images or video: Cloudflare rejects files over 25MB. Use MP4 for screen recordings, not GIF. An `ffmpeg` one-liner gets a 45MB GIF down to 2MB.

## License

MIT. The Oleafly app itself is AGPL-3.0, but this website's code is free to reuse however you like.
