import React from 'react';
import styles from '../styles/MeasurementData.module.scss';

const MeasurementData = ({ measurement, measurementType }) => (
  <div className={styles.mainContainer}>
    <div className={styles.dataTitle}>{measurementType.name}</div>
    <div className={styles.dataBox}>
      <div className={styles.dataValue}>
        {measurement && measurement.value}
      </div>
      <div className={styles.dataUnit}>
        {measurementType.unit}
      </div>
    </div>
  </div>
);

export default MeasurementData;
