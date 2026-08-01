## i18n coverage

Generated: `2026-08-01T12:27:29.528Z`

| Surface | English source |
|---------|----------------|
| UI strings | 481 keys |
| Learn lessons | 139 |
| Blog posts | 19 |
| Locales in switcher | 18 (incl. English) |
| Chinese in switcher | yes — 简体中文 + 繁體中文 |

### Target markets (composite score)

| Locale | Composite | UI | Learn meta | Learn body | Blog meta | Blog body | Templates |
|--------|-----------|----|------------|------------|-----------|-----------|-----------|
| `zh-cn` | **100%** | 100% | 100% | 100% | 100% | 100% | 100% |
| `zh-tw` | **100%** | 100% | 100% | 100% | 100% | 100% | 100% |
| `ja` | **100%** | 100% | 100% | 100% | 100% | 100% | 100% |
| `ko` | **100%** | 100% | 100% | 100% | 100% | 100% | 100% |
| `es` | **97.1%** | 92.9% | 99.3% | 100% | 100% | 100% | 100% |
| `pt-br` | **99.4%** | 98.8% | 99.3% | 100% | 100% | 100% | 100% |
| `fr` | **99.7%** | 99.6% | 99.3% | 100% | 100% | 100% | 100% |
| `de` | **99.6%** | 99.2% | 99.3% | 100% | 100% | 100% | 100% |
| `hi` | **100%** | 100% | 100% | 100% | 100% | 100% | 100% |
| `it` | **99.3%** | 98.5% | 99.3% | 100% | 100% | 100% | 100% |
| `nl` | **99%** | 97.7% | 99.3% | 100% | 100% | 100% | 100% |
| `pl` | **99.8%** | 99.8% | 99.3% | 100% | 100% | 100% | 100% |
| `ru` | **99.9%** | 100% | 99.3% | 100% | 100% | 100% | 100% |
| `uk` | **99.4%** | 98.8% | 99.3% | 100% | 100% | 100% | 100% |
| `tr` | **99.7%** | 99.4% | 99.3% | 100% | 100% | 100% | 100% |
| `ar` | **100%** | 100% | 100% | 100% | 100% | 100% | 100% |
| `vi` | **99.7%** | 99.4% | 99.3% | 100% | 100% | 100% | 100% |

### All locales

| Locale | UI % | Learn body % | Blog body % | Templates % | Composite |
|--------|------|--------------|-------------|-------------|-----------|
| `ar` | 100% | 100% | 100% | 100% | 100% |
| `de` | 99.2% | 100% | 100% | 100% | 99.6% |
| `es` | 92.9% | 100% | 100% | 100% | 97.1% |
| `fr` | 99.6% | 100% | 100% | 100% | 99.7% |
| `hi` | 100% | 100% | 100% | 100% | 100% |
| `it` | 98.5% | 100% | 100% | 100% | 99.3% |
| `ja` | 100% | 100% | 100% | 100% | 100% |
| `ko` | 100% | 100% | 100% | 100% | 100% |
| `nl` | 97.7% | 100% | 100% | 100% | 99% |
| `pl` | 99.8% | 100% | 100% | 100% | 99.8% |
| `pt-br` | 98.8% | 100% | 100% | 100% | 99.4% |
| `ru` | 100% | 100% | 100% | 100% | 99.9% |
| `tr` | 99.4% | 100% | 100% | 100% | 99.7% |
| `uk` | 98.8% | 100% | 100% | 100% | 99.4% |
| `vi` | 99.4% | 100% | 100% | 100% | 99.7% |
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