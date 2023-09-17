import React, { useState } from "react";
import { Link } from "react-router-dom";



// Create a HamburgerMenu component
const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`menu-items ${isMenuOpen ? "open" : ""}`}>
        <li className="menu-item">
          <Link to="/" className="nav-link" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/tarot" className="nav-link" onClick={toggleMenu}>
            Tarot Reading
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/zodiac" className="nav-link" onClick={toggleMenu}>
            Zodiac
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;