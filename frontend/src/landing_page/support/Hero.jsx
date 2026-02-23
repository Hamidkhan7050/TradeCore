import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="container-fluid support-hero">

      {/* Top Bar */}
      <div className="support-header">
        <h4>TradeCore Support</h4>
        <a href="#">Track Your Tickets</a>
      </div>

      {/* Main Section */}
      <div className="row support-content">

        {/* Left Side */}
        <div className="col-md-6 support-left">
          <h1>
            How can we help you today?
          </h1>

          <input
            type="text"
            placeholder="Eg. How do I activate F&O in TradeCore?"
            className="support-input"
          />

          <div className="quick-links">
            <a href="#">Track account opening</a>
            <a href="#">Activate trading segments</a>
            <a href="#">Intraday margin details</a>
            <a href="#">TradeCore user manual</a>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-md-6 support-right">
          <h2>Featured Articles</h2>

          <ol>
            <li>
              <a href="#">Latest margin policies and leverage updates</a>
            </li>
            <li>
              <a href="#">Understanding options trading on TradeCore</a>
            </li>
            <li>
              <a href="#">How to reset your trading password</a>
            </li>
          </ol>
        </div>

      </div>
    </section>
  );
}

export default Hero;
