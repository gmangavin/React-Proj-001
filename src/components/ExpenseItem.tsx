import './ExpenseItem.css'

function ExpenseItem(props: {date: Date, title: string, amount: number}) {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    //Being expenseDate is a javascript object we can use the toISOString() method to convert it to a string
    return (
        <div className="expense-item">
            <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <h2 className="expense-item__price">{props.amount}</h2>
            </div>
        </div>
    )
}

export default ExpenseItem;