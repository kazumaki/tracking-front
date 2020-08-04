import React, { useState } from 'react';
import { connect } from 'react-redux';
import MeasurementForm from '../components/MeasurementForm';
import RequireAuth from './RequireAuth';
import { postMeasurement } from '../store/actions/measurementActions';

const AddMeasurement = ({ postMeasurement, token, measurementTypes, setShowAddMeasurement }) => {
  const [measurementType, setMeasurementType] = useState(1);
  const [value, setValue] = useState(1);

  const onSubmitForm = e => {
    e.preventDefault();

    const measurement = {
      measurementType,
      value,
    };
    postMeasurement(measurement, token);

    setShowAddMeasurement(false);
  };

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
  );
};

const mapDispatchToProps = dispatch => (
  {
    postMeasurement: (measurement, token) => dispatch(postMeasurement(measurement, token)),
  }
);

const mapStateToProps = state => (
  {
    token: state.authReducer.token,
    measurementTypes: state.measurementTypeReducer.measurementTypes,
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(AddMeasurement);
