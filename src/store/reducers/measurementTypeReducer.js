import { GET_MEASUREMENT_TYPES_START, GET_MEASUREMENT_TYPES_SUCCESS, GET_MEASUREMENT_TYPES_FAILURE } from '../actions/actionTypes';

const defaultState = {
  isLoading: false,
  lastAction: '',
  measurementTypes: {},
  response: [],
};

const measurementTypeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_MEASUREMENT_TYPES_START:
      return {
        ...state,
        isLoading: true,
        lastAction: action.type,
      };

    case GET_MEASUREMENT_TYPES_SUCCESS: {
      const receivedMeasurementTypes = action.response.data.reduce((obj, measurementType) => {
        /* eslint-disable no-param-reassign */
        obj[measurementType.id] = measurementType;
        /* eslint-enable no-param-reassign */
        return obj;
      }, {});

      return {
        ...state,
        isLoading: false,
        lastAction: action.type,
        response: action.response,
        measurementTypes: {
          ...state.measurementTypes,
          ...receivedMeasurementTypes,
        },
      };
    }

    case GET_MEASUREMENT_TYPES_FAILURE:
      return {
        ...state,
        isLoading: false,
        lastAction: action.type,
        response: action.response,
      };

    default:
      return state;
  }
};

export default measurementTypeReducer;
