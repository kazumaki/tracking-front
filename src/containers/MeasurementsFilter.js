import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Measurements from '../components/Measurements';
import { filterMeasurementByDate } from '../lib/measurement';

const MeasurementsFilter = ({ measurements, dateFilter, measurementTypes }) => {
  const filteredMeasurements = filterMeasurementByDate(measurements, dateFilter);
  return (
    <Measurements measurements={filteredMeasurements} measurementTypes={measurementTypes} />
  );
};

MeasurementsFilter.propTypes = {
  measurements: PropTypes.objectOf(PropTypes.any).isRequired,
  dateFilter: PropTypes.instanceOf(Date).isRequired,
  measurementTypes: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = state => ({
  measurements: state.measurementReducer.measurements,
  measurementTypes: state.measurementTypeReducer.measurementTypes,
  dateFilter: state.filterReducer.date,
});

export default connect(mapStateToProps, null)(MeasurementsFilter);
