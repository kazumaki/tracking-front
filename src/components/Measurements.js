import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Measurements.module.scss';
import MeasurementBox from './MeasurementBox';

const Measurements = ({ measurementTypes, measurements }) => (
  <div className={styles.mainContainer}>
    {Object.keys(measurementTypes).map(typeId => {
      const measurementType = measurementTypes[typeId];

      return (
        <MeasurementBox
          key={typeId}
          measurement={measurements[typeId]}
          measurementType={measurementType}
        />
      );
    })}
  </div>
);

export default Measurements;
