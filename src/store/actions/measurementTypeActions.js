const axios = require('axios');
const { default: config } = require('../../lib/config');

const { GET_MEASUREMENT_TYPES_START, GET_MEASUREMENT_TYPES_SUCCESS, GET_MEASUREMENT_TYPES_FAILURE } = require("./actionTypes")

const getMeasurementTypes = (token) => (
  dispatch => {
    dispatch(getMeasurementTypesStart());
    axios.get(`${config.API_BASE_URL}/measurement_types`, {
      headers: {
        'Authorization': token,
      }
    })
    .then(response => dispatch(getMeasurementTypesSuccess(response)))
    .catch(error => dispatch(getMeasurementTypesFailure(error.response)))
  }
)

const getMeasurementTypesStart = () => (
  {
    type: GET_MEASUREMENT_TYPES_START,
  }
)

const getMeasurementTypesSuccess = response => (
  {
    type: GET_MEASUREMENT_TYPES_SUCCESS,
    response
  }
)

const getMeasurementTypesFailure = response => (
  {
    type: GET_MEASUREMENT_TYPES_FAILURE,
    response
  }
)

export default getMeasurementTypes;