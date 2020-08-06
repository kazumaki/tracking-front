import React from 'react';
import PropTypes from 'prop-types';
import RequireAuth from '../containers/RequireAuth';
import Header from './Header';

const Root = ({ children }) => (
  <div>
    <RequireAuth />
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
