import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Lolito.webp';
import { useTranslation } from 'react-i18next';  // Import useTranslation hook
import './Navbar.css';

const NavBar = () => {
  const { t } = useTranslation();  // Get t function for translations
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({});

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleDropdown = (index) => {
    setIsDropdownOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleLinkClick = () => {
    // Close the menu when a link is clicked
    setIsMenuOpen(false);
  };

  return (
    <header id="cs-navigation" className={isMenuOpen ? "cs-active" : ""}>
      <div className="cs-top-bar">
        <div className="cs-top-container">
          <div className="cs-top-contact">
            <a href="tel:+17865456534" className="cs-top-link">
              <img
                className="cs-link-icon"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/phone-stroke-white.svg"
                alt="logo"
                width="16"
                height="16"
                aria-hidden="true"
              />
              {t('callUs')}
            </a>
            <a href="/home" className="cs-top-link">
              <img
                className="cs-link-icon"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/clock-stroke-white.svg"
                alt="logo"
                width="20"
                height="20"
                aria-hidden="true"
              />
              {t('openingHours')}
            </a>
          </div>
          <div className="cs-top-social">
            <a href="https://www.facebook.com/profile.php?id=100038914455783" className="cs-social-link" target="blank">
              <img
                className="cs-social-icon"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/facebook-lgrey.svg"
                alt="logo"
                width="16"
                height="16"
                aria-hidden="true"
              />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100038914455783" className="cs-social-link" target='blank'>
              <img
                className="cs-social-icon"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/instagram-lgrey.svg"
                alt="logo"
                width="16"
                height="16"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="cs-container">
        <a href="/home" className="cs-logo" aria-label="back to home">
          <img
            src={logo}
            alt="logo"
            width="197"
            height="43"
            aria-hidden="true"
          />
        </a>
        <nav className="cs-nav" role="navigation">
          <button
            className={`cs-toggle ${isMenuOpen ? "cs-active" : ""}`}
            aria-label="mobile menu toggle"
            onClick={toggleMenu}
          >
            <div className="cs-box" aria-hidden="true">
              <span className="cs-line cs-line1" aria-hidden="true"></span>
              <span className="cs-line cs-line2" aria-hidden="true"></span>
              <span className="cs-line cs-line3" aria-hidden="true"></span>
            </div>
          </button>
          <div className="cs-ul-wrapper">
            <ul
              id="cs-expanded"
              className="cs-ul"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              {["Home", "About Us", "Services", "Contact Us", "Our Work"].map(
                (item, index) => (
                  <li
                    key={index}
                    className={`cs-li ${
                      isDropdownOpen[index] ? "cs-active" : ""
                    }`}
                    onClick={() => {
                      toggleDropdown(index);
                      handleLinkClick();
                    }}
                  >
                    <Link
                      to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} // Dynamically generate route
                      className="cs-li-link"
                    >
                      {t(item)} {/* Translate tab names */}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </nav>
        <a href="/BookAnAppointment" className="cs-button-solid cs-nav-button">
          {t('bookOnline')} {/* Translate the button */}
        </a>
      </div>
    </header>
  );
};

export default NavBar;
