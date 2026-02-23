import React from 'react'
import "./Stats.css"

function Stats() {
  return (
    <section className="stats-main">

      <div className="container">
        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <h2 className="mb-4">Trust with confidence</h2>

            <div className="mb-4">
              <h6>Customer-first always</h6>
              <p>
                That's why 1.3+ crore customers trust TradeCore with 
                3.5+ lakh crores rupees of equity investments.
              </p>
            </div>

            <div className="mb-4">
              <h6>No spam or gimmicks</h6>
              <p>
                No gimmicks, spam, gamification, or annoying push notifications.
              </p>
            </div>

            <div className="mb-4">
              <h6>The TradeCore universe</h6>
              <p>
                Not just an app, but a whole ecosystem.
              </p>
            </div>

            <div>
              <h6>Do better with money</h6>
              <p>
                Helping you do better with your money.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-12 col-lg-6 text-center">
            <img 
              src="images/ecosystem.png" 
              alt="Ecosystem" 
              className="img-fluid stats-image"
            />
          </div>

        </div>
      </div>

    </section>
  )
}

export default Stats
