import React, { Component, PropTypes } from 'react';
// import Footer from '../components/Footer';
import DevTools from './DevTools';

// Require Main Global styles for the App
// Remove SASS
import '../styles/main.css';


/**
 * This is our main route.
 * We pass our Routes to it and they will inherit from here.
 */

class App extends Component {

  render() {
    let renderApp;
    // If we are in production env, then show DevTools, else don't.
    if (process.env.NODE_ENV === 'development') {
      renderApp = (
          <div>
            {this.props.children}
            <DevTools/>
          </div>
      );
    } else {
      renderApp = (
          <div>
            {this.props.children}
          </div>
      );
    }
    return (renderApp);
  }
}
App.propTypes = {
  children: PropTypes.object,
};
export default App;
