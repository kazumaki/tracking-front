import React from 'react';
import MeasurementForm from '../components/MeasurementForm';
import RequireAuth from './RequireAuth';

const EditMeasurement = (props) => {
  

  return (
    <div>
      <RequireAuth />
      <MeasurementForm />
    </div>
  )
}