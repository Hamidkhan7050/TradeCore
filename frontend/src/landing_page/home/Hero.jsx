import React from 'react'
import "./Hero.css"

function Hero() {
  return (
    <div className="container-fluid mb-5 hero-main">
      <div className="row justify-content-center text-center">

        <div className="col-12">
          
          <img 
            src="images/homeHero.png" 
            alt="Hero"
            className="hero-image mb-4"
          />
          
          <h1>Invest in Everything</h1>
          <p>
            Online platform to invest in stocks, derivatives 
            and mutual funds
          </p>
          
          <button className="btn btn-primary mt-3">
            Signup Now
          </button>

        </div>

      </div>
    </div>
  )
}

export default Hero
