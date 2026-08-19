# Contributing to oleafly.com

Thanks for wanting to help. Translation fixes, docs corrections, and typo hunts are
the most useful contributions here, and small PRs get reviewed fastest.

## The licensing part, in plain words

This repo is under the PolyForm Strict License 1.0.0, which normally doesn't allow
modified copies. Contributing is the exception, and we grant it here explicitly:

You may fork this repository and modify your fork for one purpose: preparing and
submitting a contribution back to this project. By opening a pull request, you agree
that Oleafly may use, modify, distribute, and relicense your contribution as part of
the project.

What this means in practice: you can't take the site and republish it as your own,
but you can absolutely fix our Japanese docs or correct a broken link, and we'd be
glad if you did.

## How to contribute

1. Fork, branch, make your change.
2. Run `pnpm test` and `pnpm build` before opening the PR — those two are the gates.
3. For translation work, `pnpm i18n:coverage` shows which locales need attention.
4. Keep PRs small and focused. One fix per PR beats ten.

English pages live in `src/pages/`, localized mirrors in `src/pages/[lang]/`, and
both wrap shared views in `src/views/`. Starlight docs content is under
`src/content/docs/`.
