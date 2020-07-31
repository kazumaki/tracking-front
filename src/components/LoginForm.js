import React from 'react'

const LoginForm = ({onSubmitLogin, setEmail, setPassword}) => {
  return (
    <form onSubmit={onSubmitLogin} >
      <input type="email" name="email" autoComplete="email" onChange={e => setEmail(e.target.value) } />
      <input type="password" name="password" autoComplete="current-password" onChange={e => setPassword(e.target.value) } />
      <input type="submit" />
    </form>
  )
}

export default LoginForm;