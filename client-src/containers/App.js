import React, { Component, PropTypes } from 'react';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import DevTools from './DevTools'
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from '../routes';
import { syncHistoryWithStore } from 'react-router-redux';

//Require Main Global styles for the App
require('../styles/main.scss');


/**
 * This is our main route.
 * We pass our Routes to it and they will inherit from here.
 * We wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */

export default class App extends Component {

  render(){
    const { store } = this.props;
    console.log('store is:',store)

    // If we are in production env, then show DevTools, else don't.
    if (process.env.NODE_ENV === 'development') {
      return (
        <Provider store={store}>
          <div>
            <Router history={browserHistory}>
              {routes}
            </Router>
            <Footer/>
            <DevTools/>
          </div>
        </Provider>
      );
    } else {
      return (
        <Provider store={store}>
          <div>
            <Router history={browserHistory}>
              {routes}
            </Router>
            <Footer/>
          </div>
        </Provider>
      );
    }
  }
}


