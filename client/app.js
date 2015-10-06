import React from 'react';

import {Router, Route} from 'react-router';
import App from './components/App/App.js';
import SignUp from './components/SignUp/SignUp.js';

React.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="/sign_up" component={SignUp} />
    </Route>
  </Router>
), document.getElementById('app'));
