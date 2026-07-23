# AmarasApps — Brand Guidelines

The single source of truth for the AmarasApps identity. Every token and rule here is
mirrored in `assets/css/site.css` (`:root`) and demonstrated in
`brand/AmarasApps-Brand-Guidelines.html`.

> **Studio ≠ product.** AmarasApps is a **category-agnostic software studio** — deliberately
> not tied to finance or any single kind of app. **Sparepay** is one product under it and
> keeps its **own** identity (navy + gold). The two are linked by a shared *system* (this
> document, the logo, typography, layout, motion) and a small “by AmarasApps” endorsement —
> **never by sharing a colour scheme**.

---

## 1. Palette — Aurora, violet-anchored

The studio palette is a violet→magenta→coral **spectrum** over a deep aubergine canvas. It
runs **violet-anchored**: the full spectrum appears only in the logo, one hero gradient, and
the per-product accent hues. All UI (buttons, text, chrome) uses grounded deep violet and
neutrals. This is what makes Aurora read as *modern **and** trustworthy* rather than playful.

### Studio — dark (primary surface)
| Token | Hex | Role |
|---|---|---|
| `--bg` | `#141018` | Canvas (deep aubergine) |
| `--surface` | `#211A2A` | Cards / raised surfaces |
| `--text` | `#F6F2FA` | Primary text |
| `--muted` | `#B4A7C0` | Secondary text |
| `--link` | `#C4B5FD` | Links on dark |
| `--primary` | `#6D28D9` | Primary button fill (white text = AAA) |
| `--accent` | `#7C3AED` | Accent / ghost-button text on dark |

### Studio — light (body / long-form reading)
| Token | Hex | Role |
|---|---|---|
| `--bg-light` | `#FAF7FC` | Light canvas |
| `--card-light` | `#FFFFFF` | Light cards |
| `--ink` | `#17121C` | Primary text on light |
| `--muted-light` | `#61566B` | Secondary text on light |
| `--primary-light` | `#6D28D9` | Primary button on light (white text = AAA) |

### Spectrum (identity only — never UI text/buttons)
| Hex | Role |
|---|---|
| `#A78BFA` | Spectrum violet |
| `#EC4899` | Spectrum magenta |
| `#FB7185` | Spectrum coral |

Used in: the Prism logo, the single hero gradient, and as gradient end-stops. **Not** used
for body text, links, or button fills.

---

## 2. The WCAG rule (measured — must always hold)

Contrast ratios were computed (WCAG 2.1 relative-luminance). The critical, non-obvious rule:

> **Bright hues (spectrum + all product accents) are luminous.** They pass **AAA** as
> text/glow on the dark canvas and as fills *behind dark text*, but they **FAIL** as
> white-text button fills and as coloured text on white.

Therefore:
- **Buttons on light pages** use deep violet `#6D28D9` with white text (**7.1:1, AAA**).
- **Bright accents** are only ever: a **card border**, a **glow**, or a **fill with dark
  (`#141018`) text** — never a white-text button, never coloured text on white.
- **Body text** always sits on the neutral tokens (`--text` on dark, `--ink` on light).

### Verified pairings (representative)
| Foreground | On | Ratio | Grade |
|---|---|---|---|
| `#F6F2FA` text | `#141018` | 17.01 | AAA |
| `#B4A7C0` muted | `#141018` | 8.26 | AAA |
| `#C4B5FD` link | `#141018` | 10.18 | AAA |
| `#17121C` ink | `#FAF7FC` | 17.35 | AAA |
| white | `#6D28D9` button | 7.10 | AAA |
| white | `#7C3AED` button | 5.70 | AA |
| `#141018` ink | `#F5C542` gold fill | 11.59 | AAA |

---

## 3. Logo — Prism

The mark is a **faceted “A” that refracts the Aurora spectrum** — violet on the left face,
coral on the right, a spectrum crossbar. The concept: a prism refracts one input into a
spectrum, exactly as one studio produces many products.

