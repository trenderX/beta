import React from 'react';
import styles from './Branding.css';
import cssModules from 'react-css-modules';
import { Row, Col } from 'react-flexbox-grid';

const Branding = () =>
  <Row middle="xs" start="xs">
    <Col styleName="fynd-logo"/>
    <Col xs={1}>
      <h1 styleName="fynd-text">FYND</h1>
    </Col>
  </Row>;

export default cssModules(Branding, styles);
