import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMeasurements } from '../store/actions/measurementActions';
import getMeasurementTypes from '../store/actions/measurementTypeActions';
import Root from '../components/Root';
import MainPage from './MainPage';
import MeasurementList from './MeasurementList';

const MainApp = props => {
  const {
    measurementTypes, getMeasurementTypes, fetchMeasurements, token,
  } = props;
  console.log(props);
  const { match: { path } } = props;
  const { match: { params } } = props;

  useEffect(() => {
    if ((Object.keys(measurementTypes).length > 0) && token) {
      fetchMeasurements(token);
    }
  }, [fetchMeasurements, measurementTypes, token]);

  useEffect(() => {
    if (token) {
      getMeasurementTypes(token);
    }
  }, [token, getMeasurementTypes]);
  return (
    <Root>
      {path === '/' && <MainPage />}
      {path.includes('/measurements') && <MeasurementList measurementTypeId={params.measurementTypeId} />}
    </Root>
  );
};

MainApp.propTypes = {
  measurementTypes: PropTypes.objectOf(PropTypes.any).isRequired,
  getMeasurementTypes: PropTypes.func.isRequired,
  fetchMeasurements: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      measurementTypeId: PropTypes.string,
    }).isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => (
  {
    measurementTypes: state.measurementTypeReducer.measurementTypes,
    token: state.authReducer.token,
  }
);

const mapDispatchToProps = dispatch => (
  {
    fetchMeasurements: token => dispatch(fetchMeasurements(token)),
    getMeasurementTypes: token => dispatch(getMeasurementTypes(token)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
