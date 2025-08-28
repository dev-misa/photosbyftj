import React, { useState, useEffect } from "react";
import pfp from "../assets/images/josh pfp.png";
import sun from "../assets/images/sun-icon.svg";
import moon from "../assets/images/moon-icon.svg";

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

      <div className="NavLinks">
        <h2>About</h2>
        <h2>Collections</h2>
        {/* Dark mode toggle button */}
        <button onClick={toggleTheme} style={{ background: "none", border: "none", cursor: "pointer" }}>
          <img src={darkMode ? moon : sun} alt="toggle theme" width="38" />
        </button>
      </div>
    </div>
  );
};

export default Header;
