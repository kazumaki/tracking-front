import React from 'react';
import MeasurementListBox from '../containers/MeasurementListBox';
import styles from '../styles/MeasurementListDisplay.module.scss';

const MeasurementListDisplay = ({ measurements, measurementType }) => {
  const measurementKeys = Object.keys(measurements).reverse();
  console.log(measurements);
  let currentDate = '';
  return (
    <div className={styles.mainContainer}>
      {measurementKeys.map((key, index) => {
        const currentMeasurement = measurements[key];
        const nextKey = measurementKeys[index + 1];
        const nextMeasurement = measurements[nextKey];
        const renderComponent = (
          <MeasurementListBox
            key={key} measurement={currentMeasurement}
            measurementType={measurementType}
            nextMeasurement={nextMeasurement}
          />
        );

        if (currentDate != currentMeasurement.created_at.toDateString()) {
          currentDate = currentMeasurement.created_at.toDateString();
          return (
            <div>
              <div>{currentDate}</div>
              {renderComponent}
            </div>
          );
        }

        return (
          renderComponent
        );
      })}
    </div>
  );
};

export default MeasurementListDisplay;
