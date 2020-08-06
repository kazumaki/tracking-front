import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const RequireAuth = ({ token }) => {
  if (!token) { return <Redirect to="/login" />; }
  return null;
};

RequireAuth.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapStateToProps = state => (
  { token: state.authReducer.token }
);

export default connect(mapStateToProps, null)(RequireAuth);
