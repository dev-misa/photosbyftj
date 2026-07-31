import { Link } from "react-router-dom";
import { clearSkeleton, clearSkeletonIfLoaded } from "../utils/imgSkeleton";
import { useCollectionImages } from "../hooks/useCollectionImages";
import { cloudinaryUrl } from "../utils/cloudinary";

// Shows a shimmering skeleton placeholder until the first real
// Cloudinary photo in a collection is ready - no bundled photo swap.
function CollectionCover({ folder, alt, title }) {
  const { images } = useCollectionImages(folder);
  const cover = images[0];

  return (
    <div className="CollectionCoverWrap">
      {cover ? (
        <img
          src={cloudinaryUrl(cover.public_id, { width: 800 })}
          width={cover.width}
          height={cover.height}
          className="img-skeleton"
          alt={alt}
          ref={clearSkeletonIfLoaded}
          onLoad={clearSkeleton}
        />
      ) : (
        <div className="img-skeleton CollectionCoverPlaceholder" aria-label={alt} role="img" />
      )}
      <span className="CategoryPill">{title}</span>
    </div>
  );
}

function CollectionsPage() {
  return (
    <div>
      <br /><br /><br /><br /><br /><br />
      <div className="CollectionsPageHeadline">
        <h1>Visual Stories</h1>
        <p>Where engineering precision meets artistic vision.</p>
        <div className="ColMemContainer">
          <h2>4&nbsp;</h2>
          <div className="separator"></div>
          <h2>&nbsp;∞</h2>
        </div>
        <br /><br />


        <div className="PhotoCategories">
          <Link to="/collections/nature">
          <CollectionCover folder="nature" alt="Animals collection" title="ANIMALS" />
          </Link>

          <Link to="/collections/architecture">
          <CollectionCover folder="architecture" alt="Architecture collection" title="ARCHITECTURE" />
          </Link>

          <Link to="/collections/landscape">
          <CollectionCover folder="landscape" alt="Landscape collection" title="LANDSCAPE" />
          </Link>
          <Link to="/collections/street">
            <CollectionCover folder="street" alt="Street collection" title="STREET" />
          </Link>
        </div>

      </div>

    </div>
  )
}

export default CollectionsPage