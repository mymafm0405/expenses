import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 299.78,
      date: new Date(2022, 10, 11),
    },
    {
      id: "e2",
      title: "Car Insurance 2",
      amount: 299.78,
      date: new Date(2022, 10, 11),
    },
    {
      id: "e3",
      title: "Car Insurance 3",
      amount: 299.78,
      date: new Date(2022, 10, 11),
    },
    {
      id: "e4",
      title: "Car Insurance 4",
      amount: 299.78,
      date: new Date(2022, 10, 11),
    },
  ];

  const addExpenseHandler = (exp) => {
    console.log(exp);
  };

  return (
    <div>
      <NewExpense onAddExp={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
