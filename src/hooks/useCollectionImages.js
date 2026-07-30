import { useEffect, useState } from 'react';
import { fetchCollectionImages } from '../utils/mediaApi';

const STORAGE_PREFIX = 'cycler-order:';

// Fisher-Yates.
function shuffle(array) {
  const result = array.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function loadOrder(folder) {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + folder);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveOrder(folder, order) {
  try {
    localStorage.setItem(STORAGE_PREFIX + folder, JSON.stringify(order));
  } catch {
    // localStorage unavailable (private mode, quota) - order just won't persist
  }
}

// Randomizes display order once per uploaded batch, then remembers that
// order (per folder, in localStorage) so it stays stable across visits.
// If the set of photo ids changes - a new upload or a deletion - it's a
// new batch, so we reshuffle and remember the new order instead.
function orderImages(folder, resources) {
  const currentIds = resources.map((img) => img.public_id);
  const storedOrder = loadOrder(folder);
  const sameBatch =
    storedOrder &&
    storedOrder.length === currentIds.length &&
    storedOrder.every((id) => currentIds.includes(id));

  const orderedIds = sameBatch ? storedOrder : shuffle(currentIds);
  if (!sameBatch) saveOrder(folder, orderedIds);

  const byId = new Map(resources.map((img) => [img.public_id, img]));
  return orderedIds.map((id) => byId.get(id));
}

export function useCollectionImages(folder) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    fetchCollectionImages(folder, { signal: controller.signal })
      .then((resources) => {
        if (!controller.signal.aborted) setImages(orderImages(folder, resources));
      })
      .catch((err) => {
        if (!controller.signal.aborted) {
          console.error(`Failed to load "${folder}" collection:`, err);
          setImages([]);
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, [folder]);

  return { images, loading };
}
