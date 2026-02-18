import React from 'react';

function Summary({ balance, income, expenses }) {
  return (
    <div className="summary-section">
      <div className="summary-card">
        <h3>Total Balance</h3>
        <div className="amount" style={{
          color: balance >= 0 ? '#11998e' : '#eb3349'
        }}>
          ₹{balance.toFixed(2)}
        </div>
      </div>
      
      <div className="summary-card income">
        <h3>Total Income</h3>
        <div className="amount">₹{income.toFixed(2)}</div>
      </div>
      
      <div className="summary-card expense">
        <h3>Total Expenses</h3>
        <div className="amount">₹{expenses.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default Summary;
