import React from "react";
import { motion } from "framer-motion";
import { 
  FaCamera, 
  FaAd, 
  FaClipboardCheck, 
  FaChartPie, 
  FaRegCalendarAlt, 
  FaHandshake 
} from "react-icons/fa";
import "../styles/Benefits.css";

export default function Benefits() {
  const benefitsData = [
    {
      id: 1,
      icon: <FaCamera />,
      title: "Free Listing Setup",
      description: "Professional description cataloging, onboarding support, and listing coordination at zero initial cost.",
      badge: "Complimentary"
    },
    {
      id: 2,
      icon: <FaAd />,
      title: "Marketing Support",
      description: "Boost overall impressions using priority placement tiers and targeted search-matching campaigns.",
      badge: "High Impact"
    },
    {
      id: 3,
      icon: <FaClipboardCheck />,
      title: "Tenant Verification",
      description: "Rigorous background checks validating student enrollment or corporate work credentials directly.",
      badge: "Security-First"
    },
    {
      id: 4,
      icon: <FaChartPie />,
      title: "Analytics Dashboard",
      description: "Evaluate user traffic patterns, lead pipeline conversions, and occupancy trends dynamically.",
      badge: "Live Data"
    },
    {
      id: 5,
      icon: <FaRegCalendarAlt />,
      title: "Booking Management",
      description: "Direct reservation pipelines, automated digital lease executions, and simplified payout setups.",
      badge: "Automated"
    },
    {
      id: 6,
      icon: <FaHandshake />,
      title: "Dedicated Account Manager",
      description: "A single certified partner specialized in maximizing structural performance and yields.",
      badge: "Premium Care"
    }
  ];

  // Motion grid stagger controls
  const gridVariants = {
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
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="staynest-benefits-section" id="benefits">
      <div className="benefits-container">
        {/* Section Header */}
        <div className="benefits-section-header">
          <div className="benefits-label">Operational Perks</div>
          <h2 className="benefits-title">Exclusive Vendor Benefits</h2>
          <div className="title-divider-dot" />
          <p className="benefits-subtitle">
            Engineered systems structured to accelerate your listings and consolidate administrative tasks under one login.
          </p>
        </div>

        {/* Dynamic Card Layout */}
        <motion.div 
          className="benefits-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefitsData.map((benefit) => (
            <motion.div 
              key={benefit.id} 
              className="benefit-card"
              variants={itemVariants}
              whileHover={{ 
                y: -6,
                boxShadow: "0 15px 35px var(--benefit-shadow-hover)"
              }}
            >
              {/* Card Header Section with Badges */}
              <div className="benefit-card-top">
                <div className="benefit-icon-capsule">
                  {benefit.icon}
                </div>
                <span className="benefit-pill">{benefit.badge}</span>
              </div>

              {/* Card Body Information */}
              <div className="benefit-card-body">
                <h3 className="benefit-card-title">{benefit.title}</h3>
                <p className="benefit-card-desc">{benefit.description}</p>
              </div>

              {/* Modern Card Corner Line Element */}
              <div className="benefit-card-deco-line" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}