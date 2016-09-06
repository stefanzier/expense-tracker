import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

// Components
import Dashboard from './components/dashboard/dashboard';

// Default Stylesheet
import './index.css';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Dashboard}>
    </Route>
  </Router>
), document.getElementById('root'))
