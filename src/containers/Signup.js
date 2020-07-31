import React, {useState} from 'react'
import { signup } from '../store/actions/authActions';
import { connect } from 'react-redux';
import SignupForm from '../components/SignupForm';
import RequireNoAuth from './RequireNoAuth';

const Signup = ({signup}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');

  const onSubmitSignup = (e) => {
    e.preventDefault();

    const signupData = {
      name,
      email,
      password,
      password_confirmation,
    }

    signup(signupData);
  }

  return (
    <div>
      <RequireNoAuth />
      <SignupForm
        onSubmitSignup={onSubmitSignup}
        setName={setName} setEmail={setEmail}
        setPassword={setPassword}
        setPasswordConfirmation={setPasswordConfirmation}
      />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => (
  {
    signup: (signupData) => dispatch(signup(signupData))
  }
)

export default connect(null, mapDispatchToProps)(Signup);