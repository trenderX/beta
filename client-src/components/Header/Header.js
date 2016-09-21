import React, { Component, PropTypes } from 'react';
import styles from './Header.css'
import CSSModules from 'react-css-modules';
import SearchBar from '../SearchBar/SearchBar'
import { Grid, Row, Col } from 'react-flexbox-grid'

//pure function
const Header = (props) => {
  //move this into styles
  let bgImg = {
    backgroundImage:`url(${props.image})`,
    height:`50vh`,
    width:`100%`,
    backgroundSize:`cover`,
    backgroundRepeat:`no-repeat`,
    backgroundPosition:`center`,
    display:`table`,
    transition: `.2s all ease-in-out`

  }


    console.log('header:',props)

  return  (
    <div style={bgImg} >
      <div styleName='overlay'>
        <div styleName='container'>
          <Row middle='xs' center='xs' styleName='height-100'>
            <Col styleName='ease-in-out' md={8} sm={6} xs={12}>
              {/* Turn into a <Greeting/> */}
              <h1 styleName='greeting'> Find More<span styleName='period'>.</span> </h1>
              <SearchBar value={props.value} query={props.query} />
            </Col>
          </Row> 
        </div> 
      </div>
    </div>
  )
}


export default CSSModules(Header,styles);