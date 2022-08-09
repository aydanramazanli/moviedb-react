import React from 'react'
import '../signup/signup.scss'

export default function Login() {
  return (
    <div className="signup-container">
    <div className="signup-content">
    <h1>Sign In</h1>
  <form action="">
    <input  className="form-input" type="text" placeholder='Name'/>
    <input  className="form-input" type="password" placeholder='password'/>
   
   <button className="form-button">Sign in</button>
  
  </form>
  <h5>Don't have an account? Sign up!
   !</h5>
    </div>
   
</div>
  )
}
