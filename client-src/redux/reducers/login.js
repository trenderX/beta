import {
  AUTH_USER,
  UNAUTH_USER,
  USER_EMAIL,
  USER_PASSWORD
} from '../actions/actionTypes/AuthTypes';


var initState = {
  user_id: undefined,
  user_email: '',
  user_password: '',
}

function auth(state = initState, action) {
  switch(action.type) {
    case 'AUTH_USER':
      return {
        ...state, user_id: action.user_id
      }
    case USER_EMAIL:
      const email = action.payload;
      return {...state, user_email: email };
    case USER_PASSWORD:
      const password = action.payload;
      return {...state, user_password: password };
    case 'UNAUTH_USER':
      return {
        user_id: undefined
      };
    default:
      return state;
  }
}


module.exports = {
  auth
};
