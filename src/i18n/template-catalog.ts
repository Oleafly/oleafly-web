import type { Locale } from "./locales";
import catalog from "./template-catalog.generated.json";

type TemplateEntry = {
  name: string;
  description: string;
  category: string;
};

type PackEntry = {
  label: string;
  description: string;
};

type LocaleCatalog = {
  packs: Record<string, PackEntry>;
  templates: Record<string, TemplateEntry>;
  categories: Record<string, string>;
};

const data = catalog as Record<string, LocaleCatalog>;

export function localizePack(
  locale: Locale,
  id: string,
  fallback: { label: string; description: string },
) {
  const entry = data[locale]?.packs?.[id];
  return {
    label: entry?.label || fallback.label,
    description: entry?.description || fallback.description,
  };
}

export function localizeTemplate(
  locale: Locale,
  id: string,
  fallback: { name: string; description: string; category: string },
) {
  const entry = data[locale]?.templates?.[id];
  return {
    name: entry?.name || fallback.name,
    description: entry?.description || fallback.description,
    category: entry?.category || fallback.category,
  };
}

export function localizeCategory(locale: Locale, category: string) {
  return data[locale]?.categories?.[category] || category;
}

/** True once generated catalog has this locale. */
export function hasTemplateCatalog(locale: Locale) {
  return Boolean(data[locale]?.templates && Object.keys(data[locale].templates).length);
}
