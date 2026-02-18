# Expense Tracker - Project Instructions

## Project Overview
React-based Expense Tracker application for managing income and expenses with real-time balance tracking.

## Development Workflow

### Prerequisites
- Node.js v14+
- npm or yarn
- VS Code
- Chrome browser (recommended)

### Initial Setup
1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Open http://localhost:5173/ in browser

### Key Technologies
- React 19 (Hooks, Functional Components)
- Vite (Build tool)
- CSS3 (Modern styling)
- JavaScript ES6+

## Project Structure
```
src/
├── components/
│   ├── TransactionForm.jsx - Input form for transactions
│   ├── TransactionList.jsx - Display and manage transactions
│   └── Summary.jsx - Show financial summaries
├── App.jsx - Main component with state management
└── index.css - Global styles
```

## Core Features
1. **Transaction Management**: Add/delete income and expense transactions
2. **Financial Summary**: Real-time balance, income, and expense tracking
3. **Form Validation**: Ensures positive amounts and complete data
4. **Responsive Design**: Works on desktop and mobile

## Available Commands
- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build

## Important Files
- App.jsx - Contains main state and logic
- vite.config.js - Vite configuration
- package.json - Dependencies and scripts

## React Concepts Applied
- useState Hook for state management
- Props for component communication
- Event handlers for user interactions
- Conditional rendering
- List rendering with .map()

## Testing the App
1. Add an income transaction (e.g., Salary - $5000)
2. Add an expense transaction (e.g., Rent - $1500)
3. Verify balance calculation: $5000 - $1500 = $3500
4. Delete a transaction and verify updates
5. Check responsive design on mobile view

---

For more details, see README.md
