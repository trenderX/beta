import { USER_VALUE, USER_SEARCH} from './actionTypes/LandingPage_types';


function userValue(payload) {
  return {
    type: USER_VALUE,
    payload
  };
}

function userSearch(payload) {
  return {
    type: USER_SEARCH,
    payload
  };
}

module.exports = {
  userValue,
  userSearch
};