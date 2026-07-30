const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

// f_auto/q_auto let Cloudinary pick the best format/compression per browser.
export function cloudinaryUrl(publicId, { width } = {}) {
  if (!CLOUD_NAME || !publicId) return null;
  const transforms = width ? `f_auto,q_auto,w_${width}` : 'f_auto,q_auto';
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transforms}/${publicId}`;
}
