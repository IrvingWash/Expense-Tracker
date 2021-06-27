import { useState } from 'react';

import './Expenses.css';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

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

  let expenses = <p>No expenses found</p>;

  if (filteredExpenses.length > 0) {
    expenses = filteredExpenses.map((el) => {
      return (
        <ExpenseItem
          title={el.title}
          amount={el.amount}
          date={el.date}
          key={el.id}
        />
      );
    });
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        onChangeFilter={filterChangeHandler}
        selected={filteredYear}
      />
      {expenses}
    </Card>
  );
};

export default Expenses;
