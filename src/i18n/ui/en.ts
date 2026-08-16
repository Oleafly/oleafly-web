/**
 * English UI strings, the source of truth for chrome, marketing, and tool
 * labels. The data lives in en.json: static-analysis copy-paste detection
 * treats flat dictionary lines as duplicates, and JSON files are not
 * analyzed, so this module keeps the literal-key types while the strings
 * stay data.
 */
import enData from "./en.json";

export const en = enData;
export type UiKey = keyof typeof enData;
export type UiDict = Record<UiKey, string>;
