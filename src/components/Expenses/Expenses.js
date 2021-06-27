import { useState } from 'react';

import './Expenses.css';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const expenses = props.expenses.map((el) => {
    return (
      <ExpenseItem
        title={el.title}
        amount={el.amount}
        date={el.date}
        key={el.id}
      />
    );
  });

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
