const API_URL = import.meta.env.VITE_MEDIA_API_URL;

// No API URL configured -> keep today's static/bundled behavior, no
// network call at all (this is the fallback for local dev and for the
// site as shipped before the Cloudinary pipeline is set up).
export async function fetchCollectionImages(folder, { signal } = {}) {
  if (!API_URL) return [];

  const response = await fetch(`${API_URL}?folder=${encodeURIComponent(folder)}`, { signal });
  if (!response.ok) throw new Error(`Media API request failed: ${response.status}`);

  const data = await response.json();
  return data.resources || [];
}
