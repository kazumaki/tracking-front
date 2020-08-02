const { combineReducers } = require('redux');
const { default: authReducer } = require('./authReducer');
const { default: measurementReducer } = require('./measurementReducer');
const { default: measurementTypeReducer } = require('./measurementTypeReducer');

const rootReducer = combineReducers({ authReducer, measurementReducer, measurementTypeReducer });

export default rootReducer;
