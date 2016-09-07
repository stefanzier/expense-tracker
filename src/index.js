import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// Components
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';

// Default Stylesheet
import './index.css';

Stamplay.init('box-expense-tracker');

render((
  <Router history={browserHistory}>
  <Route path="/" component={Login} />
    <Route path="/dashboard" component={Dashboard} />
  </Router>
), document.getElementById('root'))
