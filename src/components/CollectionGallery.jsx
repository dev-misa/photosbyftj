import { useState } from 'react';
import CollectionBadge from './CollectionBadge';
import ComingSoonNotice from './ComingSoonNotice';
import { useCollectionImages } from '../hooks/useCollectionImages';
import { cloudinaryUrl } from '../utils/cloudinary';
import { clearSkeleton, clearSkeletonIfLoaded } from '../utils/imgSkeleton';

const ROLE_BY_OFFSET = ['front', 'peek-1', 'peek-2'];

function CollectionGallery({ category, folder }) {
  const { images, loading } = useCollectionImages(folder);
  const [index, setIndex] = useState(0);

  // Avoid a flash of "0 Photos" / Coming Soon before we actually know.
  if (loading) return null;

  const hasStack = images.length > 1;
  const cycle = () => setIndex((i) => (i + 1) % images.length);

  return (
    <>
      <CollectionBadge category={category} photoCount={images.length} />
      {images.length === 0 ? (
        <ComingSoonNotice />
      ) : (
        <div className="CollectionCycler">
          <button
            type="button"
            className="CollectionCycler-button"
            onClick={cycle}
            disabled={!hasStack}
            aria-label={hasStack ? 'Show next photo' : undefined}
          >
            {images.map((img, i) => {
              // Every photo keeps the same DOM node (keyed by public_id)
              // across cycles - only its role/class changes, so the CSS
              // transition actually animates it sliding between
              // front/peek/back instead of just swapping instantly.
              const offset = (i - index + images.length) % images.length;
              const role = ROLE_BY_OFFSET[offset] || 'back';
              return (
                <img
                  key={img.public_id}
                  src={cloudinaryUrl(img.public_id, { width: 1200 })}
                  alt={role === 'front' ? `${category} photo ${index + 1} of ${images.length}` : ''}
                  className={`img-skeleton CollectionCycler-item CollectionCycler-${role}`}
                  ref={clearSkeletonIfLoaded}
                  onLoad={clearSkeleton}
                />
              );
            })}
          </button>
          {hasStack && (
            <p className="CollectionCycler-count">{index + 1} / {images.length}</p>
          )}
        </div>
      )}
    </>
  );
}

export default CollectionGallery;
