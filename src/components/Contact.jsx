import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaHome, 
  FaPaperPlane, 
  FaMapMarkerAlt 
} from "react-icons/fa";
import "../styles/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    propertyType: "PG",
    message: ""
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setFormSubmitted(true);
    setTimeout(() => {
      alert("Enquiry received! A regional portfolio coordinator will contact you shortly.");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        propertyType: "PG",
        message: ""
      });
      setFormSubmitted(false);
    }, 800);
  };

  return (
    <section className="staynest-contact-section" id="contact">
      {/* Floating Ambient Circles */}
      <div className="contact-ambient-blob blob-1" />
      <div className="contact-ambient-blob blob-2" />

      <div className="contact-max-width-container">
        <div className="contact-split-layout">
          
          
          <motion.div 
            className="contact-visuals-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="visuals-intro">
              <span className="visuals-tag">Vendor Support</span>
              <h2>Let's Launch Your Listings</h2>
              <p>Submit your property details below to calculate structural asset yield potentials and schedule verification walks.</p>
            </div>

            {/* Premium Isometric Inline Real Estate Dashboard Vector Illustration */}
            <div className="illustration-wrapper">
              <svg viewBox="0 0 400 320" className="vector-illustration-svg">
                <defs>
                  <linearGradient id="building-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#00C896" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                  <filter id="svg-glow" x="-10%" y="-10%" width="120%" height="120%">
                    <dropShadow dx="0" dy="8" stdDeviation="6" floodColor="#00C896" floodOpacity="0.15" />
                  </filter>
                </defs>
                {/* Dashboard Base Platform */}
                <rect x="50" y="200" width="300" height="80" rx="16" fill="currentColor" className="platform-base" />
                <rect x="70" y="80" width="260" height="150" rx="12" fill="currentColor" className="dashboard-backing" filter="url(#svg-glow)" />
                
                {/* Grid Gridlines on Backing Panel */}
                <line x1="70" y1="130" x2="330" y2="130" stroke="currentColor" strokeWidth="1" className="grid-line" />
                <line x1="70" y1="180" x2="330" y2="180" stroke="currentColor" strokeWidth="1" className="grid-line" />
                
                {/* Isometric Building Outline Representation */}
                <path d="M120,210 L120,110 L160,90 L200,110 L200,210 Z" fill="url(#building-grad)" opacity="0.85" />
                <path d="M160,90 L160,210" stroke="currentColor" strokeWidth="1.5" className="divider-line" />
                
                {/* Windows or Modules Grid inside vector */}
                <rect x="135" y="125" width="12" height="18" rx="2" fill="currentColor" className="win-light" />
                <rect x="173" y="125" width="12" height="18" rx="2" fill="currentColor" className="win-light" />
                <rect x="135" y="160" width="12" height="18" rx="2" fill="currentColor" className="win-light" />
                <rect x="173" y="160" width="12" height="18" rx="2" fill="currentColor" className="win-light" />

                {/* Floating Listing Node Indicator */}
                <circle cx="280" cy="120" r="22" fill="#00C896" opacity="0.1" />
                <circle cx="280" cy="120" r="16" fill="#00C896" />
                {/* Tick representation inside indicator */}
                <path d="M274,120 L278,124 L286,116" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              {/* Floating Decorative Badge Card */}
              <motion.div 
                className="visuals-floater"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="floater-bullet" />
                <span>Field Audit Coverage Active</span>
              </motion.div>
            </div>

            <div className="contact-metadata-anchors">
              <div className="meta-anchor">
                <FaMapMarkerAlt className="meta-icon" />
                <div>
                  <h4>StayNest HQ</h4>
                  <p>Tech District Sector 4, Bangalore 560001</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Panel: Premium Glassmorphism Contact Form */}
          <motion.div 
            className="contact-form-right"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="form-card">
              <div className="form-header">
                <h3>Submit Enrolment Request</h3>
                <p>Provide basic properties coordinates to register</p>
              </div>

              <form onSubmit={handleSubmit} className="premium-form-flow">
                {/* Full Name Input */}
                <div className="form-input-wrapper">
                  <label htmlFor="fullName">Full Name</label>
                  <div className="input-row">
                    <FaUser className="input-field-icon" />
                    <input 
                      type="text" 
                      id="fullName" 
                      name="fullName"
                      placeholder="e.g. Robert Smith"
                      value={formData.fullName}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>

                {/* Grid Inputs (Email & Phone Number) */}
                <div className="form-inputs-grid">
                  <div className="form-input-wrapper">
                    <label htmlFor="email">Email Address</label>
                    <div className="input-row">
                      <FaEnvelope className="input-field-icon" />
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        placeholder="smith@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                  </div>

                  <div className="form-input-wrapper">
                    <label htmlFor="phone">Phone Number</label>
                    <div className="input-row">
                      <FaPhone className="input-field-icon" />
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        placeholder="+91 99999 99999"
                        value={formData.phone}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                  </div>
                </div>

                {/* Dropdown Input */}
                <div className="form-input-wrapper">
                  <label htmlFor="propertyType">Property Category</label>
                  <div className="input-row">
                    <FaHome className="input-field-icon" />
                    <select 
                      id="propertyType" 
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                    >
                      <option value="PG">Paying Guest (PG)</option>
                      <option value="Hostel">Hostel Space</option>
                      <option value="Coliving">Co-living Space</option>
                      <option value="StudentHousing">Campus Student Housing</option>
                      <option value="RentalApartments">Rental Apartments</option>
                    </select>
                  </div>
                </div>

                {/* Message Input */}
                <div className="form-input-wrapper">
                  <label htmlFor="message">Portfolio Description / Messages</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    placeholder="Provide details on total room configurations, approximate locations, or questions..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Interactive Submit Button */}
                <button 
                  type="submit" 
                  className={`btn-form-submit ${formSubmitted ? "submitting" : ""}`}
                  disabled={formSubmitted}
                >
                  <span>{formSubmitted ? "Syncing Details..." : "Send Message"}</span>
                  <FaPaperPlane className="submit-plane-icon" />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}