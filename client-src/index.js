// this is the entry for webpack to our app

import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from 'react-dom';
import { configureStore } from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import 'babel-polyfill';
// import { syncHistoryWithStore } from 'react-router-redux';

/**
 * We wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
const mountApp = document.getElementById('root');

// configureStore returns value based on ENV.
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>,
mountApp
);
