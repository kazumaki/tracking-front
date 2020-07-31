import React, { useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Home from './Home';
import Login from '../containers/Login';
import Signup from './Signup';
import { connect } from 'react-redux';

const App = ({auth_token}) => {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => (
  {
    auth_token: state.authReducer.token,
  }
)

export default connect(mapStateToProps, null)(App);
