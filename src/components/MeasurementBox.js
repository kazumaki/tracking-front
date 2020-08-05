import React from 'react';
import { withRouter } from 'react-router';
import styles from '../styles/MeasurementBox.module.scss';
import MeasurementData from './MeasurementData';

const MeasurementBox = ({ measurement, measurementType, history }) => {
  const handleOnClick = () => {
    history.push(`/measurements/${measurementType.id}`);
  };

  return (
    <div className={styles.mainBox} onClick={handleOnClick}>
      <img src={require(`../images/measurement_type_${measurementType.id}.png`)} />
      <MeasurementData measurement={measurement} measurementType={measurementType} />
    </div>
  );
};

export default withRouter(MeasurementBox);
