import React from 'react';

const MeasurementListDisplay = ({measurements, measurementType}) => {
  console.log(measurements);
  return (
    <div>
      {measurementType && measurementType.name}
      {Object.keys(measurements).reverse().map(date => {
        return (
          <ul key={date}>
            <h1>{date}</h1>
            {measurements[date].reverse().map(measurement => {
              return (
                <li key={measurement.id}>{`${measurement.value} ${measurementType.unit}`}</li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
};

export default MeasurementListDisplay;