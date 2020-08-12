import React from 'react';
import styles from '../styles/MeasurementData.module.scss';
import { measurementShape, measurementTypeShape } from '../lib/propTypeShapes';

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

MeasurementData.defaultProps = {
  measurement: null,
};

MeasurementData.propTypes = {
  measurement: measurementShape,
  measurementType: measurementTypeShape.isRequired,
};

export default MeasurementData;
