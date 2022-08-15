
import { useRef } from 'react';
import './signup.scss';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp () {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    const data = {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
      wishList: []
    };

    navigate('/login');
    window.localStorage.setItem('data', JSON.stringify(data));
  };

  const inputs = [
    {
      name: 'name',
      type: 'text',
      placeholder: 'name',
      className: 'form-input',
      ref: name
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'email',
      className: 'form-input',
      ref: email
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'password',
      className: 'form-input',
      ref: password
    }
  ];
  return (
		<div className="signup-container">
			<div className="signup-content">
				<h1>Sign Up</h1>
				<form >
					{inputs.map((input, i) => (
						<>
							<input
								key={i}
								name={input.name}
								className={input.className}
								ref={input.ref}
								type={input.type}
								placeholder={input.placeholder}
							/>

						</>
					))}
					<button className="form-button" onClick={submit}>Sign up</button>
				</form>
				<h5>
          Already have an account?
					<Link to="/login"> Sign in !</Link>
				</h5>
			</div>
		</div>
  );
}
