import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo1 from '../images/logo1.jpeg';

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header">
      <div className="logo-and-nav">
        {/* Logo */}
        <img src={logo1} alt="Cybersecurity Logo" className="logo" />
        
        {/* Navbar */}
        <nav className="navbar">
          <ul>
            <li><Link to="/"> HOME</Link></li>
            <li><Link to="/about">ABOUT US</Link></li>
            <li 
              className="dropdown" 
              onMouseEnter={toggleDropdown} 
              onMouseLeave={toggleDropdown}
            >
              <Link to="/services">SERVICES</Link>
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/services/consulting">Consulting</Link></li>
                  <li><Link to="/services/audit">Audit</Link></li>
                  <li><Link to="/services/training">Training</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/careers">CAREERS</Link></li>
            <li><Link to="/contact">CONTACT US</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
