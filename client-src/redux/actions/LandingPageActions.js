import axios from 'axios';
import {
  USER_SEARCH,
  USER_INPUT,
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

function userInput(payload) {
  return {
    type: USER_INPUT,
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
  return function (dispatch) {
    return axios.post('/api/tags', tag)
      .then(payload =>
        dispatch({
          type: ADD_TAG_DB,
          payload
        })
      );
  };
}


function retrieveTags() {
  return dispatch => axios.get('/api/tags')
    .then(payload => {
      // the array of all tag objects
      let tags = [];

      payload.data.data.map(tag => {
        const newTag = {
          text: tag.text.value,
          context: tag.context.main,
          // tabs: tag.tabs
        };
        const builtArr = [...tags, newTag];
        tags = builtArr;
      });

      console.log('tagsStructure:', tags);
      dispatch({
        type: GET_TAGS,
        tags
      });
    });
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
  userInput,
  toggleList,
  addTagToDB,
  retrieveTags
};
