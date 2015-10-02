import React from 'react';

import {Router, Route} from 'react-router';
import App from './components/App/App.js';

React.render((
  <Router>
    <Route path="/" component={App} />
  </Router>
), document.getElementById('app'));
