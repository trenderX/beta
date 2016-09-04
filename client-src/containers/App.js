import React, { Component, PropTypes } from 'react';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import DevTools from './DevTools'
import CSSModules from 'react-css-modules';

//Require Main Global styles for the App
import styles from '../styles/main.scss';


/**
 * This is our main route.
 * We pass our Routes to it and they will inherit from here.
 * We wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */

class App extends Component {

  render(){
    console.log('App styles:',this.props.styles)

    // If we are in production env, then show DevTools, else don't.
    if (process.env.NODE_ENV === 'development') {
      return (
          <div styles={styles} >
            {this.props.children}
            <Footer/>
            <DevTools/>
          </div>
      );
    } else {
      return (
          <div>
            {this.props.children}
            <Footer/>
          </div>
      );
    }
  }
}

export default CSSModules(App, styles);


