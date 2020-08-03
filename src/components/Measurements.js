import React from 'react';

const Measurements = ({measurementTypes, measurements}) => {
  return (
    <div>
      {Object.keys(measurementTypes).map(typeId => {
        const measurementType = measurementTypes[typeId];

        return (
          <div key={typeId}>
            <div>{measurementType.name}</div>
            <div>{(measurements[typeId] && `${measurements[typeId].value} ${measurementType.unit}`) || 'N/A'}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Measurements;