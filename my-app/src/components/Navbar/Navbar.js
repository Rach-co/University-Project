import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
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
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
           <FaGraduationCap class='navbar-icon' />
            <div className="navbar-details">
             <div className="navbar-text">The University of Heritage</div>
             <div className="navbar-address">Nigeria</div>
            </div>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
          {click ? <FaTimes className="icon" /> : <FaBars className="icon"/>}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/#home' className='nav-links' onClick={closeMobileMenu}>
                Admissions
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='#about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='#study'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Study
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='#research'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Research
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                News & Events
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                FAQs
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
            <li className='nav-item'>
             <form clasName="search-form">
                <input type="text" placeholder="search"/>
                <button type="submit" className="btn"><AiOutlineSearch className="search-icon" /></button>
              </form>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
