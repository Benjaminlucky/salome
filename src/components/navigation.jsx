import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './navigation.css';
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

function Navigation() {
  const [activeLink, setActiveLink] = useState(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };


  return (
    <section className="navigationContainer">
      <div className="navWrapper">
        <nav>
          <div className="logo">
            Salome<span>amaobi</span>
          </div>
          <div className="mobileicon">
            <button className='mobilenav' onClick={toggleMenu}>
                {isMenuVisible ? <FaTimes className='closeMenu' /> : <FaBarsStaggered/>}
            </button>
          </div>
          <div className={`menulinks ${isMenuVisible ? 'visible' : ''}`}>
            <Router>
              <ul>
                <li>
                  <Link className={activeLink === 'home' ? 'activeLink' : ''} to="/" onClick={() => handleLinkClick('home')}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link className={activeLink === '/about' ? 'activeLink' : ''} to="/about" onClick={() => handleLinkClick('/about')}>
                    About me
                  </Link>
                </li>
                <li>
                  <Link className={activeLink === '/expertise' ? 'activeLink' : ''} to="/expertise" onClick={() => handleLinkClick('/expertise')}>
                    Expertise
                  </Link>
                </li>
                <li>
                  <Link className={activeLink === '/products' ? 'activeLink' : ''} to="/products" onClick={() => handleLinkClick('/products')}>
                    Products
                  </Link>
                </li>
                <li>
                  <Link className={activeLink === '/resources' ? 'activeLink' : ''} to="/resources" onClick={() => handleLinkClick('/resources')}>
                    Resources
                  </Link>
                </li>
                <li>
                  <Link className={activeLink === '/contact' ? 'activeLink' : ''} to="/contact" onClick={() => handleLinkClick('/contact')}>
                    Contact
                  </Link>
                </li>
              </ul>
            </Router>
          </div>
        </nav>
        
      </div>
    </section>
  );
}

export default Navigation;
