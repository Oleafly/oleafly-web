import { LEARN_CATEGORIES, type LearnCategory } from "../data/learn-categories";
import { DEFAULT_LOCALE, type Locale } from "./locales";
import { t } from "./t";

/** Localized learn track list for a locale (falls back to English labels). */
export function getLearnCategories(locale: Locale | string = DEFAULT_LOCALE): LearnCategory[] {
  return LEARN_CATEGORIES.map((cat) => {
    const labelKey = `learn.cat.${cat.id}.label`;
    const descKey = `learn.cat.${cat.id}.desc`;
    const label = t(locale, labelKey);
    const description = t(locale, descKey);
    return {
      ...cat,
      // If key missing, t() returns the key string — fall back to English source
      label: label === labelKey ? cat.label : label,
      description: description === descKey ? cat.description : description,
    };
  });
}

export function getCategoryLabel(locale: Locale | string, id: string): string {
  const key = `learn.cat.${id}.label`;
  const v = t(locale, key);
  if (v !== key) return v;
  const cat = LEARN_CATEGORIES.find((c) => c.id === id);
  return cat?.label ?? id;
}
