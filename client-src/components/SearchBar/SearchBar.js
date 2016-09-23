import React, { Component, PropTypes } from 'react';
import styles from './SearchBar.css'
import CSSModules from 'react-css-modules';
import Input from 'react-toolbox/lib/input';

const SearchBar = (props) => {

  return (
   <form onSubmit={props.searched}>
     <Input
        theme={styles}
        type='text' 
        label='Search Everything.' 
        floating={false}
        name='Search' 
        value= {props.value}
        onChange={props.query}
        styleName={props.pos}
        maxLength={16} 
      />
  </form>

  )
}

export default CSSModules(SearchBar,styles);
