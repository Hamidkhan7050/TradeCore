import React from "react";
import { holdings } from "../data/data";

const Holdings = () => {
  return (
    <div>
      <h3 className="title">
        Holdings ({holdings.length})
      </h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. Cost</th>
              <th>LTP</th>
              <th>Current Value</th>
              <th>P&L</th>
              <th>Net Chg.</th>
              <th>Day Chg.</th>
            </tr>
          </thead>

          <tbody>
            {holdings.map((stock, index) => {
              const currentValue = stock.price * stock.qty;
              const investment = stock.avg * stock.qty;
              const pnl = currentValue - investment;

              const profitClass = pnl >= 0 ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{currentValue.toFixed(2)}</td>
                  <td className={profitClass}>
                    {pnl.toFixed(2)}
                  </td>
                  <td className={profitClass}>
                    {stock.net}
                  </td>
                  <td className={dayClass}>
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Holdings;