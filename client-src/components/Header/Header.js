import React, { PropTypes } from 'react';
import styles from './Header.css';
import cssModules from 'react-css-modules';
import SearchBar from '../SearchBar/SearchBar';
import Greeting from '../Greeting/Greeting';
import { Row, Col } from 'react-flexbox-grid';
import Branding from '../Branding/Branding';
// pure function
const Header = (props) => {
  // move this into styles?
  const bgImg = {
    backgroundImage: `url(${props.image})`,
    height: `${props.stateStyles.vh}`,
    width: `100%`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center`,
    display: `table`,
    transition: `1.3s all cubic-bezier(0.22, 0.61, 0.36, 1)`
  };

  console.log(props);

  return (
    <div style={ bgImg }>
      <div styleName="overlay">
        <div styleName="container">
          <Branding/>
          <Row center="xs" middle="xs">
            <Col styleName="header-pos" md={8} sm={6} xs={12}>
              <Greeting
                tagline={ props.stateStyles.tagline }
              />
              <SearchBar
                displaySuggestions= { props.stateStyles.toggleList }
                pos={ props.stateStyles.pos }
                userTerms={ props.userSearchTerms }
                handleSearch={ props.handleSearch }
                toggleSuggestions= { props.toggleSuggestions }
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  image: PropTypes.string,
  userSearchTerms: PropTypes.array,
  handleSearch: PropTypes.func,
  toggleSuggestions: PropTypes.func,
  stateStyles: PropTypes.shape({
    vh: PropTypes.string,
    tagline: PropTypes.string,
    toggleList: PropTypes.string,
    pos: PropTypes.string,
  }),
};

export default cssModules(Header, styles);
