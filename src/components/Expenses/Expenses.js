import { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";


import "./Expenses.css";

const Expenses = (props) => {
  const expenses = props.expenses;

  const [filteredYear, setFilteredYear] = useState("2021");

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  const filterChangeHandler = (filter) => {
    console.log(`filter from expenses.js: ${filter}`);
    setFilteredYear(filter);
  };

  return (
    // <Card className="expenses">
    //   {expenses.map((item) => (
    //     <ExpenseItem
    //       title={item.title}
    //       amount={item.amount}
    //       date={item.date}
    //       key={item.title}
    //     />
    //   ))}
    // </Card>
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
