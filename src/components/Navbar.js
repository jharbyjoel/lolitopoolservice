import React, { useState, useEffect } from 'react';
import './Navbar.css'
import logo from '../images/Lolito.webp'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY >= 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id="cs-navigation" className={`${isMenuOpen ? 'cs-active' : ''} ${isScrolled ? 'scroll' : ''}`}>
      <div className="cs-top-bar">
        <div className="cs-top-container">
          <a href="/" className="cs-logo cs-top-logo" aria-label="back to home">
            <img className="cs-light" src={logo} alt="logo" width="197" height="43" />
            <img className="cs-dark" src={logo} alt="logo" width="197" height="43" />
          </a>
          <div className="cs-top-contact">
            <a href="tel:+17865456534" className="cs-top-link">
              <img className="cs-link-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/phone-1a.svg" alt="phone icon" width="24" height="24" />
              +786 545 6534
            </a>
          </div>
          <a href="/" className="cs-button-solid cs-nav-button">Request A Quote</a>
        </div>
      </div>
      <div className="cs-container">
        <a href="/" className="cs-logo cs-bottom-logo" aria-label="back to home">
          <img className="cs-light" src={logo} alt="logo" width="197" height="43" />
          <img className="cs-dark" src={logo} alt="logo" width="197" height="43" />
        </a>
        <nav className="cs-nav" role="navigation">
          <button className="cs-toggle" aria-label="mobile menu toggle" onClick={toggleMenu}>
            <div className="cs-box">
              <span className="cs-line cs-line1"></span>
              <span className="cs-line cs-line2"></span>
              <span className="cs-line cs-line3"></span>
            </div>
          </button>
          <div className="cs-ul-wrapper">
            <ul id="cs-expanded" className="cs-ul" aria-expanded={isMenuOpen}>
              <li className="cs-li">
                <a href="/" className="cs-li-link cs-active">Home</a>
              </li>
              <li className="cs-li">
                <a href="/about" className="cs-li-link">About</a>
              </li>
              <li className="cs-li">
                <a href="/services" className="cs-li-link">Services</a>
              </li>
              <li className="cs-li">
                <a href="/contact" className="cs-li-link">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