### Finishes
| Finish | File | Use |
|---|---|---|
| **Gradient** (primary) | `assets/logos/prism-gradient.svg` | Everywhere: favicon, header, endorsement, print. Works at all sizes. |
| **Liquid glass** | `assets/logos/prism-glass.svg` | App-icon & large hero moments only. |
| **Flat violet** | `assets/logos/prism-flat.svg` | Single-colour / low-ink contexts. |
| **Mono knockout** | `assets/logos/prism-mono-light.svg`, `prism-mono-dark.svg` | The “by AmarasApps” endorsement; anywhere the mark must be one colour. |

**Clear space:** keep padding ≥ 25% of the mark's height on all sides. **Min size:** 16px
(favicon) — the two-facet split still reads because depth comes from opacity, not colour.

---

## 4. Sub-brand system (how products get a colour)

The studio owns the **full spectrum**; each product is the **same Prism form refracting one
hue** split from it. Products feel part of the family, yet each is distinct; a new app simply
claims the next reserved hue.

| Product | Accent | Hex | Status |
|---|---|---|---|
| **Sparepay** | Gold | `#F5C542` | Live |
| App 2 | Emerald | `#34D399` | Reserved |
| App 3 | Sky | `#38BDF8` | Reserved |
| App 4 | Amber | `#FBBF24` | Reserved |
| App 5 | Coral | `#FB7185` | Reserved |

- **Violet / magenta stays reserved for the studio itself** — the parent must read as
  distinct from its children. Sparepay's gold is deliberately outside the violet core.
- A product accent is applied as a **card top-border, a glow, or a dark-ink button** — per
  the WCAG rule above. All reserved hues are AAA-verified as glow/fill-on-dark.
- This is a **guideline, not a contract** — a future product may claim a different hue if it
  demands one.
- **Sparepay is the exception, by design:** its own pages use its own navy `#133244` + gold
  `#F5C542`, not the studio Aurora palette. It only shows the AmarasApps mark in a small
  mono endorsement.

---

## 5. Typography

- **Wordmark:** “AmarasApps” in **SF Pro Rounded, weight 800**, with a subtle **two-tone
  treatment** — “Amaras” in full-strength text colour, “Apps” in the accent/muted tone (or a
  lighter weight) to add ownable personality without a custom logotype.
- **Headings / display:** SF Pro Rounded (`--rounded`).
- **Body:** SF Pro Text / system sans.
- **Numbers, code, identifiers:** SF Mono, tabular.
- Web stack falls back to `system-ui`, so no font files ship.
- A fully custom-drawn logotype is a deferred **v2** — set type is intentional for now.

---

## 6. Spacing, radii, elevation

Reuse the Sparepay app's scale so studio and product feel consistent.
- **Spacing (px):** 4 / 8 / 12 / 16 / 24 (xs / sm / md / lg / xl).
- **Radii (px):** 6 / 12 / 18 (small / medium / large).
- **Elevation:** on light — soft two-layer shadow; on dark — glow + hairline (`rgba(255,255,255,.06)`).

---

## 7. Motion

Motion is **rich but disciplined**, and **entirely optional**:
- Hero gradient parallax + floating glow orbs; animated gradient mesh.
- Sections fade + rise on scroll (staggered); product cards lift + accent-glow on hover.
- Nav blur/condense at the fold; scroll-progress bar; stat count-ups; subtle Prism
  refraction shimmer on the mark.

> **Mandate:** every animation is gated behind `@media (prefers-reduced-motion: reduce)` /
> `matchMedia('(prefers-reduced-motion: reduce)')`. With reduced motion, the site is fully
> static and all content/layout is intact. Motion never affects contrast or legibility.

---

## 8. Site expression

- **Mood:** dark aubergine hero (violet glow) → **light body** for readable content →
  dark footer.
- **Engine:** custom static HTML/CSS/JS (no Jekyll); served at **www.amarasapps.com**.
- **URLs:** `/` studio landing · `/sparepay/` product + support · `/sparepay/privacy/`
  privacy policy.
- **Contact:** `support@amarasapps.com`.
- Always include the disclaimer: *Sparepay/AmarasApps is not affiliated with Apple Inc.
  Apple, iCloud, CloudKit and Apple Intelligence are trademarks of Apple Inc.*

---

_Last updated: 23 Jul 2026._
