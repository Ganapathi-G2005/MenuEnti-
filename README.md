# Mess Menu — Today

A small, mobile-first web app that shows *today's* mess menu — breakfast, lunch,
and dinner — as a swipeable stack of glassmorphism cards, based on the visitor's
local date.

## Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (swipe/drag carousel, animated tab pill)

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Deploy to Vercel
```bash
npx vercel
```
or connect the repo in the Vercel dashboard — no environment variables needed.

## How "today's menu" is picked
`lib/getTodayMenu.ts` reads the visitor's **local** date (`new Date()` in the
browser), maps it to a day of the week, and decides whether the mess's
**even-week** or **odd-week** rotation applies using the ISO-8601 week number
of that date (even ISO week → even-week menu). The app also re-checks itself
right after local midnight so it rolls over automatically without a refresh.

If your mess's actual odd/even labelling runs opposite to ISO week parity,
flip the `EVEN_ISO_WEEK_MEANS_EVEN_MENU` constant at the top of that file.

## Editing the menu
All menu content lives in `lib/menuData.ts` as a plain TypeScript object —
no CMS, no build step. Each day has `breakfast`, `lunch`, and `dinner`, each
with an `items` array and an optional `beverages` array. Edit the strings
directly; the UI picks up any change automatically.

A few cells in the source PDF's table had merged/wrapped rows that made the
day boundaries ambiguous (mostly the breakfast main-dish rows). Those were
reconstructed using neighboring accompaniment rows as anchors and common
pairings — worth a quick read-through against your physical mess board the
first time.

## Theme
Dark mode is the default. The toggle in the top-right persists the user's
choice to `localStorage` (`mess-menu-theme`) and is respected on the next visit.
