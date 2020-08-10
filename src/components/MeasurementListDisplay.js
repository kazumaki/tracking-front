import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import MeasurementListBox from '../containers/MeasurementListBox';
import styles from '../styles/MeasurementListDisplay.module.scss';
import { measurementTypeShape } from '../lib/propTypeShapes';

const MeasurementListDisplay = ({ measurements, measurementType, history }) => {
  const measurementKeys = Object.keys(measurements).reverse();

  const onClickBackButton = () => {
    history.push('/');
  };

  let currentDate = '';
  return (
    <div className={styles.mainContainer}>
      <button className={styles.backButton} type="button" onClick={onClickBackButton}><i aria-label="Previous day" className="fas fa-lg fa-chevron-left" /></button>
      {measurementKeys.map((key, index) => {
        const currentMeasurement = measurements[key];
        const nextKey = measurementKeys[index + 1];
        const nextMeasurement = measurements[nextKey];
        const renderComponent = (
          <MeasurementListBox
            key={key}
            measurement={currentMeasurement}
            measurementType={measurementType}
            nextMeasurement={nextMeasurement}
          />
        );

        if (currentDate !== currentMeasurement.created_at.toDateString()) {
          currentDate = currentMeasurement.created_at.toDateString();
          return (
            <div key={key}>
              <time className={styles.date}>{currentDate}</time>
              {renderComponent}
            </div>
          );
        }

        return (
          renderComponent
        );
      })}
    </div>
  );
};

MeasurementListDisplay.propTypes = {
  measurements: PropTypes.objectOf(PropTypes.any).isRequired,
  measurementType: measurementTypeShape.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(MeasurementListDisplay);
