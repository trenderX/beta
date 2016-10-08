import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import styles from './LandingPage.css';
import Header from '../../components/Header/Header';
import defaultBG from '../../assets/imgs/city_shop.jpeg';
// import { Grid, Row, Col } from 'react-flexbox-grid';
import {
  userSearch,
  userInput,
  toggleList,
  retrieveTags
} from '../../redux/actions/LandingPageActions';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
    this.getTagsFromDB()
  }
  // Helper functions, autobound by arrow funcs
  getTagsFromDB = () => {
    this.props.dispatch(retrieveTags())
    .then(console.log('retrieved tags'))
  };

  handleChange = (e) => {
    this.props.dispatch(userInput(e))
  };

  handleSearch = (e) => {
    console.log('search term:', this.props.search.userValue)
    e.preventDefault()
    this.props.dispatch(userSearch(this.props.search.userValue));
  };

  toggleSuggestions = () => {
    if (this.props.search.stateStyles.toggleList !== 'show-list') {
      this.props.dispatch(toggleList());
    } else {
      return;
    }
  };

  render() {
    // * defaultBG needs to be an API call to pexels || default img
    // * need to update once search term is passed up
    return (
      <section>
        <Header
          toggleSuggestions= {this.toggleSuggestions}
          handleSearch={ this.handleSearch }
          handleChange={ this.handleChange }
          // searched={ this.handleSearch }
          image={ defaultBG }
          {...this.props.search}
        />
      </section>
    );
  }
}

LandingPage.propTypes = {
  search: PropTypes.shape({
    stateStyles: PropTypes.shape({
      vh: PropTypes.string,
      tagline: PropTypes.string,
      toggleList: PropTypes.string,
      pos: PropTypes.string,
    }),
    // userSearhTerms: PropTypes.array
  }),
  dispatch: PropTypes.func
};

export default connect(state => state)(cssModules(LandingPage, styles));
