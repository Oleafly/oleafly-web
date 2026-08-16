## i18n coverage

Generated: `2026-08-16T22:22:43.272Z`

| Surface | English source |
|---------|----------------|
| UI strings | 544 keys |
| Learn lessons | 139 |
| Blog posts | 19 |
| Locales in switcher | 15 (incl. English) |
| Chinese in switcher | yes — 简体中文 + 繁體中文 |

### Target markets (composite score)

| Locale | Composite | UI | Learn meta | Learn body | Blog meta | Blog body | Templates |
|--------|-----------|----|------------|------------|-----------|-----------|-----------|
| `zh-cn` | **95.4%** | 88.4% | 100% | 100% | 100% | 100% | 100% |
| `zh-tw` | **95.4%** | 88.4% | 100% | 100% | 100% | 100% | 100% |
| `ja` | **95.4%** | 88.4% | 100% | 100% | 100% | 100% | 100% |
| `ko` | **95.4%** | 88.4% | 100% | 100% | 100% | 100% | 100% |
| `es` | **95.4%** | 88.4% | 100% | 100% | 100% | 100% | 100% |
| `pt-br` | **95.4%** | 88.4% | 100% | 100% | 100% | 100% | 100% |
| `fr` | **95.4%** | 88.4% | 100% | 100% | 100% | 100% | 100% |
| `de` | **95.4%** | 88.4% | 100% | 100% | 100% | 100% | 100% |
| `hi` | **95.4%** | 88.4% | 100% | 100% | 100% | 100% | 100% |
| `ru` | **95.4%** | 88.4% | 100% | 100% | 100% | 100% | 100% |
| `uk` | **95.4%** | 88.4% | 100% | 100% | 100% | 100% | 100% |
| `tr` | **95.4%** | 88.4% | 100% | 100% | 100% | 100% | 100% |
| `ar` | **95.4%** | 88.4% | 100% | 100% | 100% | 100% | 100% |
| `vi` | **95.4%** | 88.4% | 100% | 100% | 100% | 100% | 100% |

### All locales

| Locale | UI % | Learn body % | Blog body % | Templates % | Composite |
|--------|------|--------------|-------------|-------------|-----------|
| `ar` | 88.4% | 100% | 100% | 100% | 95.4% |
| `de` | 88.4% | 100% | 100% | 100% | 95.4% |
| `es` | 88.4% | 100% | 100% | 100% | 95.4% |
| `fr` | 88.4% | 100% | 100% | 100% | 95.4% |
| `hi` | 88.4% | 100% | 100% | 100% | 95.4% |
| `ja` | 88.4% | 100% | 100% | 100% | 95.4% |
| `ko` | 88.4% | 100% | 100% | 100% | 95.4% |
| `pt-br` | 88.4% | 100% | 100% | 100% | 95.4% |
| `ru` | 88.4% | 100% | 100% | 100% | 95.4% |
| `tr` | 88.4% | 100% | 100% | 100% | 95.4% |
| `uk` | 88.4% | 100% | 100% | 100% | 95.4% |
| `vi` | 88.4% | 100% | 100% | 100% | 95.4% |
| `zh-cn` | 88.4% | 100% | 100% | 100% | 95.4% |
| `zh-tw` | 88.4% | 100% | 100% | 100% | 95.4% |

### How to refresh

```bash
# Coverage report
pnpm i18n:coverage
pnpm i18n:coverage -- --markdown

# Fill content (meta or full body; code fences protected)
node scripts/translate-site-content.mjs --locales=zh-cn,zh-tw --only=learn
node scripts/translate-site-content.mjs --locales=zh-cn,zh-tw --only=blog

# Fill UI dictionary overrides
node scripts/translate-ui-gtx.mjs --locales=zh-cn,zh-tw
```

**Note:** LaTeX/Typst source, URL slugs, and product tokens (LaTeX, Git, BibTeX, …) stay untranslated by design.