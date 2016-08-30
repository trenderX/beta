import React, { Component, PropTypes } from 'react';
import { increment, decrement } from '../actions/CounterActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
const {Grid, Row, Col} = require('react-flexbox-grid');

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  handleIncrement() {
      this.props.dispatch(increment());
  }

  handleDecrement() {
    this.props.dispatch(decrement());
  }

  render() {
    let num = 0;
    return (
      <div className="counter-container">
        <div className="counter-num-label">{this.props.counter}</div>
        {/* Below, the even or odd statement is simply used to demonstrate how one could
        easily use a ternary operator to conditionally show an 'even' or 'odd' string
        based on the counter's value on state. */}
        <div className="counter-even-label">{this.props.counter % 2 === 0 ? 'even' : 'odd'}</div>
        <br />
        <div className="counter-buttons">
          <button onClick={() => {this.handleDecrement();}}>-</button>
          <button onClick={() => {this.handleIncrement();}}>+</button>
        </div>
      </div>

    );
  }
}




// Lets us access our store and the 'dispatch()' function.
export default connect(state => state)(Counter)

