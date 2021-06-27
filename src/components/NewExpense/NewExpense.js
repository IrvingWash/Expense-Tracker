import './NewExpense.css';

import { useState } from 'react';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [formIsShown, setFormIsShown] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);

    setFormIsShown(false);
  };

  const showFormHandler = () => {
    setFormIsShown(true);
  };

  const hideFormHandler = () => {
    setFormIsShown(false);
  };

  const content = formIsShown ? (
    <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      onHideForm={hideFormHandler}
    />
  ) : (
    <button onClick={showFormHandler}>Add New Expense</button>
  );

  return <div className="new-expense">{content}</div>;
};

export default NewExpense;
