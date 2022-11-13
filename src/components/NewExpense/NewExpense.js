import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

export default function NewExpense(props) {
  const saveExpHandler = (exp) => {
    const expData = {
      ...exp,
      id: Math.random().toString()
    }
    props.onAddExp(expData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExp={saveExpHandler} />
    </div>
  );
}
