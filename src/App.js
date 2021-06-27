import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

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

const App = () => {
  return (
    <div className="App">
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
