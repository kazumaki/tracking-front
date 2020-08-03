import React from 'react';

const MeasurementList = ({measurements, measurementTypes}) => {

  return (
    <ul>
      {Object.keys(measurements).map(id => {
        const measurement = measurements[id];
        const measurementType = measurementTypes[measurement.measurement_type_id];
        console.log(measurementType);
        return <li key={id}>{`Type: ${measurementType.name} Value: ${measurement.value}`}</li>
      })}
    </ul>
  )
}

export default MeasurementList;