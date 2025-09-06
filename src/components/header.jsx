import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';   // <-- add this
import pfp from '../assets/images/josh pfp.png';
import sun from '../assets/images/sun-icon.svg';
import moon from '../assets/images/moon-icon.svg';
import abouticon from '../assets/images/about-icon.svg';
import collectionsicon from '../assets/images/collections-icon.svg';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <div className="Header">
      <div className="MainLogo">
        <img src={pfp} alt="josh" />
      </div>

      <div className="Logo">
        <h2 className="ftj">Felix Josh</h2>
        <h2 className="pht">p h o t o g r a p h y</h2>
      </div>

    
<nav className="NavLinks">
<NavLink to="/" end className={({isActive}) => `navlink ${isActive?'active':''}`} aria-label="About">
<svg className="icon" viewBox="0 0 50 50" aria-hidden="true">
    {/* shoulders/bust */}
    <path
    
      d="M13.334 41.4688V36.2734C13.334 33.512 15.5726 31.2734 18.334 31.2734H24.1681H30.0022C32.7637 31.2734 35.0022 33.512 35.0022 36.2734V41.4688"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    />
    {/* head: outline only (no fill) */}
    <circle
      cx="24.1689"
      cy="17.8902"
      r="6.98"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"   /* tweak 2–3 to taste */
    />
  </svg>

    
  <span className="label">About</span>
</NavLink>

<NavLink to="/collections" className={({isActive}) => `navlink ${isActive?'active':''}`} aria-label="Collections">
<svg className="icon" viewBox="0 0 50 50" aria-hidden="true">
    {/* Background rect not needed if you style the chip in CSS; remove or set fill="none" */}
    {/* <rect width="50" height="50" rx="25" fill="none" /> */}

    <path
      d="M29.5 10.0039H35C37.7614 10.0039 40 12.2425 40 15.0039V20.5039M29.5 10.0039V40.0039M29.5 10.0039H20.5M29.5 40.0039H35C37.7614 40.0039 40 37.7653 40 35.0039V29.5039M29.5 40.0039H20.5M20.5 10.0039H15C12.2386 10.0039 10 12.2425 10 15.0039V20.5039M20.5 10.0039V40.0039M20.5 40.0039H15C12.2386 40.0039 10 37.7653 10 35.0039V29.5039M10 20.5039H40M10 20.5039V29.5039M40 20.5039V29.5039M10 29.5039H40"
      fill="none"
      stroke="currentColor"   // << follows link color
      strokeWidth="3"
    />
  </svg>

  <span className="label">Collections</span>
</NavLink>


  <button onClick={toggleTheme} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
    <img src={darkMode ? moon : sun} alt="toggle theme" width="38" />
  </button>
</nav>

    </div>
  );
};

export default Header;
