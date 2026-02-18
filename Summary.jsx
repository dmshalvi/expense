import React from 'react';

const Summary = ({ totalExpenses }) => {
    return (
        <div className="summary">
            <h2>Total Expenses: ${totalExpenses}</h2>
        </div>
    );
};

export default Summary;