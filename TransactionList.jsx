import React from 'react';
import './TransactionList.css';

function TransactionList({ transactions, onDeleteTransaction }) {
    if (transactions.length === 0) {
        return (
            <div className="transaction-list-container">
                <h2>Transactions</h2>
                <p className="empty-message">No transactions yet. Add one to get started!</p>
            </div>
        );
    }

    return (
        <div className="transaction-list-container">
            <h2>Transactions</h2>
            <div className="transaction-list">
                {transactions.map((transaction) => (
                    <div key={transaction.id} className={`transaction-item ${transaction.type}`}> 
                        <div className="transaction-details">
                            <span className="transaction-description">
                                {transaction.description}
                            </span>
                            <span className={`transaction-amount ${transaction.type}`}> 
                                {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)} 
                            </span>
                        </div>
                        <button className="delete-btn" onClick={() => onDeleteTransaction(transaction.id)} aria-label="Delete transaction">✕</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TransactionList;