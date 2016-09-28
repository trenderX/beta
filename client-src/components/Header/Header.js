import React, { PropTypes } from 'react';
import styles from './Header.css';
import cssModules from 'react-css-modules';
import SearchBar from '../SearchBar/SearchBar';
import Greeting from '../Greeting/Greeting';
import { Row, Col } from 'react-flexbox-grid';

// pure function
const Header = (props) => {
  // move this into styles
  const bgImg = {
    backgroundImage: `url(${props.image})`,
    height: `${props.vh}`,
    width: `100%`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center`,
    display: `table`,
    transition: `.8s all cubic-bezier(0.22, 0.61, 0.36, 1)`
  };

  return (
    <div style={ bgImg }>
      <div styleName="overlay">
        <div styleName="container">
          <Row center="xs" styleName="table-cont">
            <Col styleName="header-pos" md={8} sm={6} xs={12}>
              <Greeting/>
              <SearchBar
                searchTerm={ props.searchTerm }
                searchChange={ props.searchChange }
                searched={ props.searched }
                pos={ props.pos }
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
  vh: PropTypes.string,
  searchTerm: PropTypes.array,
  searchChange: PropTypes.func,
  searched: PropTypes.func,
  pos: PropTypes.string
};

export default cssModules(Header, styles);
