import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MeasurementForm from '../components/MeasurementForm';
import RequireAuth from './RequireAuth';
import { postMeasurement } from '../store/actions/measurementActions';
import { measurementTypeShape } from '../lib/propTypeShapes';

const AddMeasurement = ({
  postMeasurement, token, measurementTypes, setShowAddMeasurement,
}) => {
  const [measurementType, setMeasurementType] = useState(1);
  const [value, setValue] = useState(0);

  const onSubmitForm = e => {
    e.preventDefault();

    const measurement = {
      measurementType,
      value,
    };
    postMeasurement(measurement, token);

    setShowAddMeasurement(false);
  };

  const onClickCloseButton = () => {
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
        onClickCloseButton={onClickCloseButton}
      />
    </div>
  );
};

AddMeasurement.propTypes = {
  token: PropTypes.string.isRequired,
  measurementTypes: PropTypes.objectOf(measurementTypeShape).isRequired,
  setShowAddMeasurement: PropTypes.func.isRequired,
  postMeasurement: PropTypes.func.isRequired,
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
