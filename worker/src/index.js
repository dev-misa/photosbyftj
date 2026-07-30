const ALLOWED_FOLDERS = new Set(['nature', 'architecture', 'street', 'landscape']);
const ALLOWED_ORIGINS = new Set(['https://photosbyftj.com', 'http://localhost:5173']);
const CACHE_TTL_SECONDS = 60;

function corsHeaders(origin) {
  const headers = new Headers();
  if (origin && ALLOWED_ORIGINS.has(origin)) {
    headers.set('Access-Control-Allow-Origin', origin);
    headers.set('Vary', 'Origin');
  }
  headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
  headers.set('Access-Control-Allow-Headers', 'Content-Type');
  return headers;
}

function jsonResponse(body, status, origin) {
  const headers = corsHeaders(origin);
  headers.set('Content-Type', 'application/json');
  return new Response(JSON.stringify(body), { status, headers });
}

export default {
  async fetch(request, env, ctx) {
    const origin = request.headers.get('Origin');

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    if (request.method !== 'GET') {
      return jsonResponse({ error: 'Method not allowed' }, 405, origin);
    }

    const url = new URL(request.url);
    const folder = url.searchParams.get('folder');

    if (!folder || !ALLOWED_FOLDERS.has(folder)) {
      return jsonResponse({ error: 'Unknown or missing folder' }, 400, origin);
    }

    if (!env.CLOUDINARY_API_KEY || !env.CLOUDINARY_API_SECRET || !env.CLOUDINARY_CLOUD_NAME) {
      return jsonResponse({ error: 'Worker is not configured' }, 500, origin);
    }

    // Per-folder edge cache is the real protection against exhausting
    // Cloudinary's Admin API rate limit under real site traffic - CORS
    // above only restricts which browser JS can read the response.
    const cache = caches.default;
    const cacheKey = new Request(url.toString(), request);
    const cachedResponse = await cache.match(cacheKey);
    if (cachedResponse) {
      const withFreshCors = new Response(cachedResponse.body, cachedResponse);
      corsHeaders(origin).forEach((value, key) => withFreshCors.headers.set(key, value));
      return withFreshCors;
    }

    const auth = btoa(`${env.CLOUDINARY_API_KEY}:${env.CLOUDINARY_API_SECRET}`);
    const searchResponse = await fetch(
      `https://api.cloudinary.com/v1_1/${env.CLOUDINARY_CLOUD_NAME}/resources/search`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${auth}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // ORing asset_folder (Dynamic Folder Mode) and folder (Fixed
          // Folder Mode) means this works regardless of which mode the
          // Cloudinary account is in - no need to detect/branch on it.
          expression: `(asset_folder:${folder} OR folder:${folder})`,
          max_results: 100,
          fields: ['public_id', 'width', 'height'],
        }),
      }
    );

    if (!searchResponse.ok) {
      const detail = await searchResponse.text();
      return jsonResponse({ error: 'Cloudinary request failed', detail }, 502, origin);
    }

    const data = await searchResponse.json();
    const resources = (data.resources || []).map(({ public_id, width, height }) => ({
      public_id,
      width,
      height,
    }));

    const response = jsonResponse({ resources }, 200, origin);
    response.headers.set('Cache-Control', `public, max-age=${CACHE_TTL_SECONDS}`);
    ctx.waitUntil(cache.put(cacheKey, response.clone()));
    return response;
  },
};
