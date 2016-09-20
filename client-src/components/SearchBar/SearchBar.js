import React, { Component, PropTypes } from 'react';
import styles from './SearchBar.css'
import CSSModules from 'react-css-modules';
import Input from 'react-toolbox/lib/input';

const SearchBar = (props) => {
  let blues = {
    backgroundColor:`white`
  }

  return (
   
     <Input
        theme={styles}
        type='text' 
        label='Search Everything.' 
        name='Search' 
        value= {props.value}
        onChange={props.query} 
        maxLength={16} 
      />

  )
}

export default CSSModules(SearchBar,styles);
