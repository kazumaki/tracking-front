import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styles from '../styles/MeasurementBox.module.scss';
import MeasurementData from './MeasurementData';
import { measurementShape, measurementTypeShape } from '../lib/propTypeShapes';

const icon1 = require('../images/measurement_type_1.png');
const icon2 = require('../images/measurement_type_2.png');
const icon3 = require('../images/measurement_type_3.png');
const icon4 = require('../images/measurement_type_4.png');
const icon5 = require('../images/measurement_type_5.png');
const icon6 = require('../images/measurement_type_6.png');
const icon7 = require('../images/measurement_type_7.png');

const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7];

const MeasurementBox = ({
  measurement, measurementType, history, setShowAddMeasurement,
}) => {
  const handleOnClick = () => {
    if (measurement) { history.push(`/measurements/${measurementType.id}`); }
    setShowAddMeasurement(true);
  };

  return (
    <div role="button" tabIndex={0} className={styles.mainBox} onClick={handleOnClick} onKeyDown={handleOnClick}>
      <img src={icons[measurementType.id - 1]} alt="Body part" />
      <MeasurementData measurement={measurement} measurementType={measurementType} />
    </div>
  );
};

MeasurementBox.defaultProps = {
  measurement: null,
};

MeasurementBox.propTypes = {
  measurement: measurementShape,
  measurementType: measurementTypeShape.isRequired,
  setShowAddMeasurement: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(MeasurementBox);
