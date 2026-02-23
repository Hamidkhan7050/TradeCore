import React from 'react'
import "./Pricing.css"

function Pricing() {
  return (
    <section className="pricing-main">

      <div className="container pricing-box">
        <div className="row align-items-center justify-content-between">

          {/* Left */}
          <div className="col-12 col-lg-4 mb-4 mb-lg-0">
            <h3>Unbeatable pricing</h3>
            <p>
              We pioneered the concept of discount broking and price transparency
              in India. Flat fees and no hidden charges.
            </p>
            <a href="" style={{ textDecoration: "none" }}>
              See Pricing{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          {/* Right */}
          <div className="col-12 col-lg-6">
            <div className="d-flex justify-content-between">

              <div className="pricing-card text-center">
                <h3>&#8377; 0</h3>
                <p>
                  Free equity delivery <br />
                  and direct mutual funds
                </p>

              </div>

              <div className="pricing-card text-center">
                <h3>&#8377; 20</h3>
                <p>Intraday and F&O</p>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Pricing
