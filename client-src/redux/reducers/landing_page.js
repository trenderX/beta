import { USER_VALUE, USER_SEARCH } from '../actions/actionTypes/LandingPage_types';

const initState = {
  search: '',
  vh: '100vh',
  pos: 'search-pos'
}

function searchterm(state = initState, action) {
  switch (action.type) {
    case USER_VALUE:
      const query = action.payload;
      return {...state, search: query }
    case USER_SEARCH:
      const userSearch = action.payload;
      const vh = `50vh`;
      const pos = `search-pos-abs`;
      return {...state, userSearch: userSearch, vh: vh, pos: pos }
    default:
      return state;
  }
}

module.exports = {
  searchterm
}
