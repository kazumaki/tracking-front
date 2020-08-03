import React from 'react';
import { connect } from 'react-redux';

const MeasurementList = ({ measurements, measurementTypes }) => {
  return (
    <ul>
      {
        console.log(measurementTypes)}{
        Object.keys(measurements).map(id => {
          const measurementType = measurementTypes[id];
          return <li key={id}>{`type: ${measurementType.name} last measure: ${measurements[id].slice(-1).pop().value}`}</li>;
        })
      }
    </ul>
  )
};

const groupMeasurements = measurements => (
  Object.keys(measurements).reduce((obj, measurementID) => {
    const measurement = measurements[measurementID];
    const measurementType = measurement.measurement_type_id;
    /* eslint-disable no-param-reassign */
    if (!obj[measurementType]) {
      obj[measurementType] = [];
    }
    /* eslint-enable no-param-reassign */
    obj[measurementType].push(measurement);

    return obj;
  }, {})
);

const mapStateToProps = state => (
  {
    measurements: groupMeasurements(state.measurementReducer.measurements),
    measurementTypes: state.measurementTypeReducer.measurementTypes,
  }
);



export default connect(mapStateToProps, null)(MeasurementList);
