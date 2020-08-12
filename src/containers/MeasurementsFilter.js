import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Measurements from '../components/Measurements';
import { filterMeasurementByDate } from '../lib/measurement';
import { measurementTypeShape, measurementShape } from '../lib/propTypeShapes';

const MeasurementsFilter = ({
  measurements, dateFilter, measurementTypes, setShowAddMeasurement,
}) => {
  const filteredMeasurements = filterMeasurementByDate(measurements, dateFilter);
  return (
    <Measurements
      setShowAddMeasurement={setShowAddMeasurement}
      measurements={filteredMeasurements}
      measurementTypes={measurementTypes}
    />
  );
};

MeasurementsFilter.propTypes = {
  measurements: PropTypes.objectOf(measurementShape).isRequired,
  dateFilter: PropTypes.instanceOf(Date).isRequired,
  measurementTypes: PropTypes.objectOf(measurementTypeShape).isRequired,
  setShowAddMeasurement: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  measurements: state.measurementReducer.measurements,
  measurementTypes: state.measurementTypeReducer.measurementTypes,
  dateFilter: state.filterReducer.date,
});

export default connect(mapStateToProps, null)(MeasurementsFilter);
