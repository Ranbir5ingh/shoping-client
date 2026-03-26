import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHomeIndicator, setShowHomeIndicator] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHomeIndicator(true);
    }, 1000); // Show indicator after 1 second
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <span 
            className={`home-indicator ${showHomeIndicator ? 'visible' : ''}`}
            onClick={scrollToTop}
            title="Scroll to Top"
          >
            &#8593;
          </span>
          <h1 className="logo" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
            MyLogo
          </h1>
        </div>
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link 
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
            onSetActive={() => console.log('Section 1 set active')}
          >
            Home
          </Link>
          <Link 
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
            onSetActive={() => console.log('Section 2 set active')}
          >
            About
          </Link>
          <Link 
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
            onSetActive={() => console.log('Section 3 set active')}
          >
            Services
          </Link>
          <Link 
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
            onSetActive={() => console.log('Contact set active')}
          >
            Contact Us
          </Link>
        </nav>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
