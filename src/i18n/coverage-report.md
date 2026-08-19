## i18n coverage

Generated: `2026-08-19T11:17:27.316Z`

| Surface | English source |
|---------|----------------|
| UI strings | 556 keys |
| Learn lessons | 139 |
| Blog posts | 19 |
| Locales in switcher | 15 (incl. English) |
| Chinese in switcher | yes — 简体中文 + 繁體中文 |

### Target markets (composite score)

| Locale | Composite | UI | Learn meta | Learn body | Blog meta | Blog body | Templates |
|--------|-----------|----|------------|------------|-----------|-----------|-----------|
| `zh-cn` | **94.5%** | 86.3% | 100% | 100% | 100% | 100% | 100% |
| `zh-tw` | **94.5%** | 86.3% | 100% | 100% | 100% | 100% | 100% |
| `ja` | **94.5%** | 86.3% | 100% | 100% | 100% | 100% | 100% |
| `ko` | **94.5%** | 86.3% | 100% | 100% | 100% | 100% | 100% |
| `es` | **94.5%** | 86.3% | 100% | 100% | 100% | 100% | 100% |
| `pt-br` | **94.5%** | 86.3% | 100% | 100% | 100% | 100% | 100% |
| `fr` | **94.5%** | 86.3% | 100% | 100% | 100% | 100% | 100% |
| `de` | **94.5%** | 86.3% | 100% | 100% | 100% | 100% | 100% |
| `hi` | **94.5%** | 86.3% | 100% | 100% | 100% | 100% | 100% |
| `ru` | **94.5%** | 86.3% | 100% | 100% | 100% | 100% | 100% |
| `uk` | **94.5%** | 86.3% | 100% | 100% | 100% | 100% | 100% |
| `tr` | **94.5%** | 86.3% | 100% | 100% | 100% | 100% | 100% |
| `ar` | **94.5%** | 86.3% | 100% | 100% | 100% | 100% | 100% |
| `vi` | **94.5%** | 86.3% | 100% | 100% | 100% | 100% | 100% |

### All locales

| Locale | UI % | Learn body % | Blog body % | Templates % | Composite |
|--------|------|--------------|-------------|-------------|-----------|
| `ar` | 86.3% | 100% | 100% | 100% | 94.5% |
| `de` | 86.3% | 100% | 100% | 100% | 94.5% |
| `es` | 86.3% | 100% | 100% | 100% | 94.5% |
| `fr` | 86.3% | 100% | 100% | 100% | 94.5% |
| `hi` | 86.3% | 100% | 100% | 100% | 94.5% |
| `ja` | 86.3% | 100% | 100% | 100% | 94.5% |
| `ko` | 86.3% | 100% | 100% | 100% | 94.5% |
| `pt-br` | 86.3% | 100% | 100% | 100% | 94.5% |
| `ru` | 86.3% | 100% | 100% | 100% | 94.5% |
| `tr` | 86.3% | 100% | 100% | 100% | 94.5% |
| `uk` | 86.3% | 100% | 100% | 100% | 94.5% |
| `vi` | 86.3% | 100% | 100% | 100% | 94.5% |
| `zh-cn` | 86.3% | 100% | 100% | 100% | 94.5% |
| `zh-tw` | 86.3% | 100% | 100% | 100% | 94.5% |

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