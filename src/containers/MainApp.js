import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import RequireAuth from './RequireAuth';
import DateSelector from './DateSelector';
import MeasurementsFilter from './MeasurementsFilter';
import { fetchMeasurements } from '../store/actions/measurementActions';
import getMeasurementTypes from '../store/actions/measurementTypeActions';

const MainApp = props => {
  const { measurementTypes, getMeasurementTypes, fetchMeasurements, token } = props;

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
    </div>
  );
};

const mapStateToProps = state => (
  {
    measurementTypes: state.measurementTypeReducer.measurementTypes,
    token: state.authReducer.token,
  }
);

const mapDispatchToProps = dispatch => (
  {
    fetchMeasurements: token => dispatch(fetchMeasurements(token)),
    getMeasurementTypes: token => dispatch(getMeasurementTypes(token)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
