import React, { useState } from 'react';
import MeasurementForm from '../components/MeasurementForm';
import RequireAuth from './RequireAuth';
import { postMeasurement } from '../store/actions/measurementActions';
import { connect } from 'react-redux';

const AddMeasurement = ({postMeasurement, token, measurements}) => {
  const [measurementType, setMeasurementType] = useState('');
  const [value, setValue] = useState(0);
  console.log(measurements);
  const onSubmitForm = (e) => {
    e.preventDefault();

    const measurement = {
      measurementType,
      value,
    }
    postMeasurement(measurement, token);
  }

  return (
    <div>
      <RequireAuth />
      <MeasurementForm setMeasurementType={setMeasurementType} setValue={setValue} onSubmitForm={onSubmitForm} />
    </div>
  )
}

const mapDispatchToProps = dispatch => (
  {
    postMeasurement: (measurement, token) => dispatch(postMeasurement(measurement, token)),
  }
)

const mapStateToProps = state => (
  {
    token: state.authReducer.token,
    measurements: state.measurementReducer.measurements,
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(AddMeasurement);