import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signup } from '../store/actions/authActions';
import styles from '../styles/Signup.module.scss';
import SignupForm from '../components/SignupForm';
import RequireNoAuth from './RequireNoAuth';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Signup = ({ signup }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');

  const onSubmitSignup = e => {
    e.preventDefault();

    const signupData = {
      name,
      email,
      password,
      password_confirmation,
    };

    signup(signupData);
  };

  return (
    <div>
      <RequireNoAuth />
      <Header />
      <div className={styles.mainContainer}>
        <SignupForm
          onSubmitSignup={onSubmitSignup}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          passwordConfirmation={password_confirmation}
          setPasswordConfirmation={setPasswordConfirmation}
        />
        <Link to="/login">Already have an account? Sign in</Link>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => (
  {
    signup: signupData => dispatch(signup(signupData)),
  }
);

export default connect(null, mapDispatchToProps)(Signup);
