import './ExpenseItem.css'

function ExpenseItem() {

    const expenseDate = new Date(2023, 4, 30); //This is just javascript and not react
    const expenseTitle = 'Energy Bill';
    const expenseAmount = 231.45;

    return (
        <div className="expense-item">
            <h2>{expenseDate.toISOString()}</h2>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <h2 className="expense-item__price">{expenseAmount}</h2>
            </div>
        </div>
    )
}

export default ExpenseItem;