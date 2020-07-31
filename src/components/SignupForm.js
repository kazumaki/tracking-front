import React from 'react';

const SignupForm = ({onSubmitSignup, setName, setEmail, setPassword, setPasswordConfirmation}) => {

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

export default SignupForm;