import React from 'react';
import PropTypes from 'prop-types';
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
                const [key, currentMeasurementType] = measurementType;
                return (
                  <option
                    key={key}
                    value={currentMeasurementType.id}
                  >
                    {currentMeasurementType.name}
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
          <input type="submit" value="Add" />
          <button type="button" onClick={onClickCloseButton}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

MeasurementForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  setMeasurementType: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  measurementType: PropTypes.number.isRequired,
  measurementTypes: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
  onClickCloseButton: PropTypes.func.isRequired,
};

export default MeasurementForm;
