# photosbyftj media API

A small Cloudflare Worker that lets the site fetch each collection's photo
list from Cloudinary at runtime, without exposing the Cloudinary API secret
to the browser. Independent from the main Vite app - its own
`package.json`/deploy, never bundled into the site.

## One-time setup

1. Create a free Cloudinary account, note the **Cloud Name** on the dashboard.
2. In Cloudinary's Media Library, create folders named exactly `nature`,
   `architecture`, `street`, `landscape`.
3. Cloudinary → Settings → API Keys: copy the **API Key** and **API Secret**.
4. Create a free Cloudflare account if you don't have one (no domain needed
   for a `*.workers.dev` URL).
5. From this directory:
   ```
   npm install
   npx wrangler login
   npx wrangler secret put CLOUDINARY_API_KEY
   npx wrangler secret put CLOUDINARY_API_SECRET
   ```
6. Set the real Cloud Name in `wrangler.toml` (`CLOUDINARY_CLOUD_NAME`).
7. Deploy:
   ```
   npx wrangler deploy
   ```
   Note the printed `https://photosbyftj-media-api.<subdomain>.workers.dev`
   URL.
8. Sanity check: open `<that-url>/?folder=nature` in a browser. Should
   return `{"resources":[]}` before any photo has been uploaded.
9. Back in the repo root, copy `.env.example` to `.env` and fill in that
   Worker URL as `VITE_MEDIA_API_URL`, plus your Cloud Name as
   `VITE_CLOUDINARY_CLOUD_NAME`. Then `npm run build && npm run deploy` once.

After that, dragging a photo into a Cloudinary folder makes it appear on
the live site within ~60 seconds (the Worker's edge-cache TTL) - no rebuild
needed. A rebuild is only needed again if the Worker URL or Cloud Name ever
changes.

## Local development

`npm run dev` (i.e. `wrangler dev`) reads Cloudinary credentials from a
`.dev.vars` file in this directory (gitignored) instead of real secrets:

```
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
```
