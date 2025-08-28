import React from 'react';
import pfp from "../assets/images/josh pfp.png";
import sun from "../assets/images/sun-icon.svg";
const Header = () => {
  return (
      <div className="Header">
        
        <div className="MainLogo">
        <img src={pfp} alt="josh" />
      </div>

      <div className="Logo">
       <h2 className="ftj">Felix Josh</h2>
       <h2 className="pht">P h o t o g r a p h y</h2>
      </div>
      <div className="NavLinks">
        <h2>About</h2>
        <h2>Collections</h2>
        <img src={sun} alt="" />
      </div>
      </div>
      
    
  );
};

export default Header;