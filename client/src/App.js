import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/Login" component={Login} />
        <Route exact path="/">
          <Redirect to="/Login" />
        </Route>
        <Route exact path="/Home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
