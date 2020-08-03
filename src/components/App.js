import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

import Home from './Home';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import AddMeasurement from '../containers/AddMeasurement';

const App = () => (
  <Router>
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);

export default App;
