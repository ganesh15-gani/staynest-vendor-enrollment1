import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

export default function Navbar({ onSignIn, onEnroll }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("staynest-theme") || "light";
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("staynest-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="staynest-navbar">
      <div className="navbar-container">
        {/* Brand Logo */}
        <a href="#home" className="navbar-logo" onClick={handleLinkClick}>
          StayNest<span className="logo-dot">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="navbar-menu-desktop">
          <li>
            <a href="#home" className="nav-item">Home</a>
          </li>
          <li>
            <a href="#property-types" className="nav-item">Property Types</a>
          </li>
          <li>
            <a href="#faq" className="nav-item">FAQ</a>
          </li>
          <li>
            <a href="#contact" className="nav-item">Contact</a>
          </li>
        </ul>

        {/* Desktop Action Buttons & Toggle */}
        <div className="navbar-actions-desktop">
          <button 
            className="theme-toggle-btn" 
            onClick={toggleTheme} 
            aria-label="Toggle Theme"
          >
            <motion.div
              key={theme}
              initial={{ scale: 0.6, rotate: -90, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="toggle-icon-wrapper"
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </motion.div>
          </button>

          <button 
            className="btn-signin" 
            onClick={() => { handleLinkClick(); if (onSignIn) onSignIn(); }}
          >
            Sign In
          </button>
          
          <button 
            className="btn-enroll" 
            onClick={() => { handleLinkClick(); if (onEnroll) onEnroll(); }}
          >
            Enroll Property
          </button>
        </div>

        {/* Mobile Control Controls (Hamburger + Mode Switcher) */}
        <div className="navbar-controls-mobile">
          <button 
            className="theme-toggle-btn" 
            onClick={toggleTheme} 
            aria-label="Toggle Theme"
          >
            <motion.div
              key={theme}
              initial={{ scale: 0.6, rotate: -90, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="toggle-icon-wrapper"
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </motion.div>
          </button>

          <button 
            className="hamburger-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="navbar-menu-mobile-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ul className="navbar-menu-mobile-links">
              <li>
                <a href="#home" onClick={handleLinkClick}>Home</a>
              </li>
              <li>
                <a href="#property-types" onClick={handleLinkClick}>Property Types</a>
              </li>
              <li>
                <a href="#faq" onClick={handleLinkClick}>FAQ</a>
              </li>
              <li>
                <a href="#contact" onClick={handleLinkClick}>Contact</a>
              </li>
            </ul>
            
            <div className="navbar-menu-mobile-actions">
              <button 
                className="btn-signin-mobile" 
                onClick={() => { handleLinkClick(); if (onSignIn) onSignIn(); }}
              >
                Sign In
              </button>
              <button 
                className="btn-enroll-mobile" 
                onClick={() => { handleLinkClick(); if (onEnroll) onEnroll(); }}
              >
                Enroll Property
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}