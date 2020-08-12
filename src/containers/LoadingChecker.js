import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from '../components/Loading';

const LoadingChecker = ({ authLoading, measurementLoading, measurementTypeLoading }) => {
  if (authLoading || measurementLoading || measurementTypeLoading) { return (<Loading />); }
  return null;
};

LoadingChecker.propTypes = {
  authLoading: PropTypes.bool.isRequired,
  measurementLoading: PropTypes.bool.isRequired,
  measurementTypeLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => (
  {
    authLoading: state.authReducer.isLoading,
    measurementLoading: state.measurementReducer.isLoading,
    measurementTypeLoading: state.measurementTypeReducer.isLoading,
  }
);

export default connect(mapStateToProps, null)(LoadingChecker);
