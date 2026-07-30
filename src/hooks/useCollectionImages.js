import { useEffect, useState } from 'react';
import { fetchCollectionImages } from '../utils/mediaApi';

export function useCollectionImages(folder) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    fetchCollectionImages(folder, { signal: controller.signal })
      .then((resources) => {
        if (!controller.signal.aborted) setImages(resources);
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
