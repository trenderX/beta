import React, { PropTypes } from 'react';
import styles from './Greeting.css';
import cssModules from 'react-css-modules';

const Greeting = (props) =>
  <div>
    <h1 styleName={props.tagline}> Search has, evolved
    <span styleName="period">.</span>
    </h1>
  </div>;

Greeting.propTypes = {
  tagline: PropTypes.string
};

export default cssModules(Greeting, styles);
