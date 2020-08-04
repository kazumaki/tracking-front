import React from 'react';
import styles from '../styles/MeasurementData.module.scss';

const MeasurementData = ({ measurement, measurementType }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.dataTitle}>{measurementType.name}</div>
      <div className={styles.dataValue}>
        {(measurement && `${measurement.value} ${measurementType.unit}`) || 'N/A'}
      </div>
    </div>
  );
}

export default MeasurementData;
