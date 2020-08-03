import React from 'react';

const MeasurementList = ({
  measurements, measurementTypes, deleteMeasurement, token,
}) => (
  <ul>
    {Object.keys(measurements).map(id => {
      const measurement = measurements[id];
      const measurementType = measurementTypes[measurement.measurement_type_id];
      return (
        <li key={id}>
          {`Type: ${measurementType.name} Value: ${measurement.value}`}
          <button type="button" onClick={() => deleteMeasurement(measurement, token)}>Delete</button>
        </li>
      );
    })}
  </ul>
);

export default MeasurementList;
