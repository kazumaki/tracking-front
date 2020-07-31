import React, { useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

const App = () => {
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});

  return (
    <Router>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" setToken={setToken} component={Login} />
        <Route path="/" >
          {token !== '' ? <Home /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
