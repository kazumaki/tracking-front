import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

import styles from '../styles/App.module.scss';

import Home from './Home';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import AddMeasurement from '../containers/AddMeasurement';
import MainApp from '../containers/MainApp';
import MeasurementList from '../containers/MeasurementList';

const App = () => (
  <Router>
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/measurements/:measurementTypeId" component={MeasurementList} />
      <Route path="/" component={MainApp} />
    </Switch>
  </Router>
);

export default App;
