import arch1 from "../assets/images/arch1.jpeg"
import landscape1 from "../assets/images/landscape1.jpeg"
import nature1 from "../assets/images/nature1.jpeg"
import street1 from "../assets/images/street1.jpeg"
import { Link } from "react-router-dom";
import { clearSkeleton, clearSkeletonIfLoaded } from "../utils/imgSkeleton";
import { useCollectionImages } from "../hooks/useCollectionImages";
import { cloudinaryUrl } from "../utils/cloudinary";

const STACK_SIZE = 3;

// A small fanned-out photo stack (up to 3 real Cloudinary photos, layered
// with depth) once a collection has content, otherwise today's single
// bundled placeholder jpeg - either way it's sized by the fixed-aspect
// .CollectionStack container, not by the photos' own dimensions.
function CollectionStack({ folder, alt, fallbackSrc }) {
  const { images } = useCollectionImages(folder);
  const stackImages = images.slice(0, STACK_SIZE);

  return (
    <div className="CollectionStack">
      {stackImages.length === 0 ? (
        <img
          src={fallbackSrc}
          alt={alt}
          className="img-skeleton CollectionStack-item CollectionStack-item-0"
          ref={clearSkeletonIfLoaded}
          onLoad={clearSkeleton}
        />
      ) : (
        stackImages.map((img, i) => (
          <img
            key={img.public_id}
            src={cloudinaryUrl(img.public_id, { width: 600 })}
            alt={i === 0 ? alt : ''}
            className={`img-skeleton CollectionStack-item CollectionStack-item-${i}`}
            ref={clearSkeletonIfLoaded}
            onLoad={clearSkeleton}
          />
        ))
      )}
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
          <CollectionStack folder="nature" alt="Nature collection" fallbackSrc={nature1} />
          </Link>

          <Link to="/collections/architecture">
          <CollectionStack folder="architecture" alt="Architecture collection" fallbackSrc={arch1} />
          </Link>

          <Link to="/collections/landscape">
          <CollectionStack folder="landscape" alt="Landscape collection" fallbackSrc={landscape1} />
          </Link>
          <Link to="/collections/street">
            <CollectionStack folder="street" alt="Street collection" fallbackSrc={street1} />
          </Link>
        </div>

      </div>

    </div>
  )
}

export default CollectionsPage