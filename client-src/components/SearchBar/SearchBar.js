import React, { PropTypes } from 'react';
import styles from './SearchBar.css';
import cssModules from 'react-css-modules';
import Autocomplete from 'react-toolbox/lib/autocomplete';

const options = {
  allowMultiple: true
};
const flag = true;
const countries = {
  'ES-es': 'Spain',
  'TH-th': `<h1>Thailand</h1>`,
  'EN-gb': 'England',
  'EN-en': 'USA',
  'It-it': 'Italy',
  'Br-br': 'Brazil'
};
const SearchBar = (props) => {
// class SearchBar extends Component {
  console.log('displaySuggestions:', props);
  return (
    <div styleName={`search-cont ${props.pos}`}>
      <Autocomplete
        theme={ styles }
        styleName={ props.displaySuggestions }
        multiple={ flag }
        direction="down"
        label="Choose countries"
        onChange={props.handleSearch}
        source={countries}
        value={props.userTerms}
        onKeyPress={ props.toggleSuggestions }
      />
    </div>
  );
};

SearchBar.propTypes = {
  displaySuggestions: PropTypes.string,
  handleSearch: PropTypes.func,
  pos: PropTypes.string,
  toggleSuggestions: PropTypes.func,
  userTerms: PropTypes.array,
};

export default cssModules(SearchBar, styles, options);
