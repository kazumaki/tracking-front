import React from 'react';
import styles from '../styles/MeasurementBox.module.scss';
import MeasurementData from './MeasurementData';

const MeasurementBox = ({ measurement, measurementType }) => {

  return (
    <div className={styles.mainBox}>
      <img src={require(`../images/measurement_type_${measurementType.id}.png`)} />
      <MeasurementData measurement={measurement} measurementType={measurementType} />
    </div>
  );
};

export default MeasurementBox;