import React from "react";
import { motion } from "framer-motion";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaTwitter, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaArrowRight 
} from "react-icons/fa";
import "../styles/Footer.css";

export default function Footer({ onEnroll, onSignIn }) {
  // Stagger loading configuration
  const footerContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const footerItemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <footer className="staynest-footer-section">
      {/* Dynamic Ambient Background Grid */}
      <div className="footer-pattern-overlay" />

      <div className="footer-max-width-container">
        
        {/* TOP CTA BANNER */}
        <motion.div 
          className="footer-cta-banner"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Internal floating background decorations */}
          <div className="cta-orb orb-green" />
          <div className="cta-orb orb-blue" />

          <div className="cta-banner-content">
            <span className="cta-mini-tag">Onboarding Platform</span>
            <h2 className="cta-headline">Ready to Grow Your Property Business?</h2>
            <p className="cta-subheadline">Join StayNest today and connect with thousands of verified potential tenants looking for housing options.</p>
            
            <div className="cta-actions">
              <button className="btn-cta-primary" onClick={onEnroll}>
                Enroll Property <FaArrowRight />
              </button>
              <button className="btn-cta-secondary" onClick={onSignIn}>
                Sign In
              </button>
            </div>
          </div>
        </motion.div>

        {/* MAIN FOUR-COLUMN FOOTER LAYOUT */}
        <motion.div 
          className="footer-columns-grid"
          variants={footerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Column 1: Brand details & Socials */}
          <motion.div className="footer-col" variants={footerItemVariants}>
            <h3 className="footer-brand-logo">
              StayNest<span className="footer-logo-dot">.</span>
            </h3>
            <p className="footer-brand-desc">
              Helping property owners reach more tenants, increase occupancy, and grow their rental business through StayNest.
            </p>
            <div className="footer-social-wrapper">
              <motion.a href="#" className="social-icon-btn" whileHover={{ scale: 1.15 }} aria-label="Facebook">
                <FaFacebookF />
              </motion.a>
              <motion.a href="#" className="social-icon-btn" whileHover={{ scale: 1.15 }} aria-label="Instagram">
                <FaInstagram />
              </motion.a>
              <motion.a href="#" className="social-icon-btn" whileHover={{ scale: 1.15 }} aria-label="LinkedIn">
                <FaLinkedinIn />
              </motion.a>
              <motion.a href="#" className="social-icon-btn" whileHover={{ scale: 1.15 }} aria-label="Twitter">
                <FaTwitter />
              </motion.a>
            </div>
          </motion.div>

          {/* Column 2: Quick Navigation Links */}
          <motion.div className="footer-col" variants={footerItemVariants}>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#home" className="footer-nav-link">Home</a>
              </li>
              <li>
                <a href="#property-types" className="footer-nav-link">Property Types</a>
              </li>
              <li>
                <a href="#faq" className="footer-nav-link">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="footer-nav-link">Contact</a>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Properties Classifications */}
          <motion.div className="footer-col" variants={footerItemVariants}>
            <h4 className="footer-col-title">Property Types</h4>
            <ul className="footer-links-list">
              <li><a href="#property-types" className="footer-nav-link">PG Accommodations</a></li>
              <li><a href="#property-types" className="footer-nav-link">Student Hostels</a></li>
              <li><a href="#property-types" className="footer-nav-link">Shared Coliving</a></li>
              <li><a href="#property-types" className="footer-nav-link">Student Housing</a></li>
              <li><a href="#property-types" className="footer-nav-link">Rental Apartments</a></li>
            </ul>
          </motion.div>

          {/* Column 4: Central Contact Coordinates */}
          <motion.div className="footer-col" variants={footerItemVariants}>
            <h4 className="footer-col-title">Contact Us</h4>
            <ul className="footer-contact-list">
              <li className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:support@staynest.com">support@staynest.com</a>
              </li>
              <li className="contact-item">
                <FaPhone className="contact-icon" />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Hyderabad, India</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="footer-copyright-bar">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} StayNest. All Rights Reserved.
          </p>
          <div className="copyright-legal-links">
            <a href="#" className="legal-link">Privacy Policy</a>
            <span className="legal-divider">|</span>
            <a href="#" className="legal-link">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}