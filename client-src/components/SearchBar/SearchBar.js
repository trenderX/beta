import React, { PropTypes } from 'react';
import styles from './SearchBar.css';
import cssModules from 'react-css-modules';
import Autocomplete from 'react-toolbox/lib/autocomplete';

const countriesObject = {
  'ES-es': 'Spain',
  'TH-th': 'Thailand',
  'EN-gb': 'England',
  'EN-en': 'USA'
};
const options = {
  allowMultiple: true
};
const flag = true;
const SearchBar = (props) =>
  <div styleName={`search-cont ${props.pos}`}>
    <button onClick={ props.searched }> Search </button>
    <Autocomplete
      theme={ styles }
      multiple={ flag }
      direction="down"
      label="Choose countries"
      onChange={props.searchChange}
      source={countriesObject}
      value={props.searchTerm}
    />
  </div>;

SearchBar.propTypes = {
  pos: PropTypes.string,
  searched: PropTypes.func,
  searchChange: PropTypes.func,
  value: PropTypes.array,
  searchTerm: PropTypes.array,
};

export default cssModules(SearchBar, styles, options);
