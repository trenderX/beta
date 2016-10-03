import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import { userSearch, toggleList } from '../../redux/actions/LandingPageActions';
import styles from './LandingPage.css';
import Header from '../../components/Header/Header';
import defaultBG from '../../assets/imgs/city_shop.jpeg';
// import { Grid, Row, Col } from 'react-flexbox-grid';

class LandingPage extends Component {

  // Helper functions, autobound by arrow funcs
  handleSearch = (e) => {
    this.props.dispatch(userSearch(e));
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
    console.log('toggleList:', this.props.search.stateStyles.toggleList);
    return (
      <section>
        <Header
          toggleSuggestions= {this.toggleSuggestions}
          handleSearch={ this.handleSearch }
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
    userSearhTerms: PropTypes.array
  }),
  dispatch: PropTypes.func
};

export default connect(state => state)(cssModules(LandingPage, styles));
