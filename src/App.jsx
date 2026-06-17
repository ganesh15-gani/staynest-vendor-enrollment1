import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import WhyPartner from './components/WhyPartner'
import Benefits from './components/Benefits'
import PropertyTypes from './components/PropertyTypes'
import FAQ from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <WhyPartner />
      <Benefits />
      <PropertyTypes />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
