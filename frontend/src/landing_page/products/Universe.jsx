import React from "react";
import "./Universe.css";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">

        <h1 className="fw-bold">The TradeCore Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        {/* Smallcase */}
        <div className="col-md-4 p-4 d-flex flex-column align-items-center">
          <img src="images/smallcaseLogo.png" className="logos" alt="smallcase" />
          <p className="text-muted mt-3">
            Invest in curated portfolios of stocks built around themes and strategies.
          </p>
        </div>

        {/* Streak */}
        <div className="col-md-4 p-4 d-flex flex-column align-items-center">
          <img src="images/streakLogo.png" className="logos" alt="streak" />
          <p className="text-muted mt-3">
            Create and backtest trading strategies without writing a single line of code.
          </p>
        </div>

        {/* Sensibull */}
        <div className="col-md-4 p-4 d-flex flex-column align-items-center">
          <img src="images/sensibullLogo.svg" className="logos" alt="sensibull" />
          <p className="text-muted mt-3">
            Simplify options trading with smart analytics and risk management tools.
          </p>
        </div>

        {/* Ditto */}
        <div className="col-md-4 p-4 d-flex flex-column align-items-center">
          <img src="images/dittoLogo.png" className="logos" alt="ditto" />
          <p className="text-muted mt-3">
            Get expert advice on insurance products tailored to your financial needs.
          </p>
        </div>

        {/* GoldenPi */}
        <div className="col-md-4 p-4 d-flex flex-column align-items-center">
          <img src="images/goldenpiLogo.png" className="logos" alt="goldenpi" />
          <p className="text-muted mt-3">
            Invest in government bonds and fixed-income securities with ease.
          </p>
        </div>

        {/* Zerodha Fundhouse */}
        <div className="col-md-4 p-4 d-flex flex-column align-items-center">
          <img src="images/zerodhaFundhouse.png" className="logos" alt="fundhouse" />
          <p className="text-muted mt-3">
            Explore low-cost mutual funds designed for long-term wealth creation.
          </p>
        </div>

        {/* Button */}
        <div className="d-flex justify-content-center mt-4 mb-5">
          <button className="btn btn-primary px-4 py-2 fs-5">
            Signup Now
          </button>
        </div>

      </div>
    </div>
  );
}

export default Universe;
