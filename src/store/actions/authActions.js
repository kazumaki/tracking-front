import { LOGIN_SUCESS, LOGIN_FAILURE, LOGIN_START } from './actionTypes';

const axios = require('axios');
const { default: config } = require('../../lib/config');

const login = (loginData) => (
  (dispatch) => {
    dispatch(loginStart());
    axios.post(`${config.API_BASE_URL}/auth/login`, loginData)
    .then(response => dispatch(loginSuccess(response)))
    .catch(error => dispatch(loginFailure(error.response)))
  }
)

const loginStart = () => (
  {
    type: LOGIN_START,
  }
)

const loginSuccess = (response) => (
  {
    type: LOGIN_SUCESS,
    response
  }
)

const loginFailure = (response) => {
  return ({
    type: LOGIN_FAILURE,
    response
  })
}

export { login }