import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";
import "../styles/FAQ.css";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      id: 1,
      question: "How do I enroll my property on StayNest?",
      answer: "Enrolling is straightforward. Click the 'Enroll Property' button at the top of the page, fill in your basic personal details and properties specifications, and submit. Our regional field operations manager will connect with you within 24 hours to coordinate a walkthrough inspection."
    },
    {
      id: 2,
      question: "What property types can be listed?",
      answer: "We support a wide selection of occupancy structures including Paying Guests (PG) accommodations, Student Hostels, Co-living spaces, dedicated Student Housing complexes, and managed Rental Apartments."
    },
    {
      id: 3,
      question: "What documents are required for verification?",
      answer: "To establish a safe marketplace for tenants, we require proof of property ownership (or authorized lease authority), your government-issued ID, fire safety clearance certificates, and high-resolution indoor photographs."
    },
    {
      id: 4,
      question: "How long does verification take?",
      answer: "Our standard verification process takes between 24 to 48 hours. This includes property location indexing, digital asset verification, and structural validation checks by our field agents."
    },
    {
      id: 5,
      question: "Is there any listing fee?",
      answer: "Listing your property and creating your vendor account on StayNest is completely free. We only charge a nominal operational commission when a lead successfully executes a lease through our platform."
    },
    {
      id: 6,
      question: "Can I manage multiple properties?",
      answer: "Yes, our central vendor panel is built for scale. You can register, track occupancy metrics, review monthly collections, and process lease approvals for multiple properties from a single consolidated profile."
    }
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="staynest-faq-section" id="faq">
      <div className="faq-blur-blob blob-top" />
      <div className="faq-blur-blob blob-bottom" />

      <div className="faq-max-width-container">
        {/* Section Header */}
        <div className="faq-header">
          <span className="faq-badge-label">Support Hub</span>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-accent-bar" />
          <p className="faq-subtitle">
            Find prompt, comprehensive answers outlining legal guidelines, digital documentations, and overall platform requirements.
          </p>
        </div>

        {/* Stack of Premium Accordion Cards */}
        <div className="faq-accordion-stack">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <motion.div 
                key={item.id} 
                className={`faq-card ${isOpen ? "faq-card-open" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                {/* Header Toggle Button */}
                <button 
                  className="faq-question-button"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                >
                  <div className="faq-question-left">
                    <FaQuestionCircle className="faq-inline-icon" />
                    <span>{item.question}</span>
                  </div>
                  <div className="faq-toggle-icon-box">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={isOpen ? "minus" : "plus"}
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="toggle-icon-wrapper"
                      >
                        {isOpen ? <FaMinus /> : <FaPlus />}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </button>

                {/* Animated Body Wrapper */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div 
                      className="faq-answer-container"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="faq-answer-inner">
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}