import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [currentYear, setCurrentYear] = useState("2021");
  const selectedYearHandler = (year) => {
    console.log(year);
    setCurrentYear(year);
  };
  const loadedExps = props.expenses.filter(
    (ex) => ex.date.getFullYear().toString() === currentYear
  );

  let expContent = <p>No expenses found.</p>;
  if (loadedExps.length > 0) {
    expContent = loadedExps.map((exp) => (
      <ExpenseItem
        key={exp.id}
        title={exp.title}
        amount={exp.amount}
        date={exp.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={currentYear}
        onSelectYear={selectedYearHandler}
      />
      {expContent}
    </Card>
  );
};

export default Expenses;
