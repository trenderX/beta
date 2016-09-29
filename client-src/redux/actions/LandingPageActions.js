import { USER_VALUE, USER_SEARCH } from './actionTypes/LandingPage_types';


function userValue(payload) {
  // payload = payload.split($)

  // payload = payload[3]
  console.log('payload:', payload);

  return {
    type: USER_VALUE,
    payload
  };
}

function userSearch() {
  return {
    type: USER_SEARCH,
  };
}

module.exports = {
  userValue,
  userSearch
};
