import React, { useState } from 'react';
import styles from '../styles/MainPage.module.scss';
import Root from '../components/Root';
import AddMeasurement from './AddMeasurement';
import DateSelector from './DateSelector';
import MeasurementsFilter from './MeasurementsFilter';

const MainPage = () => {
  const [showAddMeasurement, setShowAddMeasurement] = useState(false);

  return (
    <Root>
      <div className={styles.mainContainer}>
        { showAddMeasurement && <AddMeasurement setShowAddMeasurement={setShowAddMeasurement} /> }
        <div className={styles.upperBox}>
          <div className={styles.addMeasurementButtonBox}>
            <button type="button" className={styles.addMeasurementButton} onClick={() => setShowAddMeasurement(true)}>Add Measurement</button>
          </div>
          <DateSelector />
        </div>
        <MeasurementsFilter />
      </div>
    </Root>
  );
};

export default MainPage;
