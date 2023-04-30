import './ExpenseItem.css'

function ExpenseItem() {
    return (
        <div className="expense-item">
            <h2>April 30th 2023</h2>
            <div className="expense-item__description">
                <h2>Energy Bill</h2>
                <h2 className="expense-item__price">$231.45</h2>
            </div>
        </div>
    )
}

export default ExpenseItem;