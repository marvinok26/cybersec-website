import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import logo1 from '../images/logo1.jpeg';

const NavBar = () => {
  const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 800;
      setIsMobileView(isMobile);
      if (!isMobile) {
        setIsNavShowing(true);
      } else {
        setIsNavShowing(false); // Ensure menu is initially closed on mobile
      }
    };

    handleResize(); // Set the initial state

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeNavHandler = () => {
    if (isMobileView) {
      setIsNavShowing(false);
    }
  };

  return (
    <header className="header">
      <div className="logo-and-nav">
        {/* Logo */}
        <div className="nav-logo">
          <Link to="/" onClick={closeNavHandler}>
            <img src={logo1} alt="Cybersecurity Logo" className="logo" />
          </Link>
        </div>
        {/* Navbar */}
        <div className="navbar">
          {isNavShowing && (
            <ul className="nav__menu">
              <li><Link to="/" onClick={closeNavHandler}>HOME</Link></li>
              <li><Link to="/about" onClick={closeNavHandler}>ABOUT US</Link></li>
              <li><Link to="/services" onClick={closeNavHandler}>SERVICES</Link></li>
              <li><Link to="/careers" onClick={closeNavHandler}>CAREERS</Link></li>
              <li><Link to="/contact" onClick={closeNavHandler}>CONTACT US</Link></li>
            </ul>
          )}
          {isMobileView && (
            <button className="nav__toggle-btn" onClick={() => setIsNavShowing(!isNavShowing)}>
              {isNavShowing ? <AiOutlineClose /> : <FaBars />}
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
