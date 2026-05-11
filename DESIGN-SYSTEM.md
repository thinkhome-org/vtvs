# VTVS — Design system v2

Editorial, light-only site for Daně - VTVS s.r.o. Burgundy `#862421`, teal `#1A5C73`, warm paper `#F6F2EA`.

## Layout

- **Desktop (≥1024px):** sticky left sidebar `280px`, content column with `1px` hairline left border, max reading width `720px`, broad `960px` for tables.
- **Mobile:** sticky top bar + hamburger; fullscreen overlay nav; sidebar hidden.
- **≥1280px:** optional vertical “Est. 1997” stamp in the gutter.

## Typography

- **Headings:** Source Serif 4 Variable, 500–600. Display `3.5rem` (hero), H1 `2.5rem`, H2 `1.625rem`.
- **Body:** Inter Variable, 400/500, `1rem` / 1.65.
- **Eyebrows:** IBM Plex Mono, 11px uppercase, tracked `0.12em`; index in burgundy.
- **Numbers:** IBM Plex Mono for prices, VAT, dates.

## Components

- **PageHeader:** eyebrow (index + em dash + label) + H1 + optional lead.
- **SectionRule:** hairline + 4×4 burgundy square.
- **ChapterBlock:** numbered section with top border.
- **Buttons:** primary burgundy fill; secondary outline. Radius `2px` only.
- **Links:** teal; underline on hover.

## Motion

- Transitions `150ms`–`200ms` ease-out. Respect `prefers-reduced-motion: reduce`.

## Do not

- No dark mode. No gradients except hero photo fade to paper. No card shadows. No radius > 2px. No emoji/Lucide marketing grids. No “Book a call” CTAs.
