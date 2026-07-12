# Vestateck site

Marketing site for Vestateck, the company behind ClubVest. Built with
React + Vite + Tailwind + React Router.

## Run it locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173. Edit files in `src/pages` and `src/components`
— changes hot-reload instantly.

## Project structure

```
src/
  components/
    Nav.jsx       — top navigation
    Footer.jsx    — site footer
    Seal.jsx      — the circular "seal" mark, Vestateck's signature visual
  pages/
    Home.jsx
    Products.jsx
    About.jsx
    Contact.jsx
  App.jsx         — routes
  index.css       — Tailwind + global styles
tailwind.config.js — colors, fonts (edit here to change the palette)
```

## Design system

- **Colors** (in `tailwind.config.js`): `ink` (background), `panel`
  (cards), `gold`/`goldSoft` (accent, CTAs), `teal` (secondary accent),
  `paper` (light text), `muted` (secondary text), `line` (hairline
  borders). This is a placeholder palette — swap it once ClubVest's real
  brand colors are locked, and both sites can share the same tokens.
- **Fonts**: Fraunces (display/headings), Inter (body), IBM Plex Mono
  (labels, data, eyebrow text). Loaded via Google Fonts in `index.html`.
- **The seal**: a circular stamp motif referencing the seals used on
  Ugandan cooperative paperwork. Reused in the nav, hero, and footer as
  the recurring signature element.

## Before going live

1. Replace the `hello@vestateck.com` email placeholders with your real
   address once set up.
2. Update the `clubvest.com` links if ClubVest's real domain differs.
3. Personalize the founder bio paragraph in `src/pages/About.jsx`.
4. Swap the color palette in `tailwind.config.js` once ClubVest's brand
   colors are finalized, so both sites visually match.

## Deploy

**Vercel** (recommended, free tier is enough):
```bash
npm install -g vercel
vercel
```
Follow the prompts. It auto-detects Vite. For production: `vercel --prod`.

**Netlify**:
```bash
npm run build
```
Then drag the generated `dist/` folder into netlify.com/drop, or connect
the repo in the Netlify dashboard with build command `npm run build` and
publish directory `dist`.

Either way, once deployed, point `vestateck.com`'s DNS at the host
following their custom-domain instructions.
