import React, { useEffect } from 'react';
import RequireAuth from '../containers/RequireAuth';
import { fetchMeasurements } from '../store/actions/measurementActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = ({fetchMeasurements, measurements, response, lastAction, token}) => {
  useEffect(() => {
    if (token) { fetchMeasurements(token) };
  }, [token, fetchMeasurements])

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
  }
)

const mapStateToProps = (state) => (
  {
    measurements: state.measurementReducer.measurements,
    response: state.measurementReducer.response,
    lastAction: state.measurementReducer.lastAction,
    token: state.authReducer.token,
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Home);
