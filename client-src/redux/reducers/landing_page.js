import { CLICKY_TYPE } from '../actions/actionTypes/LandingPage_types';

function searchterm(state = { search:'' } , action) {
  switch (action.type) {
  case CLICKY_TYPE:
    const query = action.payload;
    return { ...state, search: query }
  default:
    return state;
  }
}

module.exports = {
  searchterm
}