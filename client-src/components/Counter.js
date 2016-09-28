// import React, { Component } from 'react';
// import { increment, decrement } from '../redux/actions/CounterActions';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'
// import {Grid, Row, Col} from 'react-flexbox-grid';
// import CSSModules from 'react-css-modules';
// import styles from './Counter.css';
// import Input from 'react-toolbox/lib/input';
// import Button from 'react-toolbox/lib/button';

// class Counter extends Component {
//   constructor(props) {
//     super(props);

//     /*binding this*/
//     this.handleChange = this.handleChange.bind(this);

//     /*State shouldnt be managed here, only testing for the
//     input form below*/
//     this.state = {
//       name: '',
//       phone: '',
//       multiline: '',
//       email: '',
//       hint: ''
//     };
//   }

//   handleChange(name,value) {
//     this.setState({name: value});
//   }
//   handleIncrement() {
//       this.props.dispatch(increment());
//   }

//   handleDecrement() {
//     this.props.dispatch(decrement());
//   }

//   render() {
//     return (
//       <div styleName='test' className="counter-container" >
//         <div className="counter-num-label" >{this.props.counter}</div>
//         {/* Below, the even or odd statement is simply used to demonstrate how one could
//         easily use a ternary operator to conditionally show an 'even' or 'odd' string
//         based on the counter's value on state. */}
//         <div className="counter-even-label">{this.props.counter % 2 === 0 ? 'even' : 'odd'}</div>
//         <br />
//         <div className="counter-buttons">
//           <Button raised onClick={() => {this.handleDecrement();}}>-</Button>
//           <Button raised onClick={() => {this.handleIncrement();}}>+</Button>
//         </div>
//         <Input type='text'
//                 label='Name'
//                 name='name'
//                 value={this.state.name}
//                 onChange={this.handleChange.bind(this, 'name')}
//                 maxLength={16 } />
//       </div>
//     );
//   }
// }

// /*Lets us access our store and the 'dispatch()' function, CssModules() allows
// for us to access the styleName prop*/
// export default connect(state => state)(CSSModules(Counter,styles))
