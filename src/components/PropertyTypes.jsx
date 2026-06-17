import React from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaHotel,
  FaUsers,
} from "react-icons/fa";

import "../styles/PropertyTypes.css";

export default function PropertyTypes() {
  const properties = [
    {
      icon: <FaHome />,
      title: "Paying Guest",
      desc: "Fully managed PG accommodations with dining, housekeeping and verified tenants.",
      color: "#00C896",
    },
    {
      icon: <FaHotel />,
      title: "Student Hostel",
      desc: "Secure hostels near colleges and universities with high occupancy potential.",
      color: "#3B82F6",
    },
    {
      icon: <FaUsers />,
      title: "Co-Living Space",
      desc: "Modern shared living spaces designed for students and working professionals.",
      color: "#F97316",
    },
  ];

  return (
    <section
      className="property-section"
      id="property-types"
    >
      <div className="property-container">

        <motion.div
          className="property-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="property-tag">
            PROPERTY TYPES
          </span>

          <h2 className="property-title">
            Accommodation Types
            <br />
            <span>We Support</span>
          </h2>

          <p>
            List your PG, Hostel or Coliving property and
            connect with thousands of verified tenants.
          </p>
        </motion.div>

        <div className="property-wrapper">

          {/* Cards */}

          <div className="property-cards">

            {properties.map((item, index) => (
              <motion.div
                key={index}
                className="property-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div
                  className="property-icon"
                  style={{
                    background: `${item.color}20`,
                    color: item.color,
                  }}
                >
                  {item.icon}
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}

          </div>

          {/* Illustration */}

          <motion.div
            className="property-image"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200"
              alt="Property Dashboard"
            />

            <div className="floating-card card1">
              📈 High Occupancy
            </div>

            <div className="floating-card card2">
              ✅ Verified Leads
            </div>

            <div className="floating-card card3">
              🏠 Easy Listings
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}