import React, {useState} from 'react'

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');

  const onSubmitSignup = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/signup', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
 
        },
        method: 'POST',
        body: JSON.stringify({name, email, password, password_confirmation})
      }
    )
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(e => console.log(e))
  }

  return (
    <form onSubmit={onSubmitSignup}>
      <input type='text' name='name' autoComplete='name' onChange={e => setName(e.target.value) } />
      <input type='email' name='email' autoComplete='email' onChange={e => setEmail(e.target.value) } />
      <input type='password' name='password' autoComplete='current-password' onChange={e => setPassword(e.target.value) } />
      <input type='password' name='password_confirmation' autoComplete='current-password' onChange={e => setPasswordConfirmation(e.target.value) } />
      <input type='submit' />
    </form>
  )
}

export default Signup;