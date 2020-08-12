import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import '../styles/App.module.scss';

import Login from '../containers/Login';
import Signup from '../containers/Signup';
import MainApp from '../containers/MainApp';

const App = () => (
  <Router>
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/measurements/:measurementTypeId" component={MainApp} />
      <Route path="/" component={MainApp} />
    </Switch>
  </Router>
);

export default App;
