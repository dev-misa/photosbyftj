import React from 'react'
import arch1 from "../assets/images/arch1.jpeg"
import landscape1 from "../assets/images/landscape1.jpeg"
import nature1 from "../assets/images/nature1.jpeg"
import street1 from "../assets/images/street1.jpeg"


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
          <img src={nature1} alt="" />
          <img src={arch1} alt="" />
          <img src={landscape1} alt="" />
          <img src={street1} alt="" />
        </div>
      </div>

    </div>
  )
}

export default CollectionsPage