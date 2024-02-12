import {Component} from "react"
import CategoryOfIncome from "../CategoryOfIncome"
import TransactionDetails from "../TransactionDetails"
import SelectTypeOfAmount from "../SelectTypeOfAmount"

import {v4 as uuidv4}  from "uuid"

import "./index.css"


const previousTransactions = [
    {id:uuidv4(),amount:25000,type:"INCOME",date:"2021-11-05",category:"salary"},
    {id:uuidv4(),amount:5000,type:"EXPENSES",date:"2021-11-12",category:"salary"},
    {id:uuidv4(),amount:1000,type:"INCOME",date:"2021-11-15",category:"interest"},
]

const categoryOfIncomes=[
    {id:"salary",category:"Salary"},
{id:"business",category:"Business"},
{id:"rent",category:"Rent"},
{id:"diviend",category:"Diviend"},
{id:"interest",category:"Interest"}]

const typeOfMount = [
    {id:"income",type:"INCOME"},
    {id:"expenses",type:"EXPENSES"}
]

    


class Home extends Component{
    state={date:"",amount:0,userHistory:previousTransactions,amountType:"",category:""}

    getTheDate=event=>{
        this.setState({date:event.target.value})
    }

    getTheCategory=event=>{
        const selectCategory = categoryOfIncomes.find(each=>each.id===event.target.value)
      this.setState({category:selectCategory.category})
    }

    getTheAmount=event=>{
        console.log(typeof event.target.value)

        if (typeof(event.target.value===Number)){
            this.setState({amount:event.target.value})
        }
       
    }

    addToTheFinacialList=event=>{
        event.preventDefault()
        const {date,amount,amountType,category}=this.state
        const finacialData = {date,amount,category,type:amountType}
        this.setState(prevState=>({userHistory:[...prevState.userHistory,finacialData]}))
    }

    getTheAmountType = event=>{
        const selectAmountType = typeOfMount.find(each=>each.id===event.target.value)
      this.setState({amountType:selectAmountType.type})
    }


    renderTheInomeAndExpensesForm = ()=>{
        const {finacialList,income,expenses,date,amount}=this.state
        return (
        <div className="home-form-container">
            <form className="home-form" onSubmit={this.addToTheFinacialList}>
                    <h1 className="heading">Enter Your Income And Expenses</h1>
                    <lable htmlFor="income" className="home-label-text">Select Type of Amount</lable>
                    <br/>
                    <select className="home-input-value" onChange={this.getTheAmountType}>
                        {typeOfMount.map(each=>(
                            <SelectTypeOfAmount key={each.id} amountDetails={each}/>
                        ))}
                    </select>
                    <lable htmlFor="date" className="home-label-text">Enter Date</lable>
                    <br/>
                    <input type="date" id="date" value={date} onChange={this.getTheDate} placeholder="Enter The Date" className="home-input-value"/>
                    <br/>
                    <label htmlFor="income-type" className="home-label-text">Select Income Type</label>
                    <select className="home-input-value" onChange={this.getTheCategory}>
                     {categoryOfIncomes.map(each=>(
                        <CategoryOfIncome key={each.id} categoryDetails={each} />
                     ))}
                    </select>
                    <br/>
                    <lable htmlFor="amount" className="home-label-text">Enter Amount</lable>
                    <br/>
                    <input type="text" id="amount" value={amount} onChange={this.getTheAmount} placeholder="Enter The Amount" className="home-input-value"/>
                    <br/>

                    <button type="submit" className="add-btn">Submit</button>
                </form>
        </div>
    )}

    renderTheUserTransactionDetails = ()=>{
        const {userHistory} =  this.state
        return(
            <div className="transaction-details-container">
                <h1 className="heading">Transaction Histroy</h1>
              <table className="table-container">
                <thead >
                    <tr>
                        <th>TYPE</th>
                        <th>CATEGORY</th>
                        <th>AMOUNT</th>
                        <th>DATE</th>
                    </tr>
                </thead>
                <tbody>
                    {userHistory.map(each=>(
                        <TransactionDetails key={each.id} transactionDetails={each}/>
                    ))}
                </tbody>
              </table>
            </div>
        )

    }

    render(){
        return(
            <div className="home-contaier">
                <h1 className="heading">Personal Finance Tracker Web Application</h1>
                <div className="form-user-transaction-details-container">
                {this.renderTheInomeAndExpensesForm()}
                {this.renderTheUserTransactionDetails()}
                </div>
            </div>
        )
    }
}


export default Home