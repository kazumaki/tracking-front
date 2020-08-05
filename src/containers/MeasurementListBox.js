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
        <div>{measurement.value}</div>
        <div>{measurementType.name}</div>
      </div>
      <div className={styles.rightColumn}>
        <div>{ difference >= 0 ? `+${difference}` : `${difference}`}</div>
        <div onClick={() => deleteMeasurement(measurement, token)}>delete</div>
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