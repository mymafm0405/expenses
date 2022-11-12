import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [currentYear, setCurrentYear] = useState('')
  const selectedYearHandler = (year) => {
    console.log(year)
    setCurrentYear(year)
  }
  return (
    <Card className="expenses">
      <ExpensesFilter onSelectYear={selectedYearHandler} />
      {props.expenses.map((exp) => (
        <ExpenseItem
          key={exp.id}
          title={exp.title}
          amount={exp.amount}
          date={exp.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
