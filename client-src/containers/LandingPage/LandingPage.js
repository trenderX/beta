import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import { userValue, userSearch } from '../../redux/actions/LandingPageActions';
import styles from './LandingPage.css';
// import { Grid, Row, Col } from 'react-flexbox-grid';
import Header from '../../components/Header/Header';
import defaultBG from '../../assets/imgs/city_shop.jpeg';

class LandingPage extends Component {


  handleChange = (e) => {
    this.props.dispatch(userValue(e));
  };

  handleSearch = (e) => {
    e.preventDefault();
    this.props.dispatch(userSearch(this.props.searchterm.search));
  };

  render() {
    // * defaultBG needs to be an API call to pexels || default img
    // * need to update once search term is passed up
    return (
      <section>
        <Header
          searchChange={ this.handleChange }
          searched={ this.handleSearch }
          searchTerm={ this.props.searchterm.multiple }
          image={ defaultBG }
          pos={ this.props.searchterm.pos }
          vh={ this.props.searchterm.vh }
        />
      </section>
    );
  }
}

LandingPage.propTypes = {
  searchterm: PropTypes.shape({
    vh: PropTypes.string,
    pos: PropTypes.string,
    multiple: PropTypes.array,
    search: PropTypes.array
  }),
  dispatch: PropTypes.func
};

export default connect(state => state)(cssModules(LandingPage, styles));
