import React from 'react'

function Footer() {
  return (
    <div>
      <div className="container " style={{backgroundColor:"rgb(245,245,245)"}}>
        <div className="row">

          <div className="col">
            {/* <img src="images/logo.svg" alt="TradeCore Logo" style={{ width: "50%" }} /> */}
            <h2 >TradeCore</h2>
            <p>
              &copy; 2010 - 2024, TradeCore Broking Ltd. All rights reserved.
            </p>
          </div>

          <div className="col">
            <p>Company</p>
            <a href="">About</a><br />
            <a href="">Products</a><br />
            <a href="">Pricing</a><br />
            <a href="">Referral programme</a><br />
            <a href="">Careers</a><br />
            <a href="">TradeCore.tech</a><br />
            <a href="">Press & media</a><br />
            <a href="">TradeCore Cares (CSR)</a><br />
          </div>

          <div className="col">
            <p>Support</p>
            <a href="">Contact</a><br />
            <a href="">Support portal</a><br />
            <a href="">Knowledge base</a><br />
            <a href="">List of charges</a><br />
            <a href="">Downloads & resources</a><br />
          </div>

          <div className="col">
            <p>Account</p>
            <a href="">Open an account</a><br />
            <a href="">Fund transfer</a><br />
            <a href="">Trading challenge</a><br />
          </div>

        </div>

        <div className="mt-5">

          <p>
            TradeCore Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
            (Registration details to be updated). Depository services through 
            TradeCore Securities Pvt. Ltd. Commodity trading through TradeCore 
            Commodities Pvt. Ltd. Registered address: TradeCore Broking Ltd., 
            Bengaluru, Karnataka, India. For any complaints related to trading 
            or depository services, please write to support@tradecore.com.
          </p>

          <p>
            Procedure to file a complaint through SEBI SCORES: Register on the 
            SCORES portal and provide mandatory details such as Name, PAN, 
            Address, Mobile Number, and Email ID. Benefits include effective 
            communication and speedy redressal of grievances.
          </p>

          <p>
            Investments in the securities market are subject to market risks. 
            Please read all related documents carefully before investing.
          </p>

          <p>
            Prevent unauthorised transactions in your account. Update your 
            mobile numbers and email IDs with your stock broker. Receive 
            transaction details directly from the Exchange at the end of the day. 
            TradeCore does not provide stock tips or authorize anyone to trade 
            on behalf of clients. If you encounter such claims, please contact 
            our official support channels immediately.
          </p>

        </div>
      </div>
    </div>
  )
}

export default Footer
