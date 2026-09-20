# VTVS design system

Quiet Czech atelier. The visitor already has a recommendation. The page should feel like a well-set letter beside a photograph of the room — not a landing page.

Space is used by the split. Type sits in a narrower left column; the photograph takes the rest. Empty mastheads, decorative rules, faded captions, and kit chrome waste that space.

## Type

| Role | Face | Size | Weight | Tracking | Leading | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Display (H1) | Newsreader, optical ~72, roman | `clamp(2.5rem, 4.6vw, 4.15rem)` | 500 | `-0.03em` | 1.05 | `--ink` |
| Body / lead / nav / phones | Satoshi | 1.125rem | 500 | 0 | 1.55 | `--ink` |
| Kontakt button | Satoshi | 1.25rem | 500 | 0 | 1 | `--paper` on `--mark` |

All reading text is full opacity `--ink`. Do not set body, lead, phones, slogan, or nav to a faded gray. Hover may use `--mark`.

H1 is never italic. Satoshi is never a display face. No Inter, Roboto, Cormorant, Manrope.

Czech diacritics must render. Satoshi is self-hosted (`src/fonts`). Newsreader is loaded with `latin-ext` and the `opsz` axis.

## Color

| Token | Hex | Use |
| --- | --- | --- |
| `--paper` | `#EFEBE3` | Page background |
| `--ink` | `#1C1915` | All type |
| `--mark` | `#6E1F1C` | Hero **Kontakt** button fill; hover on phones |
| `--hair` | `#D6D0C6` | 1px gaps in catalog grids. Not decorative rules under titles |

`--quiet` is not used for copy. Selection inverts ink and paper. Oxblood is the filled **Kontakt** button on the hero — square corners, paper type. Not a page wash, not a gradient, not a pill.

## Grid

Desktop (≥ 960px): `minmax(20rem, 2fr) 3fr` (40% copy / 60% photo), `min-height: 100svh`. Photograph bleeds to the top of the viewport, under the nav.

Spacing uses φ (`--space-m` 1.618rem … `--space-3xl` 11.09rem). Page pad is `clamp(2.618rem, 6.18vw, 6.854rem)`.

- Left: copy, **top-aligned**. Desktop padding `calc(var(--header-h) + 11.09rem) 4.236rem 11.09rem var(--page-pad)`.
- Right: photograph, `object-fit: cover`, bleeds to the viewport edge **and under the navbar**.

Do not vertically center the copy in the column. Do not use a 50/50 split. Phones stay in `#kontakt`, not on the hero.

Mobile: type first, then a full-bleed photo.

Header is `position: fixed` over the hero. Transparent progressive blur (stacked `backdrop-filter` + mask, no color wash). No bottom border. The photo sits underneath.

## Motion

No entrance animation. No press-scale on links. Honor `prefers-reduced-motion`.

## Recipes

**Header.** Fixed over the split. CZ/EN left, logo centered (slightly larger), nav right — same bar as LDI. Progressive blur. Photograph on the right runs under the nav to the top of the viewport. When the bar sits over a photograph, the logo and right-side nav (and the mobile Menu toggle) go white; CZ/EN stay `--ink`. Instant swap when the photo leaves the header strip.

**Hero.** H1 → lead → wine **Kontakt** button (`#kontakt`). No slogan, no phones, no “Naše služby” pair. Photograph is a sibling column. Space after the H1 is `--space-xl`; before the button, `--space-2xl`.

**Kontakt button.** `--mark` fill, `--paper` type, square. Padding `0.7rem 1.4rem`, type 1.25rem. Hover: `--ink` fill. Not a pill.

**Services.** Own section under the hero (`#sluzby`), before contact. Intro is the hero split: Newsreader “Služby” left, Satoshi lead right. Then a two-column letter list of complete items (name + sentence in each cell), last item spanning. No catalog cells, cards, bullets, or pills.

**About page.** Separate route `/o-nas`. Opening split like the hero, shorter (`min-height: 70svh`), desk photograph not the homepage room. H1 “O nás”, origo history in Satoshi. **Podporujeme** stays a catalog band. **Odkazy** is a conventional directory on the left; **Naši partneři** sits to the right as a 1px `--hair` catalog with Pohoda and Stormware logos. Nav **O nás** points here.

**Contact / footer.** Site-wide `#kontakt` after the last content. Desktop split `2fr / 3fr` with content in both columns: heading + phones and e-mail left; office, seat, IČ/DIČ and court right. Copy icon, “Zkopírováno” in place. No letter form. Colophon under the split: copyright, IČ, slogan in Newsreader italic. Same block on `/`, `/o-nas`, and `/cenik`.

**Pricing.** Separate route `/cenik`. Letter under the fixed nav, no photo hero and no catalog cells. Intro uses the same `2fr / 3fr` split (H1 left, origo lead right), then full-width tariff rows (item left, net/gross right, Satoshi, tabular nums). Groups in Newsreader `--space-m`: Daňová přiznání, Kontroly, Poradenství, Účetnictví, Mzdy. Nav **Ceník** points here.

**Slogan.** Not on the hero. Allowed in the footer colophon, Newsreader italic.

**Phone row.** One line per person: name, number. Same size, same ink. `tel:` links.

## Do not

- Faded or reduced-opacity body text
- `-webkit-font-smoothing: antialiased` (it thins ink on paper)
- Small tracked captions, trust middot lines, or meta labels
- Hamburger icons
- Eyebrow text
- Decorative horizontal rules (catalog grids use 1px `--hair` gaps as structure, not rules under titles)
- Vertical centering of hero copy
- Equal 50/50 columns
- Gradient overlays on photos
- Box shadows, floating rounded cards
- Pill buttons (the wine Kontakt button is square)
- `animate-bounce`, purple gradients, Inter
- Italic display headlines
