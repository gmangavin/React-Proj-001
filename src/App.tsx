import ExpenseItem from './components/ExpenseItem'

function App() {

  const expenses = [
    {date: new Date(2023, 4, 30), title: 'Energy Bill', amount: 231.45},
    {date: new Date(2023, 4, 30), title: 'Water Bill', amount: 80.45},
    {date: new Date(2023, 4, 30), title: 'Internet Bill', amount: 125.45},
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem 
      date={expenses[0].date}
      title={expenses[0].title}
      amount={expenses[0].amount}
      ></ExpenseItem>
       <ExpenseItem 
      date={expenses[1].date}
      title={expenses[1].title}
      amount={expenses[1].amount}
      ></ExpenseItem>
       <ExpenseItem 
      date={expenses[2].date}
      title={expenses[2].title}
      amount={expenses[2].amount}
      ></ExpenseItem>
    </div>
  );
}

export default App;