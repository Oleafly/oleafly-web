---
title: "Auto-updates"
description: "How Oleafly builds, signs, verifies, and publishes its cross-platform updater feed."
---

Oleafly uses Tauri's updater plugin. On launch, the app checks the latest GitHub release and opens its own update window when a newer version is available. Users can also check from the application menu or **About → Check for updates**.

## Release feed

Each platform build creates signed updater artifacts and a `latest.json` fragment. The release workflow keeps those fragments separate until all four builds finish, then merges the entries owned by each target into one canonical manifest.

The final manifest must contain entries for macOS Apple Silicon, Windows x64, Linux x64, and Linux ARM64. It stays attached to a draft release until a maintainer runs the guarded publish workflow. Installed apps do not see the draft.

The app downloads `latest.json` from GitHub Releases. Before installation, Tauri verifies the updater signature against the public key embedded in `src-tauri/tauri.conf.json`. Missing, unsigned, or altered artifacts are rejected.

Release notes come from the matching section in `CHANGELOG.md`. The workflow extracts that section and uses it for both the GitHub release body and the updater window.

## Signing keys

The public updater key is committed in `src-tauri/tauri.conf.json`. The private key belongs only in GitHub Actions secrets:

- `TAURI_SIGNING_PRIVATE_KEY`
- `TAURI_SIGNING_PRIVATE_KEY_PASSWORD`

Never commit the private key. If it is exposed, generate a new pair, update the repository secret, and replace the embedded public key. Existing installations trust their embedded key, so a rotation requires a planned manual update path.

Operating system signing is separate from updater signing. macOS builds use Apple code signing and notarization when the release secrets are present. Windows builds use Azure Artifact Signing when its credentials are present.

## Failure and rollback

A failed check or download leaves the installed application unchanged. Signature failure blocks installation. The application restarts only after the verified download installs successfully.

Oleafly does not automatically roll back a completed update. To return to an earlier version, close the app, back up important projects, download the earlier official installer, verify it, and install it over the current version.

See [Releasing Oleafly](/docs/engineering/releasing/) for the draft and publish process.
