# VTVS design system

Quiet Czech atelier. The visitor already has a recommendation. The page should feel like a well-set letter beside a photograph of the room — not a landing page.

Space is used by the split. Type sits in a narrower left column; the photograph takes the rest. Empty mastheads, decorative rules, faded captions, and kit chrome waste that space.

## Type

| Role | Face | Size | Weight | Tracking | Leading | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Display (H1) | Newsreader, optical ~72, roman | `clamp(2.5rem, 4.6vw, 4.15rem)` | 500 | `-0.03em` | 1.05 | `--ink` |
| Body / lead / nav / phones / actions / slogan | Satoshi (slogan: Newsreader italic) | 1.125rem | 500 | 0 | 1.55 | `--ink` |

All reading text is full opacity `--ink`. Do not set body, lead, phones, slogan, or nav to a faded gray. Hover may use `--mark`.

H1 is never italic. Satoshi is never a display face. No Inter, Roboto, Cormorant, Manrope.

Czech diacritics must render. Satoshi is self-hosted (`src/fonts`). Newsreader is loaded with `latin-ext` and the `opsz` axis.

## Color

| Token | Hex | Use |
| --- | --- | --- |
| `--paper` | `#EFEBE3` | Page background |
| `--ink` | `#1C1915` | All type |
| `--mark` | `#6E1F1C` | Hover on phones and text actions only |
| `--hair` | `#D6D0C6` | Reserved. Do not draw decorative rules with it |

`--quiet` is not used for copy. Selection inverts ink and paper. Oxblood is never a page wash, never a filled button, never a gradient.

## Grid

Desktop (≥ 960px): `minmax(20rem, 0.42fr) 1fr`, `min-height: calc(100svh - var(--header-h))`.

- Left: copy, **top-aligned**, padding `clamp(1.5rem, 4vw, 4rem)`.
- Right: photograph, `object-fit: cover`, bleeds to the viewport edge.

Do not vertically center the copy in the column. Do not use a 50/50 split.

Mobile: type first, then a full-bleed photo.

Header spans the full width above the split. Solid paper. No blur, no bottom border.

## Motion

No entrance animation. No press-scale on links. Honor `prefers-reduced-motion`.

## Recipes

**Header.** Logo left, nav + CZ/EN right, same size as body. The word “Menu” on small screens, not a hamburger. Sticky, solid paper. Native `<dialog>` on small screens.

**Hero.** H1 → lead → phones → text actions → slogan. No trust/meta line. Photograph is a sibling column.

**Text action.** Running sentence in the letter: “Naše služby, Kontaktujte nás”. Same size and ink as the lead. Underline 1px on hover (`--mark`).

**Phone row.** One line per person: name, number. Same size, same ink. `tel:` links.

**Slogan.** Newsreader italic, same size and ink as the lead. Not a larger signature lockup.

## Do not

- Faded or reduced-opacity body text
- `-webkit-font-smoothing: antialiased` (it thins ink on paper)
- Small tracked captions, trust middot lines, or meta labels
- Hamburger icons
- Eyebrow text
- Decorative horizontal rules
- Vertical centering of hero copy
- Equal 50/50 columns
- Gradient overlays on photos
- Box shadows, floating rounded cards
- Pill or filled buttons
- `animate-bounce`, purple gradients, Inter
- Italic display headlines
