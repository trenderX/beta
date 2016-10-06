import {
  USER_SEARCH,
  TOGGLE_LIST,
  GET_TAGS,
  ADD_TAG_DG
} from '../actions/actionTypes/LandingPage_types';

const initState = {
  userSearchTerms: [],
  tagsFromDB: [],
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
        userSearchTerms:query,
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
    case GET_TAGS:
      const tags = action.objObj;
      console.log('reducerTags', tags)
      return { ...state,
        tagsFromDB: tags,
      };
    default:
      return state;
  }
}

module.exports = {
  search
};
