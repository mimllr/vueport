# Mike Miller — Product Leadership Platform Style Guide

## Overall Impression

This is a polished, high-craft personal portfolio for a senior product manager. The aesthetic is editorial and restrained — it communicates technical credibility and intellectual seriousness without visual excess. The design system leans heavily on tight negative tracking, extreme font weights, and a controlled teal/charcoal palette to project confidence and precision. Dark teal panels used for featured content create moments of visual drama against an otherwise clean white-and-light-gray canvas. The overall mood is that of a well-edited product document: structured, scannable, and purposeful, with just enough personality (italic headlines, wry copy, subtle textures) to feel human.

---

## Color

| Role | Name | Hex | Usage |
|---|---|---|---|
| Primary accent | Teal | `#0f766e` | Links, labels, eyebrow text, metric numbers, active states, CTA text |
| Dark surface | Teal Dark | `#0d3330` | Philosophy sections, CTA band backgrounds, featured dark panels |
| Card surface | Teal Card | `#0f4c47` | Hero card gradient start, opportunity card gradient |
| Light tint | Teal Light Bg | `#f0fdf4` | Badge backgrounds, skill tag hover, button hover fill |
| Primary text | Charcoal | `#111827` | Body text, headings, nav logo |
| Secondary text | Muted | `#6b7280` | Body copy, captions, nav links, meta labels |
| Surface | Light Gray | `#f8f8f8` | Alternating section bands, card backgrounds, hover states |
| Borders | Border | `#e5e7eb` | All dividers, card edges, input borders |
| Background | White | `#ffffff` | Page backgrounds, card surfaces |

**Dark panel text hierarchy:** White `#ffffff` for primary text, `rgba(255,255,255,0.7)` for body copy, `rgba(255,255,255,0.55)` for secondary/italic, `rgba(255,255,255,0.35–0.5)` for dimmed labels.

**Status colors:**
- Live/green: `#059669` text, `#ecfdf5` background, `#a7f3d0` border
- Beta/amber: `#d97706` text, `#fffbeb` background, `#fde68a` border
- Soon/neutral: uses standard muted/border/light-gray values

---

## Typography

**Typeface:** Inter (Google Fonts), variable optical size `14–32`, weights `100–900`, with italic variants. System fallbacks: `-apple-system`, `BlinkMacSystemFont`, `sans-serif`. Antialiasing: `-webkit-font-smoothing: antialiased`.

### Size Hierarchy

| Element | Size | Weight | Letter Spacing | Line Height |
|---|---|---|---|---|
| Hero headline (home) | `clamp(56px, 5.5vw, 88px)` | 800 / 300 mixed | `-0.04em` | `1.0` |
| Hero headline (inner pages) | `clamp(48px, 4.5vw, 72px)` | 800 | `-0.04em` | `1.0` |
| Contact headline | `80px` | 800 | `-0.04em` | `1.0` |
| Page headline (resume) | `64px` | 800 | `-0.04em` | `1.0` |
| Section title | `36px` | 800 | `-0.04em` | — |
| Case/project title | `26–28px` | 700 | `-0.03em` | `1.1` |
| Card title | `20–22px` | 700 | `-0.03em` | `1.2–1.25` |
| Hero body | `18px` | 400 | — | `1.75` |
| Body / bio text | `17–18px` | 400 | — | `1.85` |
| Nav links | `14px` | 500 | `-0.01em` | — |
| Body small | `14–15px` | 400 | — | `1.6–1.7` |
| Eyebrow / section label | `11px` | 600 | `0.12em` | — |
| Footer nav | `12–14px` | 400–600 | `0.08em` | — |

**Weight usage:** 800 for hero and section headings, 700 for card titles and bold inline text, 600 for labels, eyebrows, and active UI text, 500 for nav and secondary UI, 400 for body copy, 300 for light/italic headline contrast words.

**Italic:** Used sparingly for philosophical contrast — e.g., `"Product as craft."` where `craft` is italic weight 300 — and for blockquotes in dark panels.

---

## Spacing and Layout

**Max content width:** `1400px`, centered with `margin: 0 auto`.

**Horizontal padding:** `48px` on desktop, `24px` on mobile.

**Section vertical padding:** `96px` top/bottom for primary content sections; `64–80px` for supporting sections; `56px` for resume body.

**Navbar height:** `64px`, sticky, with `backdrop-filter: blur(8px)`.

**Grid layouts:**
- Hero: `58–60% / 40–42%`, `gap: 72–80px`
- Metrics band: `repeat(4, 1fr)` with `1px` dividers between cells
- Case/project list: `80px 1fr auto`, `gap: 48px`
- Footer: `1.6fr 1fr 1fr 1fr`, `gap: 64px`
- Thinking/article grid: `repeat(3, 1fr)`, `gap: 2px` (border-separated mosaic)
- Resume: `65% / 35%`, `gap: 64px`
- Contact: `55% / 45%`, `gap: 80px`

**Spacing scale (recurring values):** `4px`, `6px`, `8px`, `10px`, `12px`, `14px`, `16px`, `20px`, `24px`, `28px`, `32px`, `36px`, `40px`, `48px`, `56px`, `64px`, `80px`, `96px`.

**Section bands:** Alternating white and `#f8f8f8` backgrounds with `1px solid #e5e7eb` top/bottom borders to delineate regions without hard graphical separation.

---

## Components

### Navbar
Sticky, 64px tall, frosted glass: `background: rgba(255,255,255,0.97)`, `backdrop-filter: blur(8px)`, `border-bottom: 1px solid #e5e7eb`. Logo is 15px / weight 600. Nav links are 14px / weight 500 / muted gray, turning charcoal on hover. Active link is charcoal. The far-right CTA is teal text with a `→` that animates gap from `4px` to `8px` on hover.

