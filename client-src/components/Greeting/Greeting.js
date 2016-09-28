import React from 'react';
import styles from './Greeting.css';
import cssModules from 'react-css-modules';

const Greeting = () =>
  <div>
    <h1 styleName="greeting"> Search has, evolved
    <span styleName="period">.</span>
    </h1>
    <p styleName="greeting-sub">Find more relevant content.</p>
  </div>;

export default cssModules(Greeting, styles);
