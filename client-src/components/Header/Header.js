import React, { Component, PropTypes } from 'react';
import styles from './Header.css'
import CSSModules from 'react-css-modules';
import SearchBar from '../SearchBar/SearchBar'
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
    console.log('header:',props)

  return  (

    <div style={bgImg} >
      <div styleName='center-center'>
        {/* Turn into a <Greeting/> */}
        <h1> {props.value} </h1>
        <SearchBar value={props.value} query={props.query} />
      </div>
    </div>
  )
}


export default CSSModules(Header,styles);