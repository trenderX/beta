import { USER_SEARCH, TOGGLE_LIST } from './actionTypes/LandingPage_types';
// import axios from 'axios';

// This is to add the user value to an arry
function userSearch(payload) {
  return {
    type: USER_SEARCH,
    payload
  };
}

// This is to toggle the suggestions list when typing only
function toggleList() {
  return {
    type: TOGGLE_LIST,
  };
}
// Demo of Async dispatch's
// function userSearch(payload) {
//   return dispatch => {
//     dispatch(userValue(payload))
//     dispatch(userList())
//   }
// }

module.exports = {
  userSearch,
  toggleList
};
