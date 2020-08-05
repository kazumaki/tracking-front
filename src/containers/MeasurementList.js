import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import MeasurementListDisplay from '../components/MeasurementListDisplay';
import { filterMeasurementByType } from '../lib/measurement';
import RequireAuth from './RequireAuth';
import Root from '../components/Root';

const MeasurementList = props => {
  const { measurements, measurementTypes } = props;
  const { match: { params } } = props;

  const filteredMeasurements = filterMeasurementByType(measurements, params.measurementTypeId);
  const measurementType = measurementTypes[params.measurementTypeId];

  return (
    <Root>
      <MeasurementListDisplay
        measurements={filteredMeasurements}
        measurementType={measurementType}
      />
    </Root>
  );
};

const mapStateToProps = state => (
  {
    measurementTypes: state.measurementTypeReducer.measurementTypes,
    measurements: state.measurementReducer.measurements,
  }
);

export default connect(mapStateToProps, null)(MeasurementList);
