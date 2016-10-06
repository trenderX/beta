import axios from 'axios'
import {
  USER_SEARCH,
  TOGGLE_LIST,
  ADD_TAG_DB,
  GET_TAGS
} from './actionTypes/LandingPage_types';

// This is to add the user value to an array
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


function addTagToDB(tag) {
  return function(dispatch) {
    return axios.post('/api/tags', tag)
      .then(function(payload) {
        dispatch({
          type: ADD_TAG_DB,
          payload
        });
      });
  };
};


function retrieveTags() {
  return dispatch => axios.get('/api/tags')
    .then(function(payload) {
      // console.log('/api/tags payload:', payload);
      let newKey,
        newVal;
      let objObj = {};

      payload.data.data.map(function(tag) {
        newKey = tag.text + '/' + tag.context;
        newVal = tag.text;

        let ace = {...objObj, [`${newKey}`]: newVal }
        objObj = ace;

      });
      console.log('objObj:',objObj)
      dispatch({
        type: GET_TAGS,
        objObj
      })
    })
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
  toggleList,
  addTagToDB,
  retrieveTags
};
