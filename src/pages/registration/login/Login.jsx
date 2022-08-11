import {useRef} from 'react'
import '../signup/signup.scss'
import { useNavigate, Link } from 'react-router-dom'

export default function Login() {
  const name = useRef(null)
  const password = useRef(null)
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    var x = localStorage.getItem("data");
   if(x){
    var data = JSON.parse(x);
    if(data.name===name.current.value && data.password===password.current.value){
      navigate('/')
    }
else{
  alert('invalid data')
}
   }

  }
 
  const inputs = [
    {
      name: 'name',
      type: 'text',
      placeholder: 'name',
      className: 'form-input',
      ref: name,
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'password',
      className: 'form-input',
      ref: password,
    },
  ]
  return (
    <div className="signup-container">
      <div className="signup-content">
        <h1>Sign In</h1>
        <form action="">
        {inputs.map((input, i) => (
            <input
              key={i}
              name={input.name}
              className={input.className}
              ref={input.ref}
              type={input.type}
              placeholder={input.placeholder}
            />
          ))}

          <button className="form-button" onClick={handleSubmit}>
            Sign in
          </button>
        </form>
        <h5>
          Don't have an account?
          <Link to="/register">Sign Up</Link>
        </h5>
      </div>
    </div>
  )
}
