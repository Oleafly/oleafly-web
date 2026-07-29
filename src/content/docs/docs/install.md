---
title: "Download & install"
description: "Get Oleafly running on macOS, Windows, or Linux: download, first launch, and what the first compile fetches."
---

Installing Oleafly is a download and a double-click. No account, no sign-in, and no separate LaTeX distribution: the compiler ships inside the app.

## Download the app

Grab the latest installer from the [releases page](https://github.com/Oleafly/Oleafly/releases/latest), or use the Download button on [oleafly.com](https://oleafly.com/), which resolves the installer for your platform when it can.

| Platform | Download | What to do |
|---|---|---|
| macOS (Apple Silicon) | `.dmg` | M1 or newer. Open the dmg, drag Oleafly to Applications. |
| Windows (x86_64) | `.msi` or `-setup.exe` | Run either installer and follow the prompts. |
| Linux (x86_64) | `.AppImage`, `.deb`, or `.rpm` | AppImage runs on recent distros; use deb or rpm if you prefer the package manager. |

On Linux, Oleafly needs glibc 2.39 or newer (2024-era or later: Ubuntu 24.04+, Fedora 40+, Debian 13+).

Current shipping targets are **macOS Apple Silicon**, **Windows x64**, and **Linux x64**.

## First launch

**macOS.** Recent releases are **code-signed and notarized**. Drag the app to Applications and open it like any other Mac app. If an older build still trips Gatekeeper, right-click → **Open**, or clear quarantine once:

```bash
/usr/bin/xattr -dr com.apple.quarantine /Applications/Oleafly.app
```

**Windows.** SmartScreen may still show *"Windows protected your PC"* on some builds. Click **More info**, then **Run anyway**. Signing coverage can lag macOS; if a build is signed, the warning usually disappears.

**Linux.** Make the AppImage executable, then run it:

```bash
chmod +x Oleafly_*.AppImage && ./Oleafly_*.AppImage
```

## The first compile downloads TeX packages

The first time you compile a document, the bundled Tectonic engine downloads the packages that document needs and caches them. That needs a network connection and can take a minute. Later compiles of the same document are fast and work offline. A document that needs a package you have not cached yet triggers another one-time fetch. See [Compiling](/docs/compiling/), including strict offline mode.

Your files stay as plain folders on disk. Tokens and AI keys live in encrypted, owner-restricted local files. The network is used only for actions you take: hosted AI, GitHub sync, package downloads, citation lookups, and similar. See [Philosophy](/docs/philosophy/).

## Staying up to date

Oleafly checks a signed release feed, shows release notes, and installs in place when you confirm. You can also check from Settings → Help & About. Details in [Updates](/docs/updates/).

## Build from source

Contributors (or anyone without a prebuilt app) can build Oleafly themselves. It is a Tauri 2 app (Rust + React):

```bash
git clone https://github.com/Oleafly/Oleafly.git
cd Oleafly
./scripts/fetch-tectonic.sh all
pnpm install
pnpm tauri dev
```

Prerequisites and production builds: [Development](/docs/engineering/development/).

## Next steps

- [Getting started](/docs/getting-started/): first project to first PDF in a couple of minutes.
- [Templates](/docs/templates/): bundled starters and downloadable packs.
- [Oleafly Learn](/learn/): free LaTeX and research writing curriculum on the web.
