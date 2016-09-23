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
    height:`${props.vh}`,
    width:`100%`,
    backgroundSize:`cover`,
    backgroundRepeat:`no-repeat`,
    backgroundPosition:`center`,
    display:`table`,
    transition: `.8s all cubic-bezier(0.22, 0.61, 0.36, 1)`
  }

  return  (
    <div style={ bgImg }>
      <div styleName='overlay'>
        <div styleName='container'>
          <Row middle='xs' center='xs' styleName='height-100'>
            <Col styleName='header-pos' md={8} sm={6} xs={12}>
              {/* Turn into a <Greeting/> */}
              <h1 styleName='greeting'> Search, evolved
                <span styleName='period'>.</span> 
              </h1>
              <p styleName='greeting-sub'>Serving up relevant search results for the new web.</p>
              <SearchBar value={props.value} 
                         query={props.query}
                         searched={props.searched}
                         pos={props.pos} />
            </Col>
          </Row> 
        </div> 
      </div>
    </div>
  )
}


export default CSSModules(Header,styles);