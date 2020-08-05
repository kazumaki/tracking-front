import React from 'react';
import styles from '../styles/MeasurementListBox.module.scss';
import { connect } from 'react-redux';
import { deleteMeasurement } from '../store/actions/measurementActions';

const MeasurementListBox = ({measurement, measurementType, nextMeasurement, token, deleteMeasurement}) => {
  let difference = 0;
  if(nextMeasurement) { difference = measurement.value - nextMeasurement.value }

  return (
    <div className={styles.mainBox}>
      <div className={styles.leftColumn}>
        <div className={styles.data}>
          <div className={styles.value}>
            { measurement.value }
          </div>
          <div className={styles.unit}>
            { measurementType.unit }
          </div>
        </div>
        <div className={styles.type}>{measurementType.name}</div>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.data}>
          <div className={styles.value}>
            { difference >= 0 ? `+${difference}` : `${difference}`}
          </div>
          <div className={styles.unit}>
            { measurementType.unit }
          </div>
        </div>
        <div className={styles.closeButton} onClick={() => deleteMeasurement(measurement, token)}><i className="fas fa-lg fa-times"></i></div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => (
  {
    deleteMeasurement: (id, token) => dispatch(deleteMeasurement(id, token)),
  }
);

const mapStateToProps = state => (
  {
    token: state.authReducer.token,
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(MeasurementListBox);