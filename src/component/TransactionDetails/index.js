import "./index.css"

const TransactionDetails=props=>{
    const {transactionDetails} = props
    const {amount,type,category,date}=transactionDetails
    console.log(amount)
    return (
            <tr>
                <td>{type}</td>
                <td>{category}</td>
                <td>{amount}</td>
                <td>{date}</td>
            </tr>
    )
}


export default TransactionDetails