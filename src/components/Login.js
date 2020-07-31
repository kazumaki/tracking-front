import React, {useState} from 'react'
import { Redirect } from 'react-router-dom';

const Login = ({setToken}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitLogin = (event) => {
    event.preventDefault();
    const loginData = {email, password}
    fetch('http://localhost:3001/auth/login', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
 
        },
        method: 'POST',
        body: JSON.stringify({email, password})
      }
    )
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(e => console.log(e))
  }

  return (
    <form onSubmit={onSubmitLogin} >
      <input type="email" name="email" autoComplete="email" onChange={e => setEmail(e.target.value) } />
      <input type="password" name="password" autoComplete="current-password" onChange={e => setPassword(e.target.value) } />
      <input type="submit" />
    </form>
  )
};

export default Login;
