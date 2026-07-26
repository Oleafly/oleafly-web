/**
 * Product analytics for oleafly.com (PostHog).
 *
 * Booted from <Analytics />, which every page pulls in: the landing page, the
 * interior pages through SiteLayout, and the docs through the Starlight <Head>
 * override. Only the *website* is instrumented — the desktop app ships with no
 * telemetry, and the privacy page says so.
 *
 * Two deliberate choices:
 *
 * 1. posthog-js is imported dynamically on idle, so the ~60 KB analytics chunk
 *    never competes with LCP. Events fired before it lands are queued and
 *    flushed once it is ready.
 * 2. Clicks are captured declaratively. Any element can opt in with
 *    `data-ph="event_name"` (plus `data-ph-*` for properties), and links to
 *    releases, GitHub, and the site's own sections are recognised automatically
 *    so existing CTAs need no markup changes.
 */
import type { PostHog } from "posthog-js";
import { POSTHOG_HOST, POSTHOG_KEY, POSTHOG_UI_HOST } from "./posthog-config";
import { detectOs } from "./os";

type Props = Record<string, unknown>;

let client: PostHog | null = null;
let booted = false;
const pending: Array<[string, Props]> = [];

/**
 * Capture an event. Safe to call before posthog-js has loaded (and on a build
 * with analytics switched off, where it is a no-op).
 */
export function track(event: string, props: Props = {}): void {
  if (client) client.capture(event, props);
  else if (pending.length < 50) pending.push([event, props]);
}

/** A release page or a packaged build — either way, an intent to download. */
const RELEASE_RE = /\/releases(\/|$)/;
const BINARY_RE = /\.(dmg|exe|msi|appimage|deb|rpm|zip|tar\.gz)$/i;

/** Internal destinations worth their own funnel step, in match order. */
const SECTIONS: Array<[RegExp, string]> = [
  [/^\/docs\//, "docs_opened"],
  [/^\/learn\//, "learn_opened"],
  [/^\/templates\//, "templates_opened"],
  [/^\/blog\//, "blog_opened"],
  [/^\/tools\//, "tools_opened"],
  [/^\/deadlines\//, "deadlines_opened"],
  [/^\/live\//, "live_preview_opened"],
  [/^\/privacy\//, "privacy_opened"],
];

function enabled(): boolean {
  // An unset or malformed key means "analytics off" — forks and preview builds
  // get a silent no-op rather than events landing in the production project.
  if (!POSTHOG_KEY.startsWith("phc_")) return false;
  // Keep `astro dev` out of the data. A production build served locally
  // (`pnpm build && pnpm preview`) still reports, so the wiring is verifiable
  // before it ships.
  return !import.meta.env.DEV;
}

/**
 * Turn `data-ph-plan-name="pro"` into `{ plan_name: "pro" }`.
 * `data-ph` itself names the event and is skipped.
 */
function datasetProps(el: HTMLElement): Props {
  const props: Props = {};
  for (const [key, value] of Object.entries(el.dataset)) {
    if (key === "ph" || !key.startsWith("ph") || value === undefined) continue;
    const name = key
      .slice(2)
      .replace(/^./, (c) => c.toLowerCase())
      .replace(/[A-Z]/g, (c) => `_${c.toLowerCase()}`);
    props[name] = value;
  }
  return props;
}

/** Where on the page the click happened, for "which section converts" questions. */
function locationOf(el: Element): string {
  const tagged = el.closest("[data-ph-section]");
  if (tagged) return tagged.getAttribute("data-ph-section") || "page";
  if (el.closest("header.nav, .nav-links")) return "nav";
  if (el.closest("footer")) return "footer";
  return el.closest("section[id]")?.id || "page";
}

function onClick(event: Event): void {
  const target = event.target;
  if (!(target instanceof Element)) return;

  // An explicit annotation always wins over the inferred rules below.
  const tagged = target.closest<HTMLElement>("[data-ph]");
  if (tagged?.dataset.ph) {
    track(tagged.dataset.ph, { ...datasetProps(tagged), location: locationOf(tagged) });
    return;
  }

  const link = target.closest<HTMLAnchorElement>("a[href]");
  if (!link) return;

  let url: URL;
  try {
    url = new URL(link.href, window.location.href);
  } catch {
    return;
  }
  if (url.protocol !== "https:" && url.protocol !== "http:") return;

  const base: Props = {
    href: url.href,
    location: locationOf(link),
    label: (link.textContent || "").trim().slice(0, 80),
  };

  const card = link.getAttribute("data-os");
  const isDownload =
    RELEASE_RE.test(url.pathname) ||
    BINARY_RE.test(url.pathname) ||
    link.hasAttribute("download") ||
    link.classList.contains("dl-platform") ||
    link.classList.contains("dl-card");

  if (isDownload) {
    // `platform` is the build the visitor actually asked for: the OS card they
    // picked when there was one, otherwise the OS we detected for them.
    track("download_clicked", {
      ...base,
      platform: card || detectOs(),
      platform_source: card ? "card" : "detected",
    });
    return;
  }

  if (url.hostname === "github.com") {
    track("github_clicked", { ...base, path: url.pathname });
    return;
  }

  if (url.origin === window.location.origin) {
    for (const [pattern, name] of SECTIONS) {
      if (pattern.test(url.pathname)) {
        track(name, { ...base, to: url.pathname });
        return;
      }
    }
    return; // Ordinary internal navigation; the pageview already covers it.
  }

  track("outbound_clicked", { ...base, domain: url.hostname });
}

function start(): void {
  import("posthog-js")
    .then(({ default: posthog }) => {
      posthog.init(POSTHOG_KEY, {
        api_host: POSTHOG_HOST,
        ui_host: POSTHOG_UI_HOST,
        defaults: "2025-05-24",
        // A marketing site has no login, so every visitor is anonymous. Person
        // profiles are what make cross-day retention and funnels work here.
        person_profiles: "always",
        capture_pageview: "history_change",
        capture_pageleave: true,
        capture_exceptions: true,
        capture_heatmaps: true,
        autocapture: true,
        // The site argues for privacy; honouring Do Not Track is the least it
        // can do. Session replay never records what anyone types: maskAllInputs
        // covers <input>/<textarea>, and the selector covers the CodeMirror
        // surfaces on /live/ and /tools/, which are contenteditable and would
        // otherwise leak whatever draft someone pasted in.
        respect_dnt: true,
        session_recording: {
          maskAllInputs: true,
          maskTextSelector: ".cm-editor, [data-ph-mask]",
        },
        loaded: (ph) => {
          client = ph;
          for (const [name, props] of pending.splice(0)) ph.capture(name, props);
        },
      });
    })
    .catch(() => {
      // A blocked or failed analytics chunk must never break the page.
    });
}

export function boot(): void {
  if (booted || !enabled()) return;
  booted = true;

  // Capture phase, so a handler that stops propagation cannot hide the click.
  document.addEventListener("click", onClick, { capture: true, passive: true });

  if ("requestIdleCallback" in window) window.requestIdleCallback(start, { timeout: 3000 });
  else window.setTimeout(start, 1500);
}
