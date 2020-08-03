import React, { useState } from 'react';

const MeasurementForm = props => {
  const {
    onSubmitForm, setMeasurementType, setValue, value, measurementType, measurementTypes,
  } = props;
  return (
    <form onSubmit={onSubmitForm}>
      <select onChange={e => setMeasurementType(e.target.value)} value={measurementType}>
        {
        Object.entries(measurementTypes).map(measurementType => {
          measurementType = measurementType[1];
          return <option key={measurementType.name} value={measurementType.id}>{measurementType.name}</option>;
        })
      }
      </select>
      <input type="number" onChange={e => setValue(e.target.value)} value={value} />
      <input type="submit" />
    </form>
  );
};

export default MeasurementForm;
