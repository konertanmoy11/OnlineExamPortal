import React from 'react';
import './App.css';
import MainPage from './component/MainPage';
import LoginPage from './component/LoginPage';
import ProtectedRoute from './utils/ProtectedRoute';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import InfoPage from './component/InfoPage';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage}/>
        <ProtectedRoute component={MainPage} path="/test"/>
        <ProtectedRoute component={InfoPage} path="/"/>
        {/*<Route component={MainPage} path="/test"/>
        <Route component={InfoPage} path="/"/>*/}
      </Switch>
    </Router>
  );
}

export default App;
