const axios = require('axios');
const {
  FETCH_MEASUREMENTS_START,
  FETCH_MEASUREMENTS_SUCCESS,
  FETCH_MEASUREMENTS_FAILURE,
  POST_MEASUREMENT_START,
  POST_MEASUREMENT_SUCCESS,
  POST_MEASUREMENT_FAILURE,
  DELETE_MEASUREMENT_START,
  DELETE_MEASUREMENT_SUCCESS,
  DELETE_MEASUREMENT_FAILURE,
} = require('./actionTypes');
const { default: config } = require('../../lib/config');

const fetchMeasurementsStart = () => ({ type: FETCH_MEASUREMENTS_START });

const fetchMeasurementsSuccess = response => (
  {
    type: FETCH_MEASUREMENTS_SUCCESS,
    response,
  }
);

const fetchMeasurementsFailure = response => (
  {
    type: FETCH_MEASUREMENTS_FAILURE,
    response,
  }
);

const fetchMeasurements = token => (
  dispatch => {
    dispatch(fetchMeasurementsStart());
    axios.get(`${config.API_BASE_URL}/measurements`, {
      headers: {
        Authorization: token,
      },
    })
      .then(response => dispatch(fetchMeasurementsSuccess(response)))
      .catch(error => dispatch(fetchMeasurementsFailure(error.response)));
  }
);

const postMeasurementStart = () => ({ type: POST_MEASUREMENT_START });

const postMeasurementSuccess = response => (
  {
    type: POST_MEASUREMENT_SUCCESS,
    response,
  }
);

const postMeasurementFailure = response => (
  {
    type: POST_MEASUREMENT_FAILURE,
    response,
  }
);

const postMeasurement = (measurement, token) => (
  dispatch => {
    dispatch(postMeasurementStart());
    axios.post(`${config.API_BASE_URL}/measurements`, measurement, {
      headers: {
        Authorization: token,
      },
    })
      .then(response => dispatch(postMeasurementSuccess(response)))
      .catch(error => dispatch(postMeasurementFailure(error.response)));
  }
);

const deleteMeasurementStart = () => ({ type: DELETE_MEASUREMENT_START });

const deleteMeasurementSuccess = (response, measurement) => ({
  type: DELETE_MEASUREMENT_SUCCESS,
  response,
  measurement,
});

const deleteMeasurementFailure = response => ({
  type: DELETE_MEASUREMENT_FAILURE,
  response,
});

const deleteMeasurement = (measurement, token) => (
  dispatch => {
    dispatch(deleteMeasurementStart());
    axios.delete(`${config.API_BASE_URL}/measurements/${measurement.id}`, {
      headers: {
        Authorization: token,
      },
    })
      .then(response => dispatch(deleteMeasurementSuccess(response, measurement)))
      .catch(error => dispatch(deleteMeasurementFailure(error.response)));
  }
);

export { fetchMeasurements, postMeasurement, deleteMeasurement };
