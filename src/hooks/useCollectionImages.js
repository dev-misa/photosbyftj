import { useEffect, useState } from 'react';
import { fetchCollectionImages } from '../utils/mediaApi';

// Fisher-Yates: randomizes display order once per fetch so upload order
// doesn't dictate which photo shows first.
function shuffle(array) {
  const result = array.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function useCollectionImages(folder) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    fetchCollectionImages(folder, { signal: controller.signal })
      .then((resources) => {
        if (!controller.signal.aborted) setImages(shuffle(resources));
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
