import React, {useState} from 'react'

const MeasurementForm = ({onSubmitForm, setMeasurementType, setValue}) => {
  return (
    <form onSubmit={onSubmitForm}>
      <select onChange={(e) => setMeasurementType(e.target.value)} >
        <option value='1'>Left Bicep</option>
        <option value='2'>Right Bicep</option>
        <option value='3'>Third leg</option>
      </select>

      <input type='number' onChange={(e) => setValue(e.target.value)} />
      <input type='submit' />
    </form>
  )
}

export default MeasurementForm;