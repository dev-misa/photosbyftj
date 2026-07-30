## Before building or deploying

`.env` is gitignored and won't exist in a fresh clone/session. Without it,
`VITE_MEDIA_API_URL` is empty at build time and every collection page
silently shows no real photos ("Coming Soon"). Before running
`npm run build` or `npm run deploy`, always run:

```
cp .env.example .env
```

`.env.example` holds the real (non-secret) production values - the
Cloudinary API key/secret stay server-side in the Cloudflare Worker and are
never part of this file.
