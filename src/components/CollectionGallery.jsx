import CollectionBadge from './CollectionBadge';
import ComingSoonNotice from './ComingSoonNotice';
import { useCollectionImages } from '../hooks/useCollectionImages';
import { cloudinaryUrl } from '../utils/cloudinary';
import { clearSkeleton, clearSkeletonIfLoaded } from '../utils/imgSkeleton';

function CollectionGallery({ category, folder }) {
  const { images, loading } = useCollectionImages(folder);

  // Avoid a flash of "0 Photos" / Coming Soon before we actually know.
  if (loading) return null;

  return (
    <>
      <CollectionBadge category={category} photoCount={images.length} />
      {images.length === 0 ? (
        <ComingSoonNotice />
      ) : (
        <div className="CollectionGallery">
          {images.map((img) => (
            <img
              key={img.public_id}
              src={cloudinaryUrl(img.public_id, { width: 1600 })}
              width={img.width}
              height={img.height}
              alt={`${category} photo`}
              className="img-skeleton"
              ref={clearSkeletonIfLoaded}
              onLoad={clearSkeleton}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default CollectionGallery;
