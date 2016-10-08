import React, { PropTypes } from 'react';
import styles from './SearchBar.css';
import cssModules from 'react-css-modules';
import Input from 'react-toolbox/lib/input';

const options = {
  allowMultiple: true
};

const SearchBar = (props) =>
  <div styleName={`search-cont ${ props.pos }`}>
    <form onSubmit={ props.handleSearch }>
      <Input
        theme= { styles }
        type="text"
        label="Fynd more"
        name="name"
        value={ props.userValue }
        onChange={ props.handleChange }
        maxLength={ 16 }
      />
    </form>
  </div>;

SearchBar.propTypes = {
  pos: PropTypes.string,
  handleSearch: PropTypes.func,
  handleChange: PropTypes.func,
  userValue: PropTypes.string,
};


export default cssModules(SearchBar, styles, options);