### Hero Card / Opportunity Card
Dark teal gradient panel: `background: linear-gradient(135deg, #0f4c47, #134e4a)`, `border-radius: 16px`, `padding: 40px`. Features a subtle grid texture overlay (repeating lines at 28px intervals, 3% white opacity). Contains identity block (avatar + name), a horizontal rule at 15% white opacity, stat list with `28px / weight 800` numbers, and pill-shaped skill badges.

### Chips / Skill Badges (Light)
`padding: 7px 16px`, `border: 1.5px solid #0f766e`, `border-radius: 100px`, 13px / weight 500, teal color. On hover: fills with teal background, text turns white.

### Skill Badges (Dark, on dark panels)
`padding: 5px 14px`, `background: rgba(255,255,255,0.10–0.12)`, `border: 1px solid rgba(255,255,255,0.18–0.20)`, `border-radius: 100px`, 12px / weight 500, 70% white text.

### Case / Project Rows
Three-column grid: number | content | CTA. `padding: 36–40px 0`, `border-bottom: 1px solid #e5e7eb`, with a heavy `1.5px solid #111827` top border on the list. On hover: background fills to `#f8f8f8` and the row shifts with negative margin / added padding (`margin: 0 -24px; padding: 36px 24px`). The CTA arrow animates gap from `4px` to `8px`.

### Thinking Cards
White panels inside a `gap: 2px` grid with `#e5e7eb` background (creating hairline borders between cells). `padding: 36px 32px`, `border-radius: 12px` (on the container). Card footer: `border-top: 1px solid #e5e7eb`, date (12px muted) left, "Read →" (13px teal, weight 600) right.

### Buttons

| Variant | Background | Border | Text |
|---|---|---|---|
| Primary (on dark) | `white` | `white` | `#0d3330` |
| Outline (on dark) | `transparent` | `rgba(255,255,255,0.35–0.4)` | `white` |
| Primary (on light) | `#0f766e` | `#0f766e` | `white` |
| Outline (on light) | `transparent` | `#0f766e` | `#0f766e` |

All buttons: `border-radius: 8px`, `padding: 11–16px 22–32px`, `font-size: 13–15px`, `font-weight: 500–600`, `letter-spacing: -0.01em`. Hover: `translateY(-1px)` lift with `box-shadow`.

### Filter Pills
`padding: 8px 18px`, `border-radius: 100px`, `border: 1.5px solid #e5e7eb`, muted text. Active state: `background: #0f766e`, white text.

### Status / Available Badges
Pill-shaped: `border-radius: 100px`, `padding: 6–8px 14–16px`. Teal text on `#f0fdf4` background. Includes a 6px animated dot (`pulse` keyframe: opacity 1→0.4→1, 2s infinite). Live product badges on dark backgrounds use semi-transparent green/amber tints.

### Tags (case/project categories)
`font-size: 11px`, `font-weight: 600`, `letter-spacing: 0.08em`, `text-transform: uppercase`, `background: #f3f4f6`, `padding: 4px 10px`, `border-radius: 4px`.

### Facts / Info Cards (sidebar)
`border: 1px solid #e5e7eb`, `border-radius: 12px`, `padding: 32px`. Row-based layout with `grid-template-columns: 120px 1fr`, items separated by `1px solid #e5e7eb` bottom borders. Labels 11px / weight 600 / uppercase / muted; values 15px / weight 700 / charcoal.

### Footer
White background, `1px` top border. Four-column grid. Column headers: 12px / weight 600 / uppercase / `letter-spacing: 0.08em`. Links: 14px / weight 400 / muted, teal on hover. Bottom bar has copyright (12px muted) and utility links at 12px, separated by a `1px` top rule.

---

## Imagery and Iconography

**Photography:** Professional headshots and founder portraits used in hero cards and founder sections. Images are `object-fit: cover` inside fixed containers with `border-radius: 50%` (avatar, 56px) or `border-radius: 16px` (founder portrait). Hero card avatar has a `1.5px solid rgba(255,255,255,0.2)` border ring.

**Icons:** Font Awesome icons referenced inline (`fa-shield-halved`, `fa-cube`, `fa-rocket`, `fa-seedling`, `fa-envelope`, `fa-linkedin-in`). Used at small sizes (12–20px) in value blocks and buttons. Product card icons are emoji characters rendered inside 40×40px rounded squares with a semi-transparent teal background.

**Textures:** Dark panel cards use a repeating CSS grid texture (`repeating-linear-gradient` lines every 28px at 3% white opacity) to add subtle depth. A noise SVG overlay at 4–5% opacity adds grain to the hero card and opportunity card.

**Decorative elements:** Section eyebrows use a 20px × 1.5px horizontal rule before the text (CSS `::before` pseudo-element, teal). Philosophy/CTA sections use a 40px × 2px rule above body text as a visual spacer.

**Arrows:** Plain text `→` and `↗` characters used universally for directional CTAs, with animated gap widening on hover rather than icon replacement.

---

## Voice and Tone

The copy is direct, opinionated, and self-assured without being boastful. It communicates expertise through specificity rather than adjectives, favors declarative statements with editorial bite, and uses the em dash and colon heavily to add rhythm. Formality is mid-range — professional but conversational, written in first person, never corporate. The writing signals that this person thinks carefully about systems and language.

**Representative phrases:**

- *"The best products aren't built — they're cultivated. Every decision compounding over time, every edge case a signal, every user frustration an invitation to go deeper."*
- *"Capability isn't the bottleneck. Trust is."*
- *"We ship early and tell users exactly what's missing. Honest betas beat polished vaporware. Real feedback beats imagined feedback every time."*