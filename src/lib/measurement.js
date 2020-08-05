const groupMeasurementsByType = measurements => (
  Object.keys(measurements).reduce((obj, measurementID) => {
    const measurement = measurements[measurementID];
    const measurementType = measurement.measurement_type_id;
    /* eslint-disable no-param-reassign */
    if (!obj[measurementType]) {
      obj[measurementType] = [];
    }
    /* eslint-enable no-param-reassign */
    obj[measurementType].push(measurement);

    return obj;
  }, {})
);

const groupMeasurementsByDate = measurements => (
  Object.keys(measurements).reduce((obj, measurementID) => {
    const measurement = measurements[measurementID];
    const date = measurement.created_at.toDateString();
    /* eslint-disable no-param-reassign */
    if (!obj[date]) {
      obj[date] = [];
    }
    /* eslint-enable no-param-reassign */
    obj[date].push(measurement);
    return obj;
  }, {})
);

const filterMeasurementByDate = (measurements, date) => {
  const groupedMeasurements = groupMeasurementsByType(measurements);
  return Object.keys(groupedMeasurements).reduce((obj, typeId) => {
    const filteredMeasurements = groupedMeasurements[typeId].filter(measurement => measurement.created_at <= date);
    /* eslint-disable no-param-reassign */
    obj[typeId] = filteredMeasurements.slice(-1).pop();
    /* eslint-enable no-param-reassign */
    return obj;
  }, {});
};

const filterMeasurementByType = (measurements, measurementType) => (
  Object.keys(measurements).reduce((obj, measurementID) => {
    const measurement = measurements[measurementID];
    if (measurement.measurement_type_id === Number(measurementType)) {
      /* eslint-disable no-param-reassign */
      obj[measurementID] = measurement;
      /* eslint-enable no-param-reassign */
    }

    return obj;
  }, {})
);

export {
  filterMeasurementByDate, filterMeasurementByType, groupMeasurementsByType, groupMeasurementsByDate,
};
