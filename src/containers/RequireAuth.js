import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const RequireAuth = ({ token }) => {
  if (!token) { return <Redirect to="/login" />; }
  return null;
};

const mapStateToProps = state => (
  { token: state.authReducer.token }
);

export default connect(mapStateToProps, null)(RequireAuth);
