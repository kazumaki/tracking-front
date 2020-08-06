import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MeasurementListDisplay from '../components/MeasurementListDisplay';
import { filterMeasurementByType } from '../lib/measurement';
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

MeasurementList.propTypes = {
  measurements: PropTypes.objectOf(PropTypes.any).isRequired,
  measurementTypes: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      measurementTypeId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = state => (
  {
    measurementTypes: state.measurementTypeReducer.measurementTypes,
    measurements: state.measurementReducer.measurements,
  }
);

export default connect(mapStateToProps, null)(MeasurementList);
