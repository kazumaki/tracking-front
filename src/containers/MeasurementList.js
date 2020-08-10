import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MeasurementListDisplay from '../components/MeasurementListDisplay';
import { filterMeasurementByType } from '../lib/measurement';
import Root from '../components/Root';
import { measurementShape, measurementTypeShape } from '../lib/propTypeShapes';

const MeasurementList = props => {
  const { measurements, measurementTypes, measurementTypeId } = props;
  const filteredMeasurements = filterMeasurementByType(measurements, measurementTypeId);
  const measurementType = measurementTypes[measurementTypeId];

  return (
    <Root>
      <MeasurementListDisplay
        measurements={filteredMeasurements}
        measurementType={measurementType}
      />
    </Root>
  );
};

MeasurementList.propTypes = {
  measurements: PropTypes.objectOf(measurementShape).isRequired,
  measurementTypes: PropTypes.objectOf(measurementTypeShape).isRequired,
  measurementTypeId: PropTypes.string.isRequired,
};

const mapStateToProps = state => (
  {
    measurementTypes: state.measurementTypeReducer.measurementTypes,
    measurements: state.measurementReducer.measurements,
  }
);

export default connect(mapStateToProps, null)(MeasurementList);
