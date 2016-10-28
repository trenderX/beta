import axios from 'axios';
import {SIGNIN_URL, SIGNUP_URL} from '../api';
import { AUTH_USER, UNAUTH_USER, USER_EMAIL, USER_PASSWORD } from './actionTypes/AuthTypes';
// import {addAlert} from './alertsActions';

function loginUser(email, password) {
  return function(dispatch) {
    return axios.post(SIGNIN_URL, {email, password}).then((response) => {
      var {user_id, token} = response.data;
      localStorage.setItem(user_id, token)
        .then(function() {
          dispatch(authUser(user_id));
        }).catch((error) => {
          // dispatch(addAlert("Could not log in."));
          console.log('Could not log in');
        });
    }).catch((error) => {
      // dispatch(addAlert("Could not log in."));
      console.log('Could not log in');
    });
  }
}

function signupUser(user) {
  console.log('in signupUser:', user)
  return dispatch => axios.post(SIGNUP_URL, user)
    .then((res) => {
      var {user_id, token} = res.data;
      console.log('response!:', res.data)
      localStorage.setItem(user_id, token)
      dispatch(authUser(user_id));
    }).catch((error) => {
      console.log('Could not log in');
      // dispatch(addAlert("Could not sign up."));
    });
}


function userEmail(payload) {
  return {
    type: USER_EMAIL,
    payload
  };
}

function userPassword(payload) {
  return {
    type: USER_PASSWORD,
    payload
  };
}

function authUser(user_id){
  console.log('userId:',user_id)
  return {
    type: AUTH_USER,
    user_id
  }
}

// exports.unauthUser = {
//   type: UNAUTH_USER
// }

module.exports = {
  loginUser,
  signupUser,
  userEmail,
  userPassword
};
