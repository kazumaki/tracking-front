import { FETCH_MEASUREMENTS_START, FETCH_MEASUREMENTS_SUCCESS, FETCH_MEASUREMENTS_FAILURE } from "../actions/actionTypes";

const defaultState = {
  measurements: [],
  response: {},
  lastAction: '',
  isLoading: false,
  isLoaded: false,
} 

const measurementReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_MEASUREMENTS_START:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        lastAction: action.type,
      }

    case FETCH_MEASUREMENTS_SUCCESS:
      return {
        ...state,
        measurements: [...action.response.data],
        response: action.response,
        isLoading: false,
        isLoaded: true,
        lastAction: action.type,
      }
    
    case FETCH_MEASUREMENTS_FAILURE:
      return {
        ...state,
        measurements: [],
        response: action.response,
        isLoading: false,
        isLoaded: false,
        lastAction: action.type,
      }

    default:
      return state;
  }
};

export default measurementReducer;
