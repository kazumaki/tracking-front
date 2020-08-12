import {
  LOGIN_SUCESS, LOGIN_FAILURE, LOGIN_START, SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAILURE, SET_TOKEN,
} from '../actions/actionTypes';

const defaultState = {
  token: '',
  response: { data: { } },
  isLoading: false,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return { ...state, isLoading: true };

    case LOGIN_SUCESS:
      return {
        ...state,
        token: action.response.data.auth_token,
        response: action.response,
        isLoading: false,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        token: '',
        response: action.response,
        isLoading: false,
      };

    case SIGNUP_START:
      return { ...state, isLoading: true };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        token: action.response.data.auth_token,
        response: action.response,
        isLoading: false,
      };

    case SIGNUP_FAILURE:
      return {
        ...state,
        token: null,
        response: action.response,
        isLoading: false,
      };

    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
};

export default authReducer;
