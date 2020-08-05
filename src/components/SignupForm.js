import React from 'react';
import '../styles/SignupForm.module.scss';

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
      <label htmlFor="name">
        <div>Name</div>
        <input type="text" id="name" name="name" autoComplete="name" onChange={e => setName(e.target.value)} value={name} />
      </label>
      <label htmlFor="email">
        <div>Email</div>
        <input type="email" id="email" name="email" autoComplete="email" onChange={e => setEmail(e.target.value)} value={email} />
      </label>
      <label htmlFor="password">
        <div>Password</div>
        <input type="password" name="password" autoComplete="current-password" onChange={e => setPassword(e.target.value)} value={password} />
      </label>
      <label htmlFor="password-confirmation">
        <div>Password Confirmation</div>
        <input type="password" id="password-confirmation" name="password_confirmation" autoComplete="current-password" onChange={e => setPasswordConfirmation(e.target.value)} value={passwordConfirmation} />
      </label>
      <input type="submit" />
    </form>
  );
};

export default SignupForm;
