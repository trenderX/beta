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

  handleChange = (e,a) => {
    this.props.dispatch(userValue(e))
  };

  handleSearch = (e) => {
    e.preventDefault();
    this.props.dispatch(userSearch(this.props.searchterm.search))
  };

  handleDelete = (e) => {
    e.preventDefault()
    console.log('delete:',e)
  };
  render(){
    // * defaultBG needs to be an API call to pexels || default img
    // * need to update once search term is passed up
    return  (
      <section>
        <Header  searchChange={this.handleChange}
                 searched={this.handleSearch}
                 searchTerm={this.props.searchterm.multiple}
                 image={defaultBG}
                 pos={this.props.searchterm.pos}
                 vh={this.props.searchterm.vh}
                 />
      </section>
    );
  }
}


export default connect(state => state)(CSSModules(LandingPage,styles))
