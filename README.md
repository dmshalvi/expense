# 💰 Expense Tracker

A modern React-based Expense Tracker application for managing your income and expenses. Track transactions, view your balance, and maintain financial records with an intuitive user interface.

## Features

✅ **Add Transactions**: Record income and expense transactions with descriptions and amounts  
✅ **Transaction List**: View all transactions with options to delete them  
✅ **Financial Summary**: Display total balance, total income, and total expenses  
✅ **Real-time Updates**: Summaries update dynamically as you add or remove transactions  
✅ **Responsive Design**: Works seamlessly on desktop and mobile devices  
✅ **Form Validation**: Ensures valid input before adding transactions  

## Technologies Used

- **React 19**: JavaScript library for building user interfaces
- **Vite**: Fast front-end build tool
- **CSS 3**: Modern styling with gradients and animations
- **JavaScript (ES6+)**: Modern JavaScript features

## Project Structure

```
expense-tracker/
├── src/
│   ├── components/
│   │   ├── TransactionForm.jsx      # Form component for adding transactions
│   │   ├── TransactionForm.css      # Styles for transaction form
│   │   ├── TransactionList.jsx      # Component to display transaction list
│   │   ├── TransactionList.css      # Styles for transaction list
│   │   ├── Summary.jsx              # Component showing balance summary
│   ├── App.jsx                      # Main application component
│   ├── App.css                      # Styles for main app
│   ├── main.jsx                     # Application entry point
│   └── index.css                    # Global styles
├── index.html                       # HTML entry point
├── vite.config.js                   # Vite configuration
├── package.json                     # Project dependencies and scripts
└── README.md                        # This file
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (usually comes with Node.js)

### Steps

1. **Navigate to the project directory**:
   ```bash
   cd "New folder (10)"
   ```

2. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to**:
   ```
   http://localhost:5173/
   ```

## How to Use

### Adding a Transaction

1. Enter a **description** (e.g., "Salary", "Groceries")
2. Enter the **amount** (positive numbers only)
3. Select the **type**: Income or Expense
4. Click **"Add Transaction"** button

### Viewing Transactions

- All transactions appear in the **Transactions** section
- Each transaction shows:
  - Description and amount
  - Color-coded indicator (green for income, red for expense)
  - A delete button (✕) to remove the transaction

### Monitoring Your Balance

The **Summary Section** at the top displays:
- **Total Balance**: Current balance (Income - Expenses)
- **Total Income**: Sum of all income transactions
- **Total Expenses**: Sum of all expense transactions

## Available Scripts

### Development
```bash
npm run dev
```
Starts the development server with hot module replacement (HMR).

### Build
```bash
npm run build
```
Creates a production-ready build in the `dist/` folder.

### Preview
```bash
npm run preview
```
Previews the production build locally.

## React Concepts Used

- **Components**: Functional components for UI elements
- **Hooks**: `useState` for state management
- **JSX**: Writing HTML-like syntax in JavaScript
- **Props**: Passing data between components
- **Event Handling**: Managing user interactions (click, input changes)
- **Conditional Rendering**: Displaying content based on state
- **List Rendering**: Displaying transaction lists with `map()`

## Styling Features

- **Gradient Backgrounds**: Modern purple and teal gradients
- **Responsive Layout**: Grid and flexbox for responsive design
- **Smooth Animations**: Hover effects and transitions
- **Custom Scrollbar**: Styled scrollbar for transaction list

## Example Transactions

Try adding these transactions to test the app:
- Income: Salary - $5,000
- Expense: Rent - $1,500
- Expense: Groceries - $200
- Income: Freelance Work - $800
- Expense: Entertainment - $150

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Future Enhancements

Potential features to add:
- 📅 Date tracking for transactions
- 🏷️ Category tags for expenses
- 📊 Charts and graphs visualization
- 💾 Local storage persistence
- 🎨 Dark mode theme
- 📱 Progressive Web App (PWA) support
- 🔍 Search and filter functionality

## License

ISC License - Feel free to use and modify this project.

## Getting Help

If you encounter any issues:
1. Ensure Node.js and npm are properly installed
2. Delete `node_modules` folder and run `npm install` again
3. Clear your browser cache
4. Restart the development server

---

**Happy Tracking! 💸**
