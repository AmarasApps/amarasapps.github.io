# amarasapps.github.io

Source for **[www.amarasapps.com](https://www.amarasapps.com)** — the AmarasApps studio
site. Plain static HTML/CSS/JS served by GitHub Pages (no Jekyll; `.nojekyll` present).

## Structure

```
/                       index.html          Studio landing (dark hero → light body)
/sparepay/              sparepay/index.html Sparepay product + support (its own navy+gold)
/sparepay/privacy/      .../privacy/        Sparepay privacy policy
assets/
  css/site.css          design tokens (mirror of BRAND.md) + components
  js/motion.js          scroll/motion — all gated behind prefers-reduced-motion
  logos/                Prism marks: gradient (primary), glass, flat, mono, sparepay
  favicon.svg / *.png   favicons + apple-touch-icon
  og/                   1200×630 social share card
BRAND.md                brand guidelines — the source of truth for tokens & rules
brand/                  design folios + the definitive Brand-Guidelines.html/.pdf
CNAME                   www.amarasapps.com
```

## Brand

The identity is **violet-anchored Aurora** with the **Prism** logo. See `BRAND.md` for the
full token set, the WCAG rule (bright hues are fill/glow only), the sub-brand accent system,
and typography. AmarasApps is a category-agnostic studio; **Sparepay keeps its own
navy + gold** and only carries a small "by AmarasApps" endorsement.

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000/
```

## Deploy

Commit to `main`; GitHub Pages publishes automatically to the custom domain. All motion
respects `prefers-reduced-motion`; contrast is WCAG AA/AAA verified.
