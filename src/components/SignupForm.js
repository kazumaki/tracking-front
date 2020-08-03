import React from 'react';

const SignupForm = props => {
  const {
    onSubmitSignup,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    passwordConfirmation,
    setPasswordConfirmation,
  } = props;

  return (
    <form onSubmit={onSubmitSignup}>
      <input type="text" name="name" autoComplete="name" onChange={e => setName(e.target.value)} value={name} />
      <input type="email" name="email" autoComplete="email" onChange={e => setEmail(e.target.value)} value={email} />
      <input type="password" name="password" autoComplete="current-password" onChange={e => setPassword(e.target.value)} value={password} />
      <input type="password" name="password_confirmation" autoComplete="current-password" onChange={e => setPasswordConfirmation(e.target.value)} value={passwordConfirmation} />
      <input type="submit" />
    </form>
  );
};

export default SignupForm;
