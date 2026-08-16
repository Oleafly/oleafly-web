## i18n coverage

Generated: `2026-08-16T11:02:15.560Z`

| Surface | English source |
|---------|----------------|
| UI strings | 481 keys |
| Learn lessons | 139 |
| Blog posts | 19 |
| Locales in switcher | 15 (incl. English) |
| Chinese in switcher | yes — 简体中文 + 繁體中文 |

### Target markets (composite score)

| Locale | Composite | UI | Learn meta | Learn body | Blog meta | Blog body | Templates |
|--------|-----------|----|------------|------------|-----------|-----------|-----------|
| `zh-cn` | **100%** | 100% | 100% | 100% | 100% | 100% | 100% |
| `zh-tw` | **100%** | 100% | 100% | 100% | 100% | 100% | 100% |
| `ja` | **100%** | 100% | 100% | 100% | 100% | 100% | 100% |
| `ko` | **100%** | 100% | 100% | 100% | 100% | 100% | 100% |
| `es` | **100%** | 100% | 100% | 100% | 100% | 100% | 100% |
| `pt-br` | **100%** | 100% | 100% | 100% | 100% | 100% | 100% |
| `fr` | **100%** | 100% | 100% | 100% | 100% | 100% | 100% |
| `de` | **100%** | 100% | 100% | 100% | 100% | 100% | 100% |
| `hi` | **100%** | 100% | 100% | 100% | 100% | 100% | 100% |
| `ru` | **100%** | 100% | 100% | 100% | 100% | 100% | 100% |
| `uk` | **100%** | 100% | 100% | 100% | 100% | 100% | 100% |
| `tr` | **100%** | 100% | 100% | 100% | 100% | 100% | 100% |
| `ar` | **100%** | 100% | 100% | 100% | 100% | 100% | 100% |
| `vi` | **100%** | 100% | 100% | 100% | 100% | 100% | 100% |

### All locales

| Locale | UI % | Learn body % | Blog body % | Templates % | Composite |
|--------|------|--------------|-------------|-------------|-----------|
| `ar` | 100% | 100% | 100% | 100% | 100% |
| `de` | 100% | 100% | 100% | 100% | 100% |
| `es` | 100% | 100% | 100% | 100% | 100% |
| `fr` | 100% | 100% | 100% | 100% | 100% |
| `hi` | 100% | 100% | 100% | 100% | 100% |
| `ja` | 100% | 100% | 100% | 100% | 100% |
| `ko` | 100% | 100% | 100% | 100% | 100% |
| `pt-br` | 100% | 100% | 100% | 100% | 100% |
| `ru` | 100% | 100% | 100% | 100% | 100% |
| `tr` | 100% | 100% | 100% | 100% | 100% |
| `uk` | 100% | 100% | 100% | 100% | 100% |
| `vi` | 100% | 100% | 100% | 100% | 100% |
| `zh-cn` | 100% | 100% | 100% | 100% | 100% |
| `zh-tw` | 100% | 100% | 100% | 100% | 100% |

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