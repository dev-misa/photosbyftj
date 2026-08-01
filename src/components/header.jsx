import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';   // <-- add this
import pfp from '../assets/images/josh pfp.png';
import { clearSkeleton, clearSkeletonIfLoaded } from '../utils/imgSkeleton';

const Header = () => {
  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains('dark-mode')
  );

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <div className="Header">
      <div className="MainLogo">
        <Link to="/" aria-label="Home">
          <img
            src={pfp}
            alt="josh"
            width="500"
            height="500"
            className="img-skeleton"
            ref={clearSkeletonIfLoaded}
            onLoad={clearSkeleton}
          />
        </Link>
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


  <button
    onClick={toggleTheme}
    aria-label="Toggle theme"
    className="theme-toggle"
    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
  >
    {darkMode ? (
      <svg className="theme-icon" viewBox="0 0 50 50" aria-hidden="true">
        <rect width="50" height="50" rx="25" fill="currentColor" fillOpacity="0.05" />
        <path
          d="M34.9572 30.9175C25.3059 30.9175 19.4154 25.1575 19.4154 15.8875C19.4154 13.21 19.9818 10.825 20.6161 9.65499C20.9106 9.09249 20.956 8.82246 20.956 8.41747C20.956 7.78751 20.3442 7 19.506 7C19.3701 7 18.9849 7.04497 18.4185 7.24749C11.7804 9.94746 7 16.6975 7 24.37C7 34.6525 15.4053 43 25.759 43C32.9862 43 39.511 38.995 42.7055 32.29C42.9774 31.75 43 31.3225 43 31.12C43 30.2875 42.275 29.7475 41.686 29.7475C41.3462 29.7475 41.1422 29.77 40.6665 29.95C39.1259 30.535 37.0642 30.9175 34.9572 30.9175Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ) : (
      <svg className="theme-icon" viewBox="0 0 35 36" aria-hidden="true">
        <path
          d="M17.5102 25.9161C22.1139 25.9161 25.8749 22.1756 25.8749 17.5514C25.8749 12.9273 22.1139 9.18677 17.5102 9.18677C12.886 9.18677 9.125 12.9273 9.125 17.5514C9.125 22.1756 12.886 25.9161 17.5102 25.9161ZM17.5102 23.1416C14.4069 23.1416 11.9201 20.6342 11.9201 17.5514C11.9201 14.4687 14.4069 11.9613 17.5102 11.9613C20.593 11.9613 23.0798 14.4687 23.0798 17.5514C23.0798 20.6342 20.593 23.1416 17.5102 23.1416Z"
          fill="currentColor"
        />
        <path
          d="M17.5103 6.51497C18.3735 6.51497 19.0928 5.7751 19.0928 4.91191V1.58248C19.0928 0.719328 18.3735 0 17.5103 0C16.6266 0 15.9072 0.719328 15.9072 1.58248V4.91191C15.9072 5.7751 16.6266 6.51497 17.5103 6.51497ZM25.2789 9.76217C25.8955 10.3787 26.9231 10.3993 27.5602 9.76217L29.9237 7.41924C30.5197 6.8027 30.5197 5.75456 29.9237 5.13798C29.3071 4.52144 28.2795 4.52144 27.663 5.13798L25.2789 7.52203C24.6829 8.11803 24.6829 9.14562 25.2789 9.76217ZM28.5056 17.5514C28.5056 18.4146 29.2455 19.1544 30.1086 19.1544H33.3969C34.2807 19.1544 35 18.4146 35 17.5514C35 16.6882 34.2807 15.9483 33.3969 15.9483H30.1086C29.2455 15.9483 28.5056 16.6882 28.5056 17.5514ZM25.2789 25.3611C24.6829 25.9777 24.6829 26.9847 25.2789 27.6013L27.663 29.9853C28.2795 30.6019 29.3071 30.5813 29.9237 29.9648C30.5197 29.3482 30.5197 28.3206 29.9237 27.7041L27.5396 25.3611C26.9231 24.7446 25.8955 24.7446 25.2789 25.3611ZM17.5103 28.5878C16.6266 28.5878 15.9072 29.3277 15.9072 30.1908V33.5203C15.9072 34.3834 16.6266 35.1028 17.5103 35.1028C18.3735 35.1028 19.0928 34.3834 19.0928 33.5203V30.1908C19.0928 29.3277 18.3735 28.5878 17.5103 28.5878ZM9.72107 25.3611C9.10453 24.7446 8.05639 24.7446 7.43981 25.3611L5.09688 27.6835C4.48034 28.3001 4.48034 29.3277 5.07634 29.9442C5.69288 30.5608 6.72048 30.5813 7.33706 29.9648L9.70053 27.6013C10.3171 26.9847 10.3171 25.9777 9.72107 25.3611ZM6.49441 17.5514C6.49441 16.6882 5.77509 15.9483 4.89136 15.9483H1.60304C0.719317 15.9483 0 16.6882 0 17.5514C0 18.4146 0.719317 19.1544 1.60304 19.1544H4.89136C5.77509 19.1544 6.49441 18.4146 6.49441 17.5514ZM9.70053 9.76217C10.3171 9.16616 10.3171 8.11803 9.72107 7.52203L7.3576 5.13798C6.7616 4.54198 5.71347 4.52144 5.11742 5.13798C4.50088 5.75456 4.50088 6.8027 5.09688 7.3987L7.43981 9.76217C8.05639 10.3787 9.08399 10.3787 9.70053 9.76217Z"
          fill="currentColor"
        />
      </svg>
    )}
  </button>
</nav>

    </div>
  );
};

export default Header;
