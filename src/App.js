import ExpensetItem from './components/ExpenseItem';

const App = () => {
  const expenses = [
    {
      title: 'Car Insurance',
      amount: 15000,
      date: new Date(2021, 5, 18),
    },
    {
      title: 'Tea',
      amount: 250,
      date: new Date(2021, 4, 12),
    },
    {
      title: 'Headphones',
      amount: 5000,
      date: new Date(2021, 1, 1),
    },
  ];

  return (
    <div className="App">
      <h2>Hello</h2>

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

export default App;
