import './Expenses.css';

import ExpensetItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => {
  const { expenses } = props;

  return (
    <Card className="expenses">
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
    </Card>
  );
};

export default Expenses;
