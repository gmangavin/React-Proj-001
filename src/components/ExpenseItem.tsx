import './ExpenseItem.css'

function ExpenseItem(props: {date: Date, title: string, amount: number}) {

    //Being expenseDate is a javascript object we can use the toISOString() method to convert it to a string
    return (
        <div className="expense-item">
            <div>
                <div>{props.date.toLocaleString('en-US', {month: 'long'})}</div>
                <div>Day</div>
                <div>Year</div>
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <h2 className="expense-item__price">{props.amount}</h2>
            </div>
        </div>
    )
}

export default ExpenseItem;