import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Input } from 'react-toolbox/lib/input';
import { Button } from 'react-toolbox/lib/button';

import cssModules from 'react-css-modules';
import styles from './Login.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {
  loginUser,
  signupUser,
  userEmail,
  userPassword
} from '../../redux/actions/AuthActions';

class Login extends Component {
  constructor(props) {
    super(props);
  };

  handleEmail = (e) => {
    this.props.dispatch(userEmail(e));
  };
  handlePass = (e) => {
    this.props.dispatch(userPassword(e));
  };
  handleAuth = (e) => {
    e.preventDefault();

    let userInfo = {
      email: this.props.auth.user_email,
      password: this.props.auth.user_password
    };
    console.log('userInfo:', userInfo);
    this.props.dispatch(signupUser(userInfo));
  };

  render() {
    const { user_email, user_password } = this.props.auth;

    let userInfo = {
      email: user_email,
      password: user_password
    }

    console.log(userInfo)
    // defaultBG needs to be an API call to pexels || default img
    // need to update once search term is passed up
    return (
      <Grid>
        <h1> Authentication Bro. </h1>
        <Row>
          <Col md={6} sm={6} xs={12}>
            <div>
              <h3>Login</h3>
                <Input
                  autoComplete="off"
                  // theme= { styles }
                  type="text"
                  label="Email "
                  name="name"
                  value={ user_email }
                  onChange={ this.handleEmail }
                  maxLength={ 50 }
                />
                <Input
                  autoComplete="off"
                  // theme= { styles }
                  type="password"
                  label="Password"
                  name="name"
                  value={ user_password }
                  onChange={ this.handlePass }
                  maxLength={ 50 }
                />
                <Button
                  label="Sign Up"
                  primary
                  onClick={ this.handleAuth }
                />
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}


export default connect(state => state)(cssModules(Login, styles));
