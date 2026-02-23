import React from 'react'
import './Awards.css'

function Awards() {
  return (
    <div className="container my-5">
      
      {/* 90% width + centered */}
      <div className="award-main mx-auto">
        
        <div className="row align-items-center gx-5">

          {/* Left Image */}
          <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
            <img 
              src="images/largestBroker.svg" 
              alt="Largest Broker" 
              className="img-fluid"
            />
          </div>

          {/* Right Content */}
          <div className="col-12 col-lg-6">
            <h2>Largest Stock broker in India</h2>
            <p>
              2+ million clients contribute to over 15% of all retail 
              orders volumes in India daily by trading and investing in:
            </p>

            <div className="row">
              <div className="col-6">
                <ul>
                  <li>Futures and Options</li>
                  <li>Commodity Derivatives</li>
                  <li>Currency Derivatives</li>
                </ul>
              </div>

              <div className="col-6">
                <ul>
                  <li>Stocks and IPO's</li>
                  <li>Direct mutual funds</li>
                  <li>Bonds</li>
                </ul>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Awards
