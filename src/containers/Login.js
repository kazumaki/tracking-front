import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../store/actions/authActions';
import styles from '../styles/Login.module.scss';
import RequireNoAuth from './RequireNoAuth';
import LoginForm from '../components/LoginForm';
import Header from '../components/Header';

const Login = ({ login, token, response }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitLogin = event => {
    event.preventDefault();
    const loginData = { email, password };
    login(loginData);
  };

  return (
    <div>
      <RequireNoAuth />
      <Header />
      <div className={styles.mainContainer}>
        <LoginForm
          onSubmitLogin={onSubmitLogin}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
        <Link to="/signup">Signup</Link>
      </div>
      { (!token && response) && response.data.message }
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  login: loginData => dispatch(login(loginData)),
});

const mapStateToProps = state => ({
  token: state.authReducer.token,
  response: state.authReducer.response,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
