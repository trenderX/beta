import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import { userValue, userSearch } from '../../redux/actions/LandingPageActions';

// import Counter from '../../components/Counter'
import styles from './LandingPage.css'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Header from '../../components/Header/Header'
import defaultBG from '../../assets/imgs/city_shop.jpeg'

let options = { allowMultiple:true }

class LandingPage extends Component {

  handleChange = (e) => {
    this.props.dispatch(userValue(e))
  };  

  handleSearch = (e) => {
    e.preventDefault();
    this.props.dispatch(userSearch(this.props.searchterm.search))
  };


  render(){
    // * defaultBG needs to be an API call to pexels || default img
    // * need to update once search term is passed up
    return  (
      <section>
        <Header  query={this.handleChange} 
                 searched={this.handleSearch}
                 value={this.props.searchterm.search}
                 image={defaultBG} 
                 pos={this.props.searchterm.pos}
                 vh={this.props.searchterm.vh}
                 />
      </section>
    );
  } 
}


export default connect(state => state)(CSSModules(LandingPage,styles))
