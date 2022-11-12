import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

export default function NewExpense(props) {
  const saveExpHandler = (exp) => {
    props.onAddExp(exp);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExp={saveExpHandler} />
    </div>
  );
}
