import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import MeasurementListDisplay from '../components/MeasurementListDisplay';
import { groupMeasurementsByDate, filterMeasurementByType } from '../lib/measurement';
import RequireAuth from './RequireAuth';
import Root from '../components/Root';

const MeasurementList = props => {
  const { measurements, measurementTypes } = props;
  const { match: { params } } = props;
  const [goBack, setGoBack] = useState(false);

  const filteredMeasurements = filterMeasurementByType(measurements, params.measurementTypeId);
  const groupedMeasurements = groupMeasurementsByDate(filteredMeasurements);
  const measurementType = measurementTypes[params.measurementTypeId];

  return (
    <Root>
      { goBack && <Redirect to="/" /> }
      <button type="button" onClick={() => setGoBack(true)}> Backzada </button>
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
