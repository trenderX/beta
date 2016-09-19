import { CLICKY_TYPE } from '../actions/actionTypes/LandingPage_types';

function searchterm(state = ''  , action) {
  switch (action.type) {
  case CLICKY_TYPE:
    const query = action.payload;
    return {...state, term:query }
  default:
    return state;
  }
}

module.exports = {
  searchterm
}