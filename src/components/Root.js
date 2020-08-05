import React from 'react';
import RequireAuth from '../containers/RequireAuth';
import Header from './Header';

const Root = ({ children }) => {

  return (
    <div>
      <RequireAuth />
      <Header />
      {children}
    </div>
  );
};

export default Root;
