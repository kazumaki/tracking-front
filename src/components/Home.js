import React, { useEffect } from 'react';
import RequireAuth from '../containers/RequireAuth';
import { fetchMeasurements } from '../store/actions/measurementActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getMeasurementTypes from '../store/actions/measurementTypeActions';

const Home = ({fetchMeasurements, getMeasurementTypes, measurementTypes, measurements, response, lastAction, token}) => {
  useEffect(() => {
    if (token) { 
      fetchMeasurements(token);
      getMeasurementTypes(token);
    }
  }, [token, fetchMeasurements, getMeasurementTypes])
  console.log(measurementTypes);
  return (
    <div>
      <RequireAuth />
      hehe
      <Link to='/add-measurement'> Add Measurement </Link>
    </div>
  )

};

const mapDispatchToProps = (dispatch) => (
  {
    fetchMeasurements: (token) => dispatch(fetchMeasurements(token)),
    getMeasurementTypes: (token) => dispatch(getMeasurementTypes(token)),
  }
)

const mapStateToProps = (state) => (
  {
    measurements: state.measurementReducer.measurements,
    measurementTypes: state.measurementTypeReducer.measurementTypes,
    response: state.measurementReducer.response,
    lastAction: state.measurementReducer.lastAction,
    token: state.authReducer.token,
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Home);
