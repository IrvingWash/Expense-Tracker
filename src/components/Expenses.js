import './Expenses.css';

import ExpensetItem from './ExpenseItem';

const Expenses = (props) => {
  const { expenses } = props;

  return (
    <div className="expenses">
      <ExpensetItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpensetItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpensetItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
};

export default Expenses;
