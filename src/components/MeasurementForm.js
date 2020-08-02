import React, {useState} from 'react'

const MeasurementForm = ({onSubmitForm, setMeasurementType, setValue, measurementTypes}) => {
  return (
    <form onSubmit={onSubmitForm}>
      <select onChange={setMeasurementType}>
      {
        Object.entries(measurementTypes).map(measurementType => 
          {
            measurementType = measurementType[1];
            return <option key={measurementType.name} value={measurementType.id}>{measurementType.name}</option>
          }
        )
      }
      </select>
      <input type='number' onChange={(e) => setValue(e.target.value)} />
      <input type='submit' />
    </form>
  )
}

export default MeasurementForm;