import arch1 from "../assets/images/arch1.jpeg"
import landscape1 from "../assets/images/landscape1.jpeg"
import nature1 from "../assets/images/nature1.jpeg"
import street1 from "../assets/images/street1.jpeg"
import { Link } from "react-router-dom";
import { clearSkeleton, clearSkeletonIfLoaded } from "../utils/imgSkeleton";
import { useCollectionImages } from "../hooks/useCollectionImages";
import { cloudinaryUrl } from "../utils/cloudinary";

// Shows the first real Cloudinary photo in a collection once it has one,
// otherwise falls back to today's bundled placeholder jpeg.
function CollectionCover({ folder, alt, fallbackSrc, fallbackWidth, fallbackHeight }) {
  const { images } = useCollectionImages(folder);
  const cover = images[0];

  return (
    <img
      src={cover ? cloudinaryUrl(cover.public_id, { width: 800 }) : fallbackSrc}
      width={cover ? cover.width : fallbackWidth}
      height={cover ? cover.height : fallbackHeight}
      className="img-skeleton"
      alt={alt}
      ref={clearSkeletonIfLoaded}
      onLoad={clearSkeleton}
    />
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
          <CollectionCover folder="nature" alt="Animals collection" fallbackSrc={nature1} fallbackWidth={768} fallbackHeight={1024} />
          </Link>

          <Link to="/collections/architecture">
          <CollectionCover folder="architecture" alt="Architecture collection" fallbackSrc={arch1} fallbackWidth={1024} fallbackHeight={768} />
          </Link>

          <Link to="/collections/landscape">
          <CollectionCover folder="landscape" alt="Landscape collection" fallbackSrc={landscape1} fallbackWidth={1024} fallbackHeight={768} />
          </Link>
          <Link to="/collections/street">
            <CollectionCover folder="street" alt="Street collection" fallbackSrc={street1} fallbackWidth={768} fallbackHeight={1024} />
          </Link>
        </div>

      </div>

    </div>
  )
}

export default CollectionsPage