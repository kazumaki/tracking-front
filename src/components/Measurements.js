import React from 'react';
import { Link } from 'react-router-dom';

const Measurements = ({measurementTypes, measurements}) => {
  return (
    <div>
      {Object.keys(measurementTypes).map(typeId => {
        const measurementType = measurementTypes[typeId];

        return (
          <div key={typeId}>
            <div>
              <Link to={`/measurements/${typeId}`}>
                {measurementType.name}
              </Link>
            </div>
            <div>{(measurements[typeId] && `${measurements[typeId].value} ${measurementType.unit}`) || 'N/A'}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Measurements;