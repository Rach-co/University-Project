import React, { useState, useEffect } from 'react';
import './navbar.css';
import { FaBars, FaTimes, FaGraduationCap } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai'



function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);



  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);



  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <a href='#' className='navbar-logo' onClick={closeMobileMenu} >
           <FaGraduationCap class='navbar-icon' />
            <div className="navbar-details">
             <div className="navbar-text">The University of Heritage</div>
             <div className="navbar-address">Nigeria</div>
            </div>
          </a>

          <div className='menu-icon' onClick={handleClick}>
          {click ? <FaTimes className="icon" /> : <FaBars className="icon"/>}
          </div>


          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a href='#home' className='nav-links' onClick={closeMobileMenu}>
                Admissions
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='#about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='#study'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Study
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='#research'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Research
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='#events'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                News & Events
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='#facilities'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                FAQs
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='#footer'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </a>
            </li>
          </ul>

          <form action='#' className="search-form">
             <input type="search" placeholder="search" className="search-data" required/>
              <button type="submit" className="nav-btn"><AiOutlineSearch className="search-icon" /></button>
          </form>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
