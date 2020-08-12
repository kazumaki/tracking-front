import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const RequireNoAuth = ({ token }) => {
  if (token) { return <Redirect to="/" />; }
  return null;
};

const mapStateToProps = state => (
  { token: state.authReducer.token }
);

RequireNoAuth.propTypes = {
  token: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(RequireNoAuth);
