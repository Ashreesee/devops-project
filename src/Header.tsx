import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS for the header
import logo from './logo.png'; // Import your logo image

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark-mode') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleToggle = () => {
    if (isDarkMode) {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light-mode');
    } else {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark-mode');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-img" />
        <h1 className="logo">Exopods</h1>
      </div>
      <div className="nav-and-toggle">
        <label className="switch">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={handleToggle}
          />
          <span className="slider"></span>
        </label>
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? (
            <span className="icon-close">✖</span>
          ) : (
            <span className="icon-hamburger">☰</span>
          )}
        </button>
        <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/features" className="nav-item" onClick={toggleMenu}>Features</Link>
          <Link to="/blog" className="nav-item" onClick={toggleMenu}>Blog</Link>
          <Link to="/about" className="nav-item" onClick={toggleMenu}>About</Link>
          <Link to="/career" className="nav-item" onClick={toggleMenu}>Career</Link>
          <Link to="/pricing" className="nav-item" onClick={toggleMenu}>Pricing</Link>
          <Link to="/login" className="nav-item" onClick={toggleMenu}>Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
