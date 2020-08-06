import React from 'react';
import PropTypes from 'prop-types';
import RequireAuth from '../containers/RequireAuth';
import Header from './Header';
import LoadingChecker from '../containers/LoadingChecker';

const Root = ({ children }) => (
  <div>
    <RequireAuth />
    <LoadingChecker />
    <Header />
    {children}
  </div>
);

Root.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Root;
