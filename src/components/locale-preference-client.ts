/**
 * Soft locale preference (client-only):
 * 1. Stored choice in localStorage → soft-redirect bare `/` once per session
 * 2. Else browser languages → one-time on-demand banner (never hard geo)
 * Deep links are never rewritten.
 */
import { preferLocaleFromBrowserLanguages } from "../i18n/match-browser-locale";

export type LocaleOption = {
  code: string;
  lang: string;
  nativeLabel: string;
  flag: string;
  /** ISO 3166-1 alpha-2 for flagcdn images */
  flagIso?: string;
};

const STORAGE_KEY = "oleafly-locale";
const DISMISS_KEY = "oleafly-locale-suggest-dismissed";
const SESSION_REDIRECT_KEY = "oleafly-locale-redirected";
const SESSION_BANNER_KEY = "oleafly-locale-banner-shown";

function flagImgHtml(opt: LocaleOption): string {
  const iso = (opt.flagIso || "").toLowerCase();
  if (!/^[a-z]{2}$/.test(iso)) return "";
  return `<img class="ols-flag" src="https://flagcdn.com/w40/${iso}.png" width="18" height="13" alt="" decoding="async" aria-hidden="true" />`;
}

function bannerCopy(opt: LocaleOption) {
  return {
    prompt: `Prefer ${opt.nativeLabel}?`,
    use: `Continue in ${opt.nativeLabel}`,
    stay: "Stay in English",
  };
}

function isBareHome(): boolean {
  const path = location.pathname;
  return path === "/" || path === "";
}

function showBanner(opt: LocaleOption, onUse: () => void, onStay: () => void) {
  if (document.getElementById("oleafly-locale-suggest")) return;

  const copy = bannerCopy(opt);
  const root = document.createElement("div");
  root.id = "oleafly-locale-suggest";
  root.setAttribute("role", "dialog");
  root.setAttribute("aria-label", copy.prompt);
  root.innerHTML = `
    <div class="ols-inner">
      <p class="ols-prompt"><span class="ols-prompt-flag"></span><span class="ols-prompt-text"></span></p>
      <div class="ols-actions">
        <button type="button" class="ols-use" data-ols="use"></button>
        <button type="button" class="ols-stay" data-ols="stay"></button>
      </div>
    </div>
  `;
  const flagHost = root.querySelector(".ols-prompt-flag")!;
  flagHost.innerHTML = flagImgHtml(opt);
  root.querySelector(".ols-prompt-text")!.textContent = copy.prompt;
  root.querySelector(".ols-use")!.textContent = copy.use;
  root.querySelector(".ols-stay")!.textContent = copy.stay;

  const style = document.createElement("style");
  style.textContent = `
    #oleafly-locale-suggest {
      position: fixed;
      z-index: 100;
      left: 50%;
      bottom: 1.25rem;
      transform: translateX(-50%);
      width: min(420px, calc(100vw - 1.5rem));
      font: 500 13px/1.4 Inter, system-ui, sans-serif;
      color: #f7f8f8;
      pointer-events: auto;
    }
    #oleafly-locale-suggest .ols-inner {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      padding: 0.85rem 1rem;
      border-radius: 12px;
      border: 1px solid rgba(255,255,255,0.12);
      background: #191a1c;
      box-shadow: 0 12px 40px rgba(0,0,0,0.45);
    }
    #oleafly-locale-suggest .ols-prompt {
      margin: 0;
      font-size: 13.5px;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    #oleafly-locale-suggest .ols-flag {
      width: 18px;
      height: 13px;
      object-fit: cover;
      border-radius: 2px;
      box-shadow: 0 0 0 1px rgba(255,255,255,0.12);
      flex-shrink: 0;
    }
    #oleafly-locale-suggest .ols-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    #oleafly-locale-suggest button {
      font: inherit;
      cursor: pointer;
      border-radius: 8px;
      padding: 0.45rem 0.75rem;
      border: 1px solid transparent;
    }
    #oleafly-locale-suggest .ols-use {
      background: #2563eb;
      color: #fff;
      border-color: #2563eb;
    }
    #oleafly-locale-suggest .ols-use:hover { filter: brightness(1.08); }
    #oleafly-locale-suggest .ols-stay {
      background: transparent;
      color: #8a8f98;
      border-color: rgba(255,255,255,0.12);
    }
    #oleafly-locale-suggest .ols-stay:hover {
      color: #f7f8f8;
      border-color: rgba(255,255,255,0.22);
    }
  `;
  document.head.appendChild(style);
  document.body.appendChild(root);

  root.querySelector('[data-ols="use"]')?.addEventListener("click", () => {
    root.remove();
    onUse();
  });
  root.querySelector('[data-ols="stay"]')?.addEventListener("click", () => {
    root.remove();
    onStay();
  });
}

export function initLocalePreference(options: LocaleOption[]) {
  try {
    const byCode = new Map(options.map((o) => [o.code, o]));
    const supported = new Set(options.map((o) => o.code));

    // 1) Remembered explicit choice → soft-redirect bare home once per session
    const pref = localStorage.getItem(STORAGE_KEY);
    if (pref && pref !== "en" && supported.has(pref) && isBareHome()) {
      if (!sessionStorage.getItem(SESSION_REDIRECT_KEY)) {
        sessionStorage.setItem(SESSION_REDIRECT_KEY, "1");
        location.replace("/" + pref + "/");
        return;
      }
    }

    // Deep links: never rewrite. Already chose language (incl. English): no banner.
    if (!isBareHome()) return;
    if (pref) return;
    if (localStorage.getItem(DISMISS_KEY) === "1") return;

    // 2) Browser language list only (on-demand, no geo-IP)
    const langs =
      typeof navigator !== "undefined" && navigator.languages?.length
        ? [...navigator.languages]
        : navigator.language
          ? [navigator.language]
          : [];

    const suggested = preferLocaleFromBrowserLanguages(langs);
    if (!suggested || !supported.has(suggested)) return;

    const opt = byCode.get(suggested);
    if (!opt) return;

    if (sessionStorage.getItem(SESSION_BANNER_KEY)) return;
    sessionStorage.setItem(SESSION_BANNER_KEY, "1");

    showBanner(
      opt,
      () => {
        try {
          localStorage.setItem(STORAGE_KEY, suggested);
          localStorage.removeItem(DISMISS_KEY);
        } catch {
          /* ignore */
        }
        location.assign("/" + suggested + "/");
      },
      () => {
        try {
          localStorage.setItem(STORAGE_KEY, "en");
          localStorage.setItem(DISMISS_KEY, "1");
        } catch {
          /* ignore */
        }
      },
    );
  } catch {
    /* ignore */
  }
}
