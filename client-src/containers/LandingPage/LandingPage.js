import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import { clicky } from '../../redux/actions/LandingPageActions';

// import Counter from '../../components/Counter'
import styles from './LandingPage.css'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Header from '../../components/Header/Header'
import defaultBG from '../../assets/imgs/dreamBIG.jpeg'

let options = { allowMultiple:true }

class LandingPage extends Component {
  // constructor(props){
  //   super(props)
  // }

  reduxClick = (e) => {
    this.props.dispatch(clicky(e))
  }

  render(){
    console.log('landingpageState:',this.state)

    // * this needs to be an API call to pexels || default img
    // * need to update once search term is passed up
    let wallpaper = defaultBG;
    return  (
      <section styleName='grid-one'>
        <Header  query={this.reduxClick} 
                 value={this.props.searchterm.search}
                 image={wallpaper} />
      </section>
    );
  } 
}


export default connect(state => state)(CSSModules(LandingPage,styles))
