import React from 'react';
import './TransactionList.css';

function TransactionList({ transactions, onDeleteTransaction }) {
  if (transactions.length === 0) {
    return (
      <div className="transaction-list">
        <p className="empty-message">No transactions yet. Add one to get started!</p>
      </div>
    );
  }

  return (
    <div className="transaction-list">
      <h2>Transactions</h2>
      <div className="list-container">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className={`transaction-item ${transaction.type}`}
          >
            <div className="transaction-details">
              <span className="description">{transaction.description}</span>
              <span className={`amount ${transaction.type}`}>
                {transaction.type === 'income' ? '+' : '-'}₹{parseFloat(transaction.amount).toFixed(2)}
              </span>
            </div>
            <button
              onClick={() => onDeleteTransaction(transaction.id)}
              className="btn-delete"
              title="Delete transaction"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TransactionList;
