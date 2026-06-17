import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  FaArrowRight, 
  FaBuilding, 
  FaUsers, 
  FaMapMarkerAlt, 
  FaChartLine, 
  FaRegCheckCircle, 
  FaHome, 
  FaHotel 
} from "react-icons/fa";
import "../styles/Hero.css";

export default function Hero({ onEnroll, onSignIn }) {
  const heroRef = useRef(null);

  // Parallax background scroll tracking
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yFloatingElements = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  // Variants for structured load-in animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="staynest-hero-section" id="home" ref={heroRef}>
      {/* Dynamic Parallax Background Layer */}
      <motion.div 
        className="hero-parallax-bg" 
        style={{ y: yBackground }}
      />
      
      {/* Ambient Glassmorphic Orbs */}
      <div className="hero-blur-orb orb-1" />
      <div className="hero-blur-orb orb-2" />

      <div className="hero-max-width-container">
        {/* Core Split Layout */}
        <div className="hero-main-layout">
          {/* Left Panel: Conversion Content */}
          <motion.div 
            className="hero-content-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="hero-badge" variants={itemVariants}>
              <span className="badge-bullet" />
              Vendor Portal Open 2025
            </motion.div>

            <motion.h1 className="hero-headline" variants={itemVariants}>
              Grow Your Property <br />
              <span className="hero-green-highlight">Business With StayNest</span>
            </motion.h1>

            <motion.p className="hero-subheadline" variants={itemVariants}>
              Reach more tenants, increase occupancy, and manage your property listings effortlessly. Leverage our automated booking tools to simplify daily lease tracking.
            </motion.p>

            <motion.div className="hero-action-buttons" variants={itemVariants}>
              <button className="btn-hero-primary" onClick={onEnroll}>
                Enroll Property <FaArrowRight />
              </button>
              <button className="btn-hero-secondary" onClick={onSignIn}>
                Sign In
              </button>
            </motion.div>

            {/* Quality Anchors */}
            <motion.div className="hero-anchors-row" variants={itemVariants}>
              <div className="anchor-item">
                <FaRegCheckCircle className="anchor-icon" />
                <span>Verified Leads Only</span>
              </div>
              <div className="anchor-item">
                <FaRegCheckCircle className="anchor-icon" />
                <span>Zero Listing Setup Fees</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Panel: Interactive Dashboard and Floating Cards */}
          <div className="hero-visuals-right">
            <motion.div 
              className="dashboard-canvas-frame"
              style={{ y: yFloatingElements }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Premium Vector Dashboard Mockup */}
              <div className="mockup-frame">
                <div className="mockup-topbar">
                  <div className="mockup-controls">
                    <span className="ctrl-dot red" />
                    <span className="ctrl-dot yellow" />
                    <span className="ctrl-dot green" />
                  </div>
                  <div className="mockup-url-bar">staynest.co/vendor/dashboard</div>
                </div>
                
                <div className="mockup-workspace">
                  <div className="mockup-sidebar">
                    <div className="sidebar-line long" />
                    <div className="sidebar-line short" />
                    <div className="sidebar-line short" />
                    <div className="sidebar-line short" />
                  </div>
                  <div className="mockup-dashboard-view">
                    <div className="dashboard-metric-header">
                      <div className="mini-metric">
                        <span className="metric-lbl">Inquiries</span>
                        <span className="metric-val">1,240</span>
                      </div>
                      <div className="mini-metric">
                        <span className="metric-lbl">Conversion Rate</span>
                        <span className="metric-val">94.8%</span>
                      </div>
                    </div>
                    {/* SVG Analytics Wave Line */}
                    <div className="dashboard-chart-area">
                      <svg viewBox="0 0 300 100" className="chart-svg">
                        <defs>
                          <linearGradient id="chart-glow" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#00C896" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#00C896" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path 
                          d="M0,80 Q40,40 80,60 T160,30 T240,50 T300,10 L300,100 L0,100 Z" 
                          fill="url(#chart-glow)" 
                        />
                        <path 
                          d="M0,80 Q40,40 80,60 T160,30 T240,50 T300,10" 
                          fill="none" 
                          stroke="#00C896" 
                          strokeWidth="3" 
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating PG Card */}
              <motion.div 
                className="floating-asset-card f-pg"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ y: -5, scale: 1.03 }}
              >
                <div className="f-icon-container f-color-orange">
                  <FaHome />
                </div>
                <div className="f-text-block">
                  <h4>Paying Guest (PG)</h4>
                  <p>Cozy shared units with meals</p>
                </div>
              </motion.div>

              {/* Floating Hostel Card */}
              <motion.div 
                className="floating-asset-card f-hostel"
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                whileHover={{ y: -5, scale: 1.03 }}
              >
                <div className="f-icon-container f-color-blue">
                  <FaHotel />
                </div>
                <div className="f-text-block">
                  <h4>Student Hostel</h4>
                  <p>Near top universities & hubs</p>
                </div>
              </motion.div>

              {/* Floating Coliving Card */}
              <motion.div 
                className="floating-asset-card f-coliving"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                whileHover={{ y: -5, scale: 1.03 }}
              >
                <div className="f-icon-container f-color-green">
                  <FaUsers />
                </div>
                <div className="f-text-block">
                  <h4>Modern Coliving</h4>
                  <p>Flexible leases for young pros</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Integrated Statistics Row */}
        <motion.div 
          className="hero-statistics-row"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="hero-stat-card">
            <div className="stat-icon-badge s-green">
              <FaBuilding />
            </div>
            <div className="stat-data">
              <h3>500+</h3>
              <p>Active Properties</p>
            </div>
          </div>

          <div className="hero-stat-card">
            <div className="stat-icon-badge s-blue">
              <FaUsers />
            </div>
            <div className="stat-data">
              <h3>10,000+</h3>
              <p>Verified Tenants</p>
            </div>
          </div>

          <div className="hero-stat-card">
            <div className="stat-icon-badge s-purple">
              <FaMapMarkerAlt />
            </div>
            <div className="stat-data">
              <h3>25+</h3>
              <p>Cities Covered</p>
            </div>
          </div>

          <div className="hero-stat-card">
            <div className="stat-icon-badge s-orange">
              <FaChartLine />
            </div>
            <div className="stat-data">
              <h3>98%</h3>
              <p>Success Rate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}