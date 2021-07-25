import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('all');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let filteredExpenses = [];

  if (filteredYear !== 'all') {
    filteredExpenses = props.expenses.filter(
      (el) => el.date.getFullYear().toString() === filteredYear
    );
  } else {
    filteredExpenses = props.expenses;
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        onChangeFilter={filterChangeHandler}
        selected={filteredYear}
      />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
