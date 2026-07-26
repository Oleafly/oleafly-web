/** Best-effort client OS detection, used by the platform-aware download CTAs. */
export type Os = "mac" | "windows" | "linux";

export function detectOs(): Os {
  const nav = navigator as Navigator & { userAgentData?: { platform?: string } };
  const ua = nav.userAgent || "";
  const plat = nav.platform || "";
  const uaPlat = nav.userAgentData?.platform || "";

  if (/Win/i.test(plat) || /Windows/i.test(ua) || /Windows/i.test(uaPlat)) return "windows";
  if (/Linux/i.test(plat) || /Linux/i.test(ua) || /Linux/i.test(uaPlat) || /X11/i.test(plat)) {
    return "linux";
  }
  return "mac";
}
