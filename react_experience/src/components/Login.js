import React, { Component } from 'react'


class Login extends Component {
  loginFunction(e){
    e.preventDefault()
    alert("Hello, welcome back")
  }

    
  render () {
    return (
      <div>
        <form>
           <h2><input type='form-control' placeholder='Email'/></h2>
           <h2><input type='password' placeholder='Password'/></h2>
           <h4><button onClick={this.loginFunction}>Login</button></h4>
        </form> 
      </div>
    )
  }
}

export default Login
