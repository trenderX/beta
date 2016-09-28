import { USER_VALUE, USER_SEARCH } from '../actions/actionTypes/LandingPage_types';

const initState = {
  multiple:[],
  vh: '100vh',
  pos: 'search-pos'
}

function searchterm(state = initState, action) {
  switch (action.type) {
    case USER_VALUE:
      const query = action.payload;
      return {...state, multiple: query }
    case USER_SEARCH:
      const userSearch = state.multiple;
      const vh = `35vh`;
      const pos = `search-pos-abs`;
      return {...state, userSearch: userSearch, vh: vh, pos: pos }
    default:
      return state;
  }
}

module.exports = {
  searchterm
}
