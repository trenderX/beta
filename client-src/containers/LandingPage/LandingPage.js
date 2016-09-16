import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './LandingPage.css'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Header from '../../components/Header/Header'
let options = { allowMultiple:true }

class LandingPage extends Component {
  render(){

    // * this needs to be an API call to pexels || default img
    // * need to update once search term is passed up
    let wallpaper = 'https://static.pexels.com/photos/111174/pexels-photo-111174.jpeg';
    
    return  (
      <section styleName='grid-one'>
        <Header  image={wallpaper} />
      </section>
    );
  } 
}


export default CSSModules(LandingPage,styles, options);