import React from "react";
import "./CreateTicket.css";

const ticketCategories = [
  {
    title: "Account Opening",
    topics: [
      "Online account opening",
      "Offline account opening",
      "NRI account opening",
      "Corporate & HUF accounts",
      "Charges & documentation",
    ],
  },
  {
    title: "Trading & Margins",
    topics: [
      "Intraday margins",
      "Options trading",
      "Leverage policies",
      "Segment activation",
      "Pledge shares for margin",
    ],
  },
  {
    title: "Funds & Withdrawals",
    topics: [
      "Add funds to TradeCore",
      "Withdrawal process",
      "UPI & Netbanking issues",
      "Fund settlement cycle",
      "Refund timelines",
    ],
  },
  {
    title: "Technical Support",
    topics: [
      "Login issues",
      "Password reset",
      "App not loading",
      "Charting issues",
      "Order execution delay",
    ],
  },
  {
    title: "Reports & Statements",
    topics: [
      "Download P&L report",
      "Tax statements",
      "Ledger report",
      "Contract notes",
      "Holding statements",
    ],
  },
  {
    title: "Profile & Security",
    topics: [
      "Update mobile/email",
      "Change bank account",
      "Enable 2FA",
      "Deactivate account",
      "KYC modification",
    ],
  },
];

function CreateTicket() {
  return (
    <div className="container create-ticket">
      <div className="row">
        <h1 className="text-center mb-5">
          Select a topic to create a support ticket
        </h1>

        {ticketCategories.map((category, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="ticket-card">
              <h5>
                <i className="fa fa-plus-circle me-2"></i>
                {category.title}
              </h5>

              {category.topics.map((topic, i) => (
                <a key={i} href="#">
                  {topic}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
