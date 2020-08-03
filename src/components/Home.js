import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RequireAuth from '../containers/RequireAuth';
import { fetchMeasurements, deleteMeasurement } from '../store/actions/measurementActions';
import getMeasurementTypes from '../store/actions/measurementTypeActions';
import AddMeasurement from '../containers/AddMeasurement';
import MeasurementList from '../containers/MeasurementList';
import MeasurementsFilter from '../containers/MeasurementsFilter';
import DateSelector from '../containers/DateSelector';

const Home = ({
  fetchMeasurements, getMeasurementTypes, measurementTypes, measurements, response, lastAction, token, deleteMeasurement,
}) => {
  useEffect(() => {
    if ((Object.keys(measurementTypes).length > 0) && token) {
      fetchMeasurements(token);
    }
  }, [fetchMeasurements, measurementTypes, token]);

  useEffect(() => {
    if (token) {
      getMeasurementTypes(token);
    }
  }, [token, getMeasurementTypes]);
  return (
    <div>
      <RequireAuth />
      <DateSelector />
      <MeasurementsFilter />
      <AddMeasurement />
    </div>
  );
};

const mapDispatchToProps = dispatch => (
  {
    fetchMeasurements: token => dispatch(fetchMeasurements(token)),
    getMeasurementTypes: token => dispatch(getMeasurementTypes(token)),
    deleteMeasurement: (measurement, token) => dispatch(deleteMeasurement(measurement, token)),
  }
);

const mapStateToProps = state => (
  {
    measurements: state.measurementReducer.measurements,
    measurementTypes: state.measurementTypeReducer.measurementTypes,
    response: state.measurementReducer.response,
    lastAction: state.measurementReducer.lastAction,
    token: state.authReducer.token,
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
