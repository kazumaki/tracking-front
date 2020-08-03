import {
  FETCH_MEASUREMENTS_START, FETCH_MEASUREMENTS_SUCCESS, FETCH_MEASUREMENTS_FAILURE, POST_MEASUREMENT_SUCCESS, POST_MEASUREMENT_START, POST_MEASUREMENT_FAILURE, DELETE_MEASUREMENT_START, DELETE_MEASUREMENT_SUCCESS,
} from '../actions/actionTypes';

const defaultState = {
  measurements: {},
  response: {},
  lastAction: '',
  isLoading: false,
  isLoaded: false,
};

const measurementReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_MEASUREMENTS_START:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        lastAction: action.type,
      };

    case FETCH_MEASUREMENTS_SUCCESS: {
      /* eslint-disable no-param-reassign */
      const measurements = action.response.data.reduce((obj, measurement) => {
        obj[measurement.id] = measurement;
        return obj;
      }, {});
      /* eslint-enable no-param-reassign */
      return {
        ...state,
        measurements,
        response: action.response,
        isLoading: false,
        isLoaded: true,
        lastAction: action.type,
      };
    }

    case FETCH_MEASUREMENTS_FAILURE:
      return {
        ...state,
        measurements: {},
        response: action.response,
        isLoading: false,
        isLoaded: false,
        lastAction: action.type,
      };

    case POST_MEASUREMENT_START:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        lastAction: action.type,
      };

    case POST_MEASUREMENT_SUCCESS: {
      const measurement = action.response.data;
      const { id } = measurement;
      return {
        ...state,
        isLoading: true,
        lastAction: action.type,
        response: action.response,
        measurements: {
          ...state.measurements,
          [id]: measurement,
        },
      };
    }

    case POST_MEASUREMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        response: action.response,
        lastAction: action.type,
      };

    case DELETE_MEASUREMENT_START:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        lastAction: action.type,
      };

    case DELETE_MEASUREMENT_SUCCESS: {
      const newMeasurements = { ...state.measurements };
      delete newMeasurements[action.measurement.id];

      return {
        ...state,
        isLoading: false,
        response: action.response,
        lastAction: action.type,
        measurements: newMeasurements,
      };
    }

    default:
      return state;
  }
};

export default measurementReducer;
