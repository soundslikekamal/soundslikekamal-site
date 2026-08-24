# soundslikekamal.com

Kamal Kamruddin's portfolio/business site, rebuilt as a Next.js app that pulls
live content from Notion, replacing the old Notion-hosted SPA (which had
rendering/SEO issues due to its JS-heavy architecture).

## Stack

- Next.js 15 (App Router) + React 19, TypeScript, CSS Modules
- Content: Notion API (`@notionhq/client`) via ISR (revalidates hourly)
- Fonts: JetBrains Mono (body/UI), Archivo (decorative hero wordmark)
- Deployed via Vercel, auto-deploy on push to `main`

## Setup

1. **Install dependencies**
   ```
   npm install
   ```

2. **Create a Notion integration**
   - Go to https://www.notion.so/my-integrations and create a new internal
     integration scoped to the "Kamal Kamruddin - Work" workspace.
   - Copy the integration token (starts with `secret_` or `ntn_`).
   - In Notion, open the Portfolio database and the Music Editing Portfolio
     database, click **•••  → Connections**, and add the integration to both
     (sharing the parent Website page also works and cascades down).

3. **Set environment variables** — copy `.env.local.example` to `.env.local`
   and fill in:
   ```
   NOTION_TOKEN=secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   NOTION_PORTFOLIO_DB_ID=2e744f72-c86c-81b1-bcd0-000b7f1c43db
   NOTION_MUSIC_EDITING_DB_ID=2e744f72-c86c-81f1-bc49-000b1474b337
   ```
   These IDs are the **data source IDs** (not page/database IDs) from the
   `collection://` URLs — already filled in above since they're stable for
   this workspace.

4. **Place image assets manually** — Notion's signed S3 URLs expire in ~5
   minutes and can't be fetched by build tooling, so two images need to be
   placed by hand into `/public`:
   - `public/logo.png` — the KK wordmark logo (used as a favicon/OG fallback;
     the on-page KK mark itself is inline SVG, see `components/Wordmark.tsx`)
   - `public/kamal-portrait.jpg` — the About page portrait photo

5. **Run locally**
   ```
   npm run dev
   ```

6. **Deploy** — push to `main`; Vercel auto-deploys. Set the same three env
   vars in the Vercel project settings.

## Content model

- **Portfolio** database → homepage "Featured Portfolio" (rows with
  `Featured` checked) and each service page's portfolio grid (filtered by the
  `Services` multi-select).
- **Music Editing Portfolio** database → the dense release grid on
  `/creative-music-editing` (separate schema: `Release Title`, `Catalogue`,
  `Artwork`, `View Album`).
- Card pastel colors and tag pill colors are derived from each item's
  `Services` tags in `lib/notion.ts` / `components/TagPill.tsx`, matching the
  live site's Notion page-color palette (pixel-sampled from screenshots).

## Known follow-ups

- The Contact page's "Book half an hour with me" section is a placeholder
  CTA (`app/contact/page.tsx`, `BOOKING_URL`) — swap in Kamal's real
  scheduling link (Cal.com / Calendly / Google Calendar appointment
  schedule) once available.
- `public/logo.png` and `public/kamal-portrait.jpg` need to be placed
  manually per step 4 above.
