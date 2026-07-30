// Removes the shimmer placeholder once an image has actually loaded.
// CSS alone can't do this: transparent PNGs (e.g. the oval-cropped
// profile photo) never fully cover the skeleton background, so the
// class has to come off explicitly rather than just being painted over.
export function clearSkeleton(e) {
  e.currentTarget.classList.remove('img-skeleton');
}

// Handles images served from cache: onLoad never fires if the image
// was already `complete` by the time React attached the listener.
export function clearSkeletonIfLoaded(img) {
  if (img && img.complete) img.classList.remove('img-skeleton');
}
