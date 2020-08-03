const { combineReducers } = require('redux');
const { default: authReducer } = require('./authReducer');
const { default: measurementReducer } = require('./measurementReducer');
const { default: measurementTypeReducer } = require('./measurementTypeReducer');
const { default: filterReducer } = require('./filterReducer');

const rootReducer = combineReducers({ authReducer, measurementReducer, measurementTypeReducer, filterReducer });

export default rootReducer;
