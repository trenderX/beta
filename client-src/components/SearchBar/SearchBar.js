import React, { Component, PropTypes } from 'react';
import styles from './SearchBar.css';
import cssModules from 'react-css-modules';
import Input from 'react-toolbox/lib/input';

const options = {
  allowMultiple: true
};

class SearchBar extends Component {
  // state = { name:'', val:''};

  // handleChange = (e,) => {
  //   this.setState({...this.state, name: e});
  // };

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   this.setState({...this.state, val: this.state.name});
  // };

  render(){

    return (
      <div styleName={`search-cont ${this.props.pos}`}>
        <form onSubmit={this.props.handleSearch}>
          <Input
          theme= { styles }
          type='text'
          label='Name'
          name='name'
          value={this.props.userValue}
          onChange={this.props.handleChange}
          maxLength={16} />
        </form>
      </div>
    );
  };
}



export default cssModules(SearchBar, styles, options);
