import React from 'react';
import RequireAuth from '../containers/RequireAuth';

const Home = () => (
  <div>
    <RequireAuth />
  </div>
);

export default Home;