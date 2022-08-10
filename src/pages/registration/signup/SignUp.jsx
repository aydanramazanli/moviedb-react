import React from 'react'
import './signup.scss'
import {Link, useNavigate} from 'react-router-dom'

export default function SignUp() {
  const navigate =useNavigate()
  const submit=(e)=>{
    e.preventDefault()
    navigate('/login')
  }
  return (
    <div className="signup-container">
        <div className="signup-content">
        <h1>Sign Up</h1>
      <form action="">
        <input  className="form-input" type="text" placeholder='Name'/>
        <input  className="form-input" type="email" placeholder='Email'/>
        <input className="form-input"  type="password" placeholder='password'/>
       <button className="form-button" onClick={submit}>Sign up</button>
      
      </form>
      <h5>Already have an account?
        <Link to='/login'>  Sign in
       !</Link>
       </h5>
        </div>
       
    </div>
  )
}
