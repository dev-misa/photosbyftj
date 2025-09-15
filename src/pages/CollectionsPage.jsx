import React from 'react'
import arch1 from "../assets/images/arch1.jpeg"
import landscape1 from "../assets/images/landscape1.jpeg"
import nature1 from "../assets/images/nature1.jpeg"
import street1 from "../assets/images/street1.jpeg"
import { Link } from "react-router-dom";



function CollectionsPage() {
  return (
    <div>
      <br /><br /><br /><br /><br /><br />
      <div className="CollectionsPageHeadline">
        <h1>Visual Stories</h1>
        <p>Lorem dolor semper justo magna vitae.</p>
        <div className="ColMemContainer">
          <h2>4&nbsp;</h2>
          <div className="separator"></div>
          <h2>&nbsp;∞</h2>
        </div>
        <br /><br />
            
          
        <div className="PhotoCategories">
          <Link to="/collections/nature">
          <img src={nature1} />
          </Link>

          <Link to="/collections/architecture">
          <img src={arch1}  />
          </Link>

          <Link to="/collections/landscape"><img src={landscape1} alt="" /></Link>
          <Link to="/collections/street"><img src={street1} alt="" /></Link>
        </div>
      </div>

    </div>
  )
}

export default CollectionsPage