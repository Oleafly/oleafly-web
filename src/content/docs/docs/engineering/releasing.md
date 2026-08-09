---
title: "Releasing Oleafly"
description: "Build a complete draft from a version tag, review every platform artifact, then publish through the guarded release workflow."
---

Oleafly releases have two deliberate stages. A version tag builds and verifies a draft. A maintainer publishes that same draft with a separate workflow run.

Pushing to `main` runs CI but does not create a release.

## Build the draft

Start from an up-to-date `main` branch with green CI.

```sh
git switch main
git pull --ff-only
./scripts/bump-version.sh 0.3.6
git commit -am "chore: release v0.3.6"
git push origin main
git tag v0.3.6
git push origin v0.3.6
```

The tag starts `.github/workflows/release.yml`. It builds these targets:

| Target | Installers |
|---|---|
| macOS Apple Silicon | `.dmg` |
| Windows x64 | `.msi` and `-setup.exe` |
| Linux x64 | `.AppImage` and `.deb` |
| Linux ARM64 | `.AppImage` and `.deb` |

Each target fetches and verifies its pinned compiler sidecars. The workflow then merges all four updater fragments into one `latest.json`. The draft is considered ready only when every required installer and updater entry is present.

## Review the draft

Open the draft on the [GitHub Releases page](https://github.com/Oleafly/Oleafly/releases). Check the release notes, installer names, checksums, signatures, and `latest.json`. Do not publish a partial draft.

## Publish

Open **Actions → Release → Run workflow**. Enter the same tag and select **Publish the release**.

The publish run repeats the build and artifact checks. It also runs live contract tests against Anthropic and Google using the release candidate. The final job refuses to publish unless every supported platform and the complete updater feed are present.

Publishing makes `latest.json` visible to installed apps. Treat it as an irreversible production action. If the publish run fails, leave the release as a draft, fix the cause, and run it again.

## Version numbers

Oleafly follows semantic versioning:

- **Patch**, such as `0.3.5` to `0.3.6`, for compatible fixes.
- **Minor**, such as `0.3.5` to `0.4.0`, for compatible features.
- **Major**, such as `0.3.5` to `1.0.0`, for breaking changes or the first stable release.

## Important checks

- The tag must match `package.json`, `src-tauri/tauri.conf.json`, `src-tauri/Cargo.toml`, and `src-tauri/Cargo.lock`. Use `scripts/bump-version.sh` instead of editing them separately.
- Release notes come from the matching version section in `CHANGELOG.md`.
- Do not reuse a published tag. For a failed draft, fix the branch and create a new version unless there is a clear reason to replace the unpublished tag.
- macOS signing and notarization use the Apple release secrets. Windows Authenticode uses Azure Artifact Signing when its secrets are configured. Updater signatures use the separate Tauri signing key.

See [Auto-updates](/docs/engineering/updates/) for updater signing and rollback behavior. User installation instructions are in [Download and install](/docs/install/).
