import React from 'react';

const DateDisplay = ({setPreviousDate, setNextDate, date}) => {
  return (
    <div>
      <button onClick={() => setPreviousDate()}>Prev</button>
      {date.toDateString()}
      <button onClick={() => setNextDate()}>Next</button>
    </div>
  );
};

export default DateDisplay;
