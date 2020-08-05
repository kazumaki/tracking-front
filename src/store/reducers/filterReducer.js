import { SET_DATE_FILTER, SET_PREVIOUS_DATE_FILTER, SET_NEXT_DATE_FILTER } from '../actions/actionTypes';

const defaultState = {
  date: new Date((new Date()).setHours(23, 59, 59, 999)),
};

const filterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_DATE_FILTER:
      return {
        ...state,
        date: action.date,
      };

    case SET_PREVIOUS_DATE_FILTER:
      return {
        ...state,
        date: new Date(state.date.setDate(state.date.getDate() - 1)),
      };

    case SET_NEXT_DATE_FILTER:
      return {
        ...state,
        date: new Date(state.date.setDate(state.date.getDate() + 1)),
      };

    default:
      return state;
  }
};

export default filterReducer;
