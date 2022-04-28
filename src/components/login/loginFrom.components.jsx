import './loginForm.style.scss'
import React from 'react'
// import {emailRegx,PasswordRegx  } from '../regex'




class Form extends React.Component {
    constructor(){
    super()
    this.state={
        email:"",
        password:""
       
    };


}

// handelChange=(event)=>{
//     const {name,value}=event.target
//     this.setState({[name]:value})
// }
handelName=(event)=>{
    this.setState({name:event.target.value})
    // console.log(event.target.name)

}
 handelEmail=(event)=>{
        //  console.log(event.target.name)
        this.setState({email:event.target.value})
    
     }
     handelPassword=(event)=>{
            // console.log(event.target.value)
            this.setState({password:event.target.value})
        
        }
        handelSubmit=(event)=>{
            this.setState({password:event.target.value})
        }

        render() {
        console.log(this.state)
        return (
            <>
            <form>
                <div className="App">
                    <h1>Login-From</h1>
                </div>
                <div className="login-from">
                    <h1>login here</h1>
                    <div>
                        <input
                            className="username"
                            type="name"
                            placeholder='enter your name'
                            onChange={this.handelName}
                        />
                        <div >
                            <input
                                className="input-email"
                                type="email"
                                placeholder='enter your email'
                                onChange={this.handelEmail}
                            />
                            <div >
                                <input
                                    className="input-password"
                                    type="password"
                                    placeholder='enter your password'
                                    onChange={this.handelPassword}
                                />
                                <div >
                                    <button className="submit-btn">SUBMIT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </form>
            </>
        );
    }
}

export default Form


