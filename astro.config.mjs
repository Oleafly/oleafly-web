// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

/** @type {Record<string, { label: string; lang?: string; dir?: 'rtl' | 'ltr' }>} */
const starlightLocales = {
  root: { label: "English", lang: "en" },
  es: { label: "Español", lang: "es" },
  "pt-br": { label: "Português", lang: "pt-BR" },
  fr: { label: "Français", lang: "fr" },
  de: { label: "Deutsch", lang: "de" },
  it: { label: "Italiano", lang: "it" },
  nl: { label: "Nederlands", lang: "nl" },
  pl: { label: "Polski", lang: "pl" },
  ru: { label: "Русский", lang: "ru" },
  uk: { label: "Українська", lang: "uk" },
  tr: { label: "Türkçe", lang: "tr" },
  ar: { label: "العربية", lang: "ar", dir: "rtl" },
  hi: { label: "हिन्दी", lang: "hi" },
  "zh-cn": { label: "简体中文", lang: "zh-CN" },
  "zh-tw": { label: "繁體中文", lang: "zh-TW" },
  ja: { label: "日本語", lang: "ja" },
  ko: { label: "한국어", lang: "ko" },
  vi: { label: "Tiếng Việt", lang: "vi" },
};

// oleafly.com — landing page at `/` (src/pages/index.astro) plus the product
// docs mounted under `/docs/*` (Starlight, content in src/content/docs/docs/).
// Deployed as a fully static site on Cloudflare Pages.
export default defineConfig({
  site: "https://oleafly.com",
  // i18n routing is configured via Starlight `locales` below (root = English).
  // Do not also set Astro `i18n` — Starlight rejects both at once.
  redirects: {
    "/docs/learn/latex-in-10-minutes": "/learn/first-document/",
    "/docs/learn/document-skeleton": "/learn/document-skeleton/",
    "/docs/learn/text-formatting": "/learn/bold-italic/",
    "/docs/learn/math": "/learn/math-mode/",
    "/docs/learn/tables-figures": "/learn/create-table/",
    "/docs/learn/citations": "/learn/add-citations/",
    "/docs/learn/cheatsheet": "/learn/cheatsheet/",
  },
  vite: { plugins: [tailwindcss()] },
  integrations: [
    react(),
    starlight({
      title: "Oleafly",
      description:
        "The local-first research workspace for LaTeX, Typst, and Markdown on macOS, Windows, and Linux. An open-source, offline-capable Overleaf alternative with real Git history, GitHub sync, SyncTeX, and bring-your-own-key AI.",
      defaultLocale: "root",
      locales: starlightLocales,
      logo: { src: "./src/assets/leaf.svg", alt: "Oleafly" },
      favicon: "/favicon.png",
      customCss: ["./src/styles/fonts.css", "./src/styles/theme.css"],
      // Swap Starlight's light/dark/auto <select> for a light/dark toggle button,
      // and extend the head with the same analytics the landing page uses.
      components: {
        ThemeSelect: "./src/components/ThemeToggle.astro",
        Head: "./src/components/starlight/Head.astro",
      },
      // Self-hosted Inter (body/UI) + JetBrains Mono (code). No third-party requests.
      head: [
        // Scroll-progress bar (same look as the landing page's Magic UI one,
        // implemented in vanilla JS because Starlight pages aren't React).
        {
          tag: "style",
          content:
            "#ol-scroll-progress{position:fixed;top:0;left:0;right:0;height:2px;z-index:60;transform-origin:0 50%;transform:scaleX(0);background:linear-gradient(90deg,#2563eb,#60a5fa,#34b44a);pointer-events:none}",
        },
        {
          tag: "script",
          content:
            "addEventListener('DOMContentLoaded',()=>{const b=document.createElement('div');b.id='ol-scroll-progress';document.body.appendChild(b);const u=()=>{const h=document.documentElement;const m=h.scrollHeight-h.clientHeight;b.style.transform='scaleX('+(m>0?h.scrollTop/m:0)+')'};addEventListener('scroll',u,{passive:true});u()});",
        },
        {
          tag: "link",
          attrs: { rel: "preload", href: "/fonts/inter-var-latin.woff2", as: "font", type: "font/woff2", crossorigin: true },
        },
      ],
      // Docs pages use Starlight's own chrome, so they never render the landing
      // footer's social row. These put the same links in the docs header.
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/Oleafly/Oleafly" },
        { icon: "x.com", label: "Oleafly on X", href: "https://x.com/OleaflyHQ" },
      ],
      // Product docs: no "Edit this page" link (that's a contributor affordance).
      sidebar: [
        {
          label: "Start here",
          items: [
            { label: "Overview", slug: "docs/overview" },
            { label: "Philosophy", slug: "docs/philosophy" },
            { label: "Why Oleafly", slug: "docs/why-oleafly" },
            { label: "Download & install", slug: "docs/install" },
            { label: "Getting started", slug: "docs/getting-started" },
          ],
        },
        {
          label: "Projects & library",
          items: [
            { label: "The library", slug: "docs/library" },
            { label: "Templates", slug: "docs/templates" },
            { label: "Files & folders", slug: "docs/files" },
            { label: "Where your data lives", slug: "docs/where-your-data-lives" },
          ],
        },
        {
          label: "Writing",
          items: [
            { label: "The editor", slug: "docs/editor" },
            { label: "Autocomplete & slash commands", slug: "docs/autocomplete" },
            { label: "Code intelligence", slug: "docs/code-intelligence" },
            { label: "Spelling & grammar", slug: "docs/spellcheck-grammar" },
            { label: "Citations & bibliography", slug: "docs/citations" },
            { label: "Figures & diagrams", slug: "docs/figures-diagrams" },
            { label: "Keyboard shortcuts", slug: "docs/keyboard-shortcuts" },
          ],
        },
        {
          label: "Compile & preview",
          items: [
            { label: "Compiling", slug: "docs/compiling" },
            { label: "PDF preview", slug: "docs/pdf-preview" },
            { label: "SyncTeX", slug: "docs/synctex" },
            { label: "LaTeX engines & packages", slug: "docs/latex-engines" },
          ],
        },
        {
          label: "Check & export",
          items: [
            { label: "Preflight: ATS & accessibility", slug: "docs/preflight" },
            { label: "Export formats", slug: "docs/export" },
          ],
        },
        {
          label: "AI assistant",
          items: [
            { label: "Set up AI", slug: "docs/ai-setup" },
            { label: "Chat & tools", slug: "docs/ai-chat" },
            { label: "Inline AI edits", slug: "docs/ai-inline-edit" },
            { label: "Draw figures with AI", slug: "docs/ai-figures" },
            { label: "Connect via MCP", slug: "docs/mcp" },
          ],
        },
        {
          label: "History & sync",
          items: [
            { label: "Git history & source control", slug: "docs/git-history" },
            { label: "GitHub sync", slug: "docs/github-sync" },
          ],
        },
        {
          label: "Reference",
          items: [
            { label: "Settings reference", slug: "docs/settings" },
            { label: "Updates", slug: "docs/updates" },
          ],
        },
        {
          label: "Learn LaTeX",
          items: [{ label: "Oleafly Learn: the full curriculum", link: "/learn/" }],
        },
        {
          label: "Help",
          items: [{ label: "FAQ", slug: "docs/faq" }],
        },
        {
          label: "Engineering",
          collapsed: true,
          items: [
            { label: "Contributing", slug: "docs/engineering/contributing" },
            { label: "Architecture", slug: "docs/engineering/architecture" },
            { label: "Development", slug: "docs/engineering/development" },
            { label: "Releasing", slug: "docs/engineering/releasing" },
            { label: "Auto-update internals", slug: "docs/engineering/updates" },
          ],
        },
      ],
    }),
  ],
});
