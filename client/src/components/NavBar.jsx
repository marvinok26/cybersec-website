import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai';
import logo1 from '../images/logo1.jpeg';

const NavBar = () => {
  const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800 ? true : false);

  const closeNavHandler = () => {
    if(window.innerWidth < 800){
      setIsNavShowing(false);
    }else{
      setIsNavShowing(true);
    }
  }


  return (
    <header className="header">
      <div className="logo-and-nav">
        { /* Logo */ }
        <div classname="nav-logo">
          <Link to="/" onClick={closeNavHandler}>
        <img src={logo1} alt="Cybersecurity Logo" className="logo" />
        </Link>
        </div>
        {/* Navbar */}
        
        <div className="navbar" >
          {isNavShowing && <ul className='nav__menu'>
            <li><Link to="/" onClick={closeNavHandler}> HOME</Link></li>
            <li><Link to="/about" onClick={closeNavHandler}>ABOUT US</Link></li>
            <li><Link to="/services" onClick={closeNavHandler}>SERVICES</Link></li>
            <li><Link to="/careers" onClick={closeNavHandler}>CAREERS</Link></li>
            <li><Link to="/contact" onClick={closeNavHandler}>CONTACT US</Link></li>
          </ul>}
          <button className="nav__toggle-btn" onClick={() => setIsNavShowing(!isNavShowing)}>
            {isNavShowing ? <AiOutlineClose /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
