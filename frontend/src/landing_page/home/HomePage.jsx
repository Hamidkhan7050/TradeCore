import React from 'react'
import Awards from './Awards.jsx'
import Education from './Education.jsx'
import Hero from './Hero.jsx'
import Navbar from '../Navbar.jsx'
import Pricing from './Pricing.jsx'
import Stats from './Stats.jsx'
import Footer from '../Footer.jsx'
import OpenAccount from '../OpenAccount.jsx'
// import "./HomePage.css"


function HomePage() {
  return (
    <>
      <div className="main_box">
        <Hero />
        <Awards />
        <Stats />
        <Pricing />

        <Education />
        <OpenAccount />
        <Footer />

      </div>

    </>


  )
}

export default HomePage
