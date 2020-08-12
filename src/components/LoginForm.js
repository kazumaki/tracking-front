import React from 'react';
import PropTypes from 'prop-types';
import '../styles/LoginForm.module.scss';

const LoginForm = props => {
  const {
    onSubmitLogin, email, setEmail, password, setPassword,
  } = props;

  return (
    <form onSubmit={onSubmitLogin}>
      <label htmlFor="email">
        <div>Email</div>
        <input type="email" id="email" name="email" autoComplete="email" onChange={e => setEmail(e.target.value)} value={email} />
      </label>
      <label htmlFor="password">
        <div>Password</div>
        <input type="password" id="password" name="password" autoComplete="current-password" onChange={e => setPassword(e.target.value)} value={password} />
      </label>
      <input className="submitButton" type="submit" value="Login" />
    </form>
  );
};

LoginForm.propTypes = {
  onSubmitLogin: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
};

export default LoginForm;
