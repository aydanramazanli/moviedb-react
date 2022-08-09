import React from 'react'
import './signup.scss'

export default function SignUp() {
  return (
    <div className="signup-container">
        <div className="signup-content">
        <h1>Sign Up</h1>
      <form action="">
        <input  className="form-input" type="text" placeholder='Name'/>
        <input  className="form-input" type="email" placeholder='Email'/>
        <input className="form-input"  type="password" placeholder='password'/>
       <button className="form-button">Sign up</button>
      
      </form>
      <h5>Already have an account?
         Sign in
       !</h5>
        </div>
       
    </div>
  )
}
