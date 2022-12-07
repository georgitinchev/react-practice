import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 143.12,
      date: new Date(2022, 11, 8),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 128.23,
      title: "",
      date: new Date(2022, 11, 7),
    },
    {
      id: "e3",
      title: "House Insurance",
      amount: 987.14,
      date: new Date(2022, 11, 7),
    },
    {
      id: "e4",
      title: "Medical Insurance",
      amount: 112.12,
      date: new Date(2022, 11, 7),
    },
  ];

  return (
    <div>
      <h2 className="starter-header">Let's get started!</h2>
      <ExpenseItem title="Toilet Paper"></ExpenseItem>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
