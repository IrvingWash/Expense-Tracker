import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const day = props.date.toLocaleString('ru-RU', { day: '2-digit' });
  const month = props.date.toLocaleString('ru-RU', { month: 'long' });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
