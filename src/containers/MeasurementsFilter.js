import React from 'react';
import { connect } from 'react-redux';
import Measurements from '../components/Measurements';
import { filterMeasurementByDate } from '../lib/measurement';

const MeasurementsFilter = ({measurements, dateFilter, measurementTypes}) => {
  const filteredMeasurements = filterMeasurementByDate(measurements, dateFilter);
  return (
    <Measurements measurements={filteredMeasurements} measurementTypes={measurementTypes} />
  )
};

const mapStateToProps = state => ({
  measurements: state.measurementReducer.measurements,
  measurementTypes: state.measurementTypeReducer.measurementTypes,
  dateFilter: state.filterReducer.date,
});

export default connect(mapStateToProps, null)(MeasurementsFilter);