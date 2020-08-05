import { SET_DATE_FILTER, SET_NEXT_DATE_FILTER, SET_PREVIOUS_DATE_FILTER } from './actionTypes';

const setDateFilter = date => ({ type: SET_DATE_FILTER, date });

const setNextDate = () => ({ type: SET_NEXT_DATE_FILTER });
const setPreviousDate = () => ({ type: SET_PREVIOUS_DATE_FILTER });

export { setDateFilter, setNextDate, setPreviousDate };
