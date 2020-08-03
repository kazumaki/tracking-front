import React, { useState } from 'react';
import MeasurementForm from '../components/MeasurementForm';
import RequireAuth from './RequireAuth';
import { postMeasurement } from '../store/actions/measurementActions';
import { connect } from 'react-redux';

const AddMeasurement = ({postMeasurement, token, measurementTypes}) => {
  const [measurementType, setMeasurementType] = useState(1);
  const [value, setValue] = useState(1);

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
      <MeasurementForm 
        setMeasurementType={setMeasurementType}
        value={value}
        setValue={setValue}
        measurementType={measurementType}
        onSubmitForm={onSubmitForm}
        measurementTypes={measurementTypes}
      />
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
    measurementTypes: state.measurementTypeReducer.measurementTypes,
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(AddMeasurement);