import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const INITIAL_EPXENSES = [
  {
    title: 'Car Insurance',
    amount: 15000,
    date: new Date(2021, 5, 18),
    id: 1,
  },
  {
    title: 'Tea',
    amount: 250,
    date: new Date(2021, 4, 12),
    id: 2,
  },
  {
    title: 'Headphones',
    amount: 5000,
    date: new Date(2021, 1, 1),
    id: 3,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EPXENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
