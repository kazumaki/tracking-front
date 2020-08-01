import {
  LOGIN_SUCESS, LOGIN_FAILURE, LOGIN_START, SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAILURE,
} from './actionTypes';

const axios = require('axios');
const { default: config } = require('../../lib/config');

const login = loginData => (
  dispatch => {
    dispatch(loginStart());
    axios.post(`${config.API_BASE_URL}/auth/login`, loginData)
      .then(response => dispatch(loginSuccess(response)))
      .catch(error => dispatch(loginFailure(error.response)));
  }
);

const signup = signupData => (
  dispatch => {
    dispatch(signupStart());
    axios.post(`${config.API_BASE_URL}/signup`, signupData)
      .then(response => dispatch(signupSuccess(response)))
      .catch(error => dispatch(signupFailure(error.response)));
  }
);

const loginStart = () => (
  {
    type: LOGIN_START,
  }
);

const loginSuccess = response => (
  {
    type: LOGIN_SUCESS,
    response,
  }
);

const loginFailure = response => ({
  type: LOGIN_FAILURE,
  response,
});

const signupStart = () => (
  {
    type: SIGNUP_START,
  }
);

const signupSuccess = response => (
  {
    type: SIGNUP_SUCCESS,
    response,
  }
);

const signupFailure = response => (
  {
    type: SIGNUP_FAILURE,
    response,
  }
);

export { login, signup };
