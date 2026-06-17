import React from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaChartLine, FaUserCheck, FaHeadset } from "react-icons/fa";
import "../styles/WhyPartner.css";

export default function WhyPartner() {
  const partnersData = [
    {
      id: 1,
      icon: <FaGlobe />,
      title: "Wider Reach",
      description: "Connect instantly with a premium nationwide network of corporate professionals and students seeking housing.",
      accentClass: "color-green"
    },
    {
      id: 2,
      icon: <FaChartLine />,
      title: "Higher Occupancy",
      description: "Minimize vacancy periods and rental voids using our target distribution algorithms and priority placements.",
      accentClass: "color-blue"
    },
    {
      id: 3,
      icon: <FaUserCheck />,
      title: "Verified Leads",
      description: "Receive pre-screened applications backed by complete verification of background check parameters.",
      accentClass: "color-purple"
    },
    {
      id: 4,
      icon: <FaHeadset />,
      title: "Dedicated Support",
      description: "Get direct access to regional operational resources and dedicated managers resolving tenant queries.",
      accentClass: "color-rose"
    }
  ];

  // Motion Grid Animation Configuration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="staynest-partner-section" id="why-partner">
      {/* Background ambient lighting */}
      <div className="partner-glow-spotlight" />

      <div className="partner-container">
        {/* Header Block */}
        <div className="partner-header">
          <span className="partner-pre-title">Strategic Advantages</span>
          <h2 className="partner-main-title">Why Partner With StayNest</h2>
          <div className="title-accent-line" />
          <p className="partner-subtitle">
            Our ecosystem eliminates structural rental market inefficiencies, giving you full command over lease management.
          </p>
        </div>

        {/* Framer-Motion Card Grid */}
        <motion.div 
          className="partner-cards-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
        >
          {partnersData.map((card) => (
            <motion.div 
              key={card.id} 
              className={`partner-glow-card ${card.accentClass}`}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.25, ease: "easeOut" } 
              }}
            >
              {/* Outer Glow Overlay */}
              <div className="card-hover-blur" />

              <div className="partner-card-content">
                {/* Icon Capsule with dynamic gradient theme */}
                <div className="partner-icon-container">
                  {card.icon}
                </div>

                <h3 className="partner-card-title">{card.title}</h3>
                <p className="partner-card-desc">{card.description}</p>
              </div>

              {/* Bottom linear progress accent */}
              <div className="partner-card-indicator" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}