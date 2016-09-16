import React, { Component, PropTypes } from 'react';
import styles from './Header.css'
import CSSModules from 'react-css-modules';

//pure function
const Header = (props) => {
  //move this into styles
  let bgImg = {
    backgroundImage:`url(${props.image})`,
    height:`100vh`,
    width:`100%`,
    backgroundSize:`cover`,
    backgroundRepeat:`no-repeat`,
    backgroundPosition:`center`,
    display:`table`
  }

  return  (
    <div style={bgImg} >
      {/* Turn into a <Greeting/> */}
      <h1 styleName='center-center'> Work Hard, Dream BIG. </h1>
      {/* Search bar will be placed here */}
    </div>
  )
}


export default CSSModules(Header,styles);