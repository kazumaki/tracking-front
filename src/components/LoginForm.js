import React from 'react';

const LoginForm = props => {
  const {
    onSubmitLogin, email, setEmail, password, setPassword,
  } = props;

  return (
    <form onSubmit={onSubmitLogin}>
      <input type="email" name="email" autoComplete="email" onChange={e => setEmail(e.target.value)} value={email} />
      <input type="password" name="password" autoComplete="current-password" onChange={e => setPassword(e.target.value)} value={password} />
      <input type="submit" />
    </form>
  );
};

export default LoginForm;
