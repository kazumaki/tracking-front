import React from 'react';
import PropTypes from 'prop-types';
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

Measurements.propTypes = {
  measurementTypes: PropTypes.objectOf(PropTypes.any).isRequired,
  measurements: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Measurements;
