const axios = require('axios');
const { FETCH_MEASUREMENTS_START, FETCH_MEASUREMENTS_SUCCESS, FETCH_MEASUREMENTS_FAILURE } = require('./actionTypes');
const { default: config } = require('../../lib/config');

const fetchMeasurements = (token) => (
  dispatch => {
    dispatch(fetchMeasurementsStart());
    axios.get(`${config.API_BASE_URL}/measurements`, {
      headers: {
        'Authorization': token,
      }
    })
    .then(response => dispatch(fetchMeasurementsSuccess(response)))
    .catch(error => dispatch(fetchMeasurementsFailure(error.response)))
  }
)

const fetchMeasurementsStart = () => ({ type: FETCH_MEASUREMENTS_START })

const fetchMeasurementsSuccess = response => (
  {
    type: FETCH_MEASUREMENTS_SUCCESS,
    response
  }
)

const fetchMeasurementsFailure = response => (
  {
    type: FETCH_MEASUREMENTS_FAILURE,
    response
  }
)

export { fetchMeasurements }