const { combineReducers } = require('redux');
const { default: authReducer } = require('./authReducer');
const { default: measurementReducer } = require('./measurementReducer');

const rootReducer = combineReducers({ authReducer, measurementReducer });

export default rootReducer;
