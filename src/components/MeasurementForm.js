import React, { useState } from 'react';
import styles from '../styles/MeasurementForm.module.scss';

const MeasurementForm = props => {
  const {
    onSubmitForm,
    setMeasurementType,
    setValue,
    value,
    measurementType,
    measurementTypes,
    onClickCloseButton,
  } = props;

  return (
    <div className={styles.outterBox}>
      <div className={styles.innerBox}>
        <form onSubmit={onSubmitForm}>
          <label htmlFor="type">
            <div>Type</div>
            <select id="type" onChange={e => setMeasurementType(e.target.value)} value={measurementType}>
              {
              Object.entries(measurementTypes).map(measurementType => {
                measurementType = measurementType[1];
                return (
                  <option
                    key={measurementType.name}
                    value={measurementType.id}
                  >{measurementType.name}
                  </option>
                );
              })
            }
            </select>
          </label>
          <label htmlFor="value">
            <div>{`Value (${measurementTypes[measurementType].unit})`}</div>
            <input type="number" step="0.1" onChange={e => setValue(e.target.value)} value={value} />
          </label>
          <input type="submit" />
          <button type="button" onClick={onClickCloseButton}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default MeasurementForm;
