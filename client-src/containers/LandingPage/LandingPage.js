import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './LandingPage.css'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Counter from '../../components/Counter'
let options = { allowMultiple:true }

class LandingPage extends Component {
  render(){
    return (
    <div>
    <Grid>
      <h1> react-flexbox-grid </h1>
      <Row>
        <Col md={3} sm={6} xs={12}>
          <div styleName='lt-blue'>
            <h3>1</h3>
          </div> 
        </Col>        
        <Col md={3} sm={6} xs={12}>
          <div styleName='lt-blue'>
            <h3>2</h3>
          </div> 
        </Col>
        <Col md={3} sm={6} xs={12}>
          <div styleName='lt-blue'>
            <h3>3</h3>
          </div> 
        </Col>
        <Col md={3} sm={6} xs={12}>
          <div styleName='lt-blue'>
            <h3>4</h3>
          </div> 
        </Col>
        <Col md={3} sm={6} xs={12}>
          <div styleName='lt-blue'>
            <h3>5</h3>
          </div> 
        </Col>
        <Col md={3} sm={6} xs={12}>
          <div styleName='lt-blue'>
            <h3>6</h3>
          </div> 
        </Col>
      </Row>
    </Grid>
    {/* Deciding Between LostGrid and React-Flexbox-Grid*/}
    <h1>LostGrid</h1>
    <section styleName='grid-one'>
      <div styleName='col-1-4'><h3>1</h3></div>
      <div styleName='col-1-4'><h3>2</h3></div>
      <div styleName='col-1-4'><h3>3</h3></div>
      <div styleName='col-1-4'><h3>4</h3></div>
      <div styleName='col-1-4'><h3>5</h3></div>
      <div styleName='col-1-4'><h3>6</h3></div>
    </section>
  </div>
    );
  } 
}


export default CSSModules(LandingPage,styles, options);