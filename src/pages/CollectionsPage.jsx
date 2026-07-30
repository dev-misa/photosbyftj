import arch1 from "../assets/images/arch1.jpeg"
import landscape1 from "../assets/images/landscape1.jpeg"
import nature1 from "../assets/images/nature1.jpeg"
import street1 from "../assets/images/street1.jpeg"
import { Link } from "react-router-dom";
import { clearSkeleton, clearSkeletonIfLoaded } from "../utils/imgSkeleton";



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
          <img src={nature1} width="768" height="1024" className="img-skeleton" alt="Nature collection" ref={clearSkeletonIfLoaded} onLoad={clearSkeleton} />
          </Link>

          <Link to="/collections/architecture">
          <img src={arch1} width="1024" height="768" className="img-skeleton" alt="Architecture collection" ref={clearSkeletonIfLoaded} onLoad={clearSkeleton} />
          </Link>

          <Link to="/collections/landscape">
          <img src={landscape1} width="1024" height="768" className="img-skeleton" alt="Landscape collection" ref={clearSkeletonIfLoaded} onLoad={clearSkeleton} />
          </Link>
          <Link to="/collections/street">
            <img src={street1} width="768" height="1024" className="img-skeleton" alt="Street collection" ref={clearSkeletonIfLoaded} onLoad={clearSkeleton} />
          </Link>
        </div>
        
      </div>

    </div>
  )
}

export default CollectionsPage