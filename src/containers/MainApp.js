import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import RequireAuth from './RequireAuth';
import DateSelector from './DateSelector';
import MeasurementsFilter from './MeasurementsFilter';
import AddMeasurement from './AddMeasurement';
import { fetchMeasurements } from '../store/actions/measurementActions';
import getMeasurementTypes from '../store/actions/measurementTypeActions';
import Header from '../components/Header';
import styles from '../styles/MainApp.module.scss';

const MainApp = props => {
  const { measurementTypes, getMeasurementTypes, fetchMeasurements, token } = props;
  const [showAddMeasurement, setShowAddMeasurement] = useState(false);

  useEffect(() => {
    if ((Object.keys(measurementTypes).length > 0) && token) {
      fetchMeasurements(token);
    }
  }, [fetchMeasurements, measurementTypes, token]);

  useEffect(() => {
    if (token) {
      getMeasurementTypes(token);
    }
  }, [token, getMeasurementTypes]);

  return (
    <div>
      <RequireAuth />
      <Header />
      <div className={styles.mainContainer}>
        { showAddMeasurement && <AddMeasurement setShowAddMeasurement={setShowAddMeasurement} /> }
        <div className={styles.addMeasurementButtonBox}>
          <button type="button" className={styles.addMeasurementButton} onClick={() => setShowAddMeasurement(true)}>Add Measurement</button>
        </div>
        <DateSelector />
        <MeasurementsFilter />
      </div>
    </div>
  );
};

const mapStateToProps = state => (
  {
    measurementTypes: state.measurementTypeReducer.measurementTypes,
    token: state.authReducer.token,
  }
);

const mapDispatchToProps = dispatch => (
  {
    fetchMeasurements: token => dispatch(fetchMeasurements(token)),
    getMeasurementTypes: token => dispatch(getMeasurementTypes(token)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
