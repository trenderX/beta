import { CLICKY_TYPE } from './actionTypes/LandingPage_types';

function clicky(payload) {
  return {
    type: CLICKY_TYPE,
    payload
  };
}

module.exports = {
  clicky,
};