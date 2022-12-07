import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2022, 11, 7);
  const expenseTitle = "Car Insurance";
  const expenseAmntVariable = 304.2;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmntVariable}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
