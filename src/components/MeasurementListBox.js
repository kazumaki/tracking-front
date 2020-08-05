import React from 'react';
import styles from '../styles/MeasurementListBox.module.scss';

const MeasurementListBox = ({measurement, measurementType, nextMeasurement}) => {
  let difference = 0;
  
  if(nextMeasurement) { difference = measurement.value - nextMeasurement.value }

  return (
    <div className={styles.mainBox}>
      <div className={styles.leftColumn}>
        <div>{measurement.value}</div>
        <div>{measurementType.name}</div>
      </div>
      <div className={styles.rightColumn}>
        <div>{ difference >= 0 ? `+${difference}` : `${difference}`}</div>
        <div>delete</div>
      </div>
    </div>
  )
}

export default MeasurementListBox;