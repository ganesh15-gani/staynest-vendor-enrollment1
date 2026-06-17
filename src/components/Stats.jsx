import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { FaBuilding, FaUsers, FaMapMarkedAlt, FaAward } from "react-icons/fa";
import "../styles/Stats.css";

// Helper Component for Animated Counter Progressions
const Counter = ({ target, suffix = "", delay = 0 }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, target, {
        duration: 2.2,
        delay: delay,
        ease: "easeOut",
        onUpdate: (value) => {
          setCurrentValue(Math.floor(value));
        }
      });
      return () => controls.stop();
    }
  }, [isInView, target, delay]);

  return (
    <span ref={nodeRef} className="stat-number">
      {currentValue.toLocaleString()}{suffix}
    </span>
  );
};

export default function Stats() {
  const statsData = [
    {
      id: 1,
      targetValue: 500,
      suffix: "+",
      label: "Properties Listed",
      icon: <FaBuilding />,
      gradientClass: "g-green"
    },
    {
      id: 2,
      targetValue: 10000,
      suffix: "+",
      label: "Verified Tenants",
      icon: <FaUsers />,
      gradientClass: "g-blue"
    },
    {
      id: 3,
      targetValue: 25,
      suffix: "+",
      label: "Active Cities",
      icon: <FaMapMarkedAlt />,
      gradientClass: "g-purple"
    },
    {
      id: 4,
      targetValue: 98,
      suffix: "%",
      label: "Success Rate",
      icon: <FaAward />,
      gradientClass: "g-orange"
    }
  ];

  // Grid container stagger delay variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="staynest-stats-section">
      <div className="stats-container">
        <motion.div 
          className="stats-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {statsData.map((stat, idx) => (
            <motion.div 
              key={stat.id} 
              className="stat-card"
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.25, ease: "easeInOut" } 
              }}
            >
              {/* Top Row with Premium Card Icon Glow */}
              <div className="stat-header">
                <div className={`stat-icon-wrapper ${stat.gradientClass}`}>
                  {stat.icon}
                </div>
                <div className="card-top-decoration" />
              </div>

              {/* Central counter & descriptions */}
              <div className="stat-body">
                <Counter target={stat.targetValue} suffix={stat.suffix} delay={idx * 0.1} />
                <p className="stat-label">{stat.label}</p>
              </div>

              {/* Bottom Subtle Visual Indicator Accent */}
              <div className="card-bottom-accent" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}