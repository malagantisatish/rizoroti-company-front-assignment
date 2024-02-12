import {Component} from "react"
import "./index.css"

class LoginForm extends Component{
    state={username:"",password:""}

    getTheUsername=event=>{
        this.setState({username:event.target.value})
    }

    getThePassword=event=>{
        this.setState({password:event.target.value})
    }

    submitTheUserDetails=event=>{
        event.preventDefault()
        const {username,password} = this.state
        const userDetails = {username,password}
    }


    render(){
        const {username,password}=this.state
        return (
            <div className="login-form-container">
                <form className="login-form" onSubmit={this.submitTheUserDetails}>
                    <h1 className="login-heading">Login</h1>
                    <label htmlFor="username" className="label-text">USERNAME</label>
                    <br/>
                    <input id="username" type="text" value={username} placeholder="USERNAME"  className="input-value" onChange={this.getTheUsername}/>
                    <br/>
                    <label htmlFor="password" className="label-text">PASSWORD</label>
                    <input id="password" type="password" value={password} placeholder="PASSWORD" className="input-value" onChange={this.getThePassword}/>
                    <br/>
                    <button type="submit" className="login-btn">Login</button>
                </form>
            </div>
        )
    }
}


export default LoginForm