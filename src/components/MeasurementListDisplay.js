import React from 'react';
import MeasurementListBox from './MeasurementListBox';

const MeasurementListDisplay = ({ measurements, measurementType }) => {
  const measurementKeys = Object.keys(measurements).reverse();
  console.log(measurementKeys, measurements);
  return (
    <div>
      {measurementKeys.map((key, index) => {
        const currentMeasurement = measurements[key];
        const nextKey = measurementKeys[index + 1];
        const nextMeasurement = measurements[nextKey];
        return (
          <MeasurementListBox measurement={currentMeasurement} measurementType={measurementType} nextMeasurement={nextMeasurement} />
        )
      })}
    </div>
  );
};

export default MeasurementListDisplay;
