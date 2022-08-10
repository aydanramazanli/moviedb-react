import React from 'react'
import '../signup/signup.scss'
import { useNavigate, Link } from 'react-router-dom'

export default function Login() {
  const navigate=useNavigate()
const handleSubmit=(e)=>{
e.preventDefault()
navigate('/')

}

  return (
    <div className="signup-container">
    <div className="signup-content">
    <h1>Sign In</h1>
  <form action="">
    <input  className="form-input" type="text" placeholder='Name'/>
    <input  className="form-input" type="password" placeholder='password'/>
   
   <button className="form-button" onClick={handleSubmit}>Sign in</button>
  
  </form>
  <h5>Don't have an account?
    <Link to='/register'>Sign Up</Link> 
   </h5>
    </div>
   
</div>
  )
}
