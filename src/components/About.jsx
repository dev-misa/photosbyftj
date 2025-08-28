import React from 'react'
import pfp from "../assets/images/josh pfp.png"

function About() {
  return (
    <div className="AboutSection">
        <img src={pfp} alt="" />
        <div className="AbtMeBtn">
            <h2>Engineering Student & Photography Enthusiast</h2>
        </div>
        <div className="AbtMeHello">
            <div className="HelloIM">
                <h2>Hello, I'm </h2>
            </div>
             <div className="FTJ2">
                 <h2>Felix Josh</h2>
             </div>
        </div>
        <div className="AbtMeP">
            <p>
                An Electrical & Computer Engineering student designing with
                technology while capturing the world through photography.
            </p>
        </div>
        
    </div>
  )
}

export default About