import { USER_SEARCH, TOGGLE_LIST } from '../actions/actionTypes/LandingPage_types';

const initState = {
  userSearchTerms: [],
  stateStyles: {
    vh: '100vh',
    pos: 'search-pos',
    tagline: 'tagline',
    toggleList: 'hide-list'
  }
};

function search(state = initState, action) {
  switch (action.type) {
    case USER_SEARCH:
      const query = action.payload;
      const vh = `35vh`;
      const pos = `search-pos-abs`;
      const tagline = `tagline-sm`;
      let toggleList = `hide-list`;
      return { ...state,
        userSearchTerms: query,
        stateStyles: { ...state.stateStyles,
          vh,
          pos,
          tagline,
          toggleList
        }
      };
    case TOGGLE_LIST:
      toggleList = 'show-list';
      return { ...state,
        stateStyles: { ...state.stateStyles, toggleList }
      };
    default:
      return state;
  }
}

module.exports = {
  search
};
