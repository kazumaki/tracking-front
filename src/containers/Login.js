import React, {useState} from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../store/actions/authActions';
import RequireNoAuth from './RequireNoAuth';
import LoginForm from '../components/LoginForm';

const Login = ({login, token, response}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitLogin = (event) => {
    event.preventDefault();
    const loginData = {email, password}
    login(loginData);
  }

  return (
    <div>
      <RequireNoAuth />
      <LoginForm onSubmitLogin={onSubmitLogin} setEmail={setEmail} setPassword={setPassword} />
      { (!token && response) && response.data.message }
    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  login: (loginData) => dispatch(login(loginData))
})

const mapStateToProps = (state) => ({
  token: state.authReducer.token,
  response: state.authReducer.response,
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
