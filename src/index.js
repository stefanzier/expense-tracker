import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

// Components
import Dashboard from './components/dashboard/dashboard';
import Transactions from './components/dashboard/transactions';

// Default Stylesheet
import './index.css';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Dashboard}>
    </Route>
    <Route path="/" component={Transactions}></Route>
  </Router>
), document.getElementById('root'))
