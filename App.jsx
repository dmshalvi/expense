import React, { useState } from 'react';

const App = () => {
    const [expenses, setExpenses] = useState([]);
    
    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
    };
    
    return (
        <div>
            <h1>Expense Tracker</h1>
            <ExpenseForm addExpense={addExpense} />
            <ExpenseList expenses={expenses} />
        </div>
    );
};

const ExpenseForm = ({ addExpense }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const expense = { description, amount: parseFloat(amount) };
        addExpense(expense);
        setDescription('');
        setAmount('');
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                required
            />
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
                required
            />
            <button type="submit">Add Expense</button>
        </form>
    );
};

const ExpenseList = ({ expenses }) => {
    return (
        <ul>
            {expenses.map((expense, index) => (
                <li key={index}>{expense.description}: ${expense.amount}</li>
            ))}
        </ul>
    );
};

export default App;
