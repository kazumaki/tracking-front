import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Measurements.module.scss';
import MeasurementBox from './MeasurementBox';
import { measurementTypeShape, measurementShape } from '../lib/propTypeShapes';

const Measurements = ({ measurementTypes, measurements, setShowAddMeasurement }) => (
  <div className={styles.mainContainer}>
    {Object.keys(measurementTypes).map(typeId => {
      const measurementType = measurementTypes[typeId];

      return (
        <MeasurementBox
          key={typeId}
          measurement={measurements[typeId]}
          measurementType={measurementType}
          setShowAddMeasurement={setShowAddMeasurement}
        />
      );
    })}
  </div>
);

Measurements.propTypes = {
  measurementTypes: PropTypes.objectOf(measurementTypeShape).isRequired,
  measurements: PropTypes.objectOf(measurementShape).isRequired,
  setShowAddMeasurement: PropTypes.func.isRequired,
};

export default Measurements;
