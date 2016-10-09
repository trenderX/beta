import {
  USER_SEARCH,
  USER_INPUT,
  TOGGLE_LIST,
  GET_TAGS,
  // ADD_TAG_DB
} from '../actions/actionTypes/LandingPage_types';

const initState = {
  userSearchTerms: [],
  userValue: '',
  tagsFromDB: [],
  stateStyles: {
    vh: '100vh',
    pos: 'search-pos',
    tagline: 'tagline',
    toggleList: true,
    listShow: 'hide-list'
  }
};

function search(state = initState, action) {
  switch (action.type) {
    case USER_SEARCH:
      const query = action.payload;
      const vh = `35vh`;
      const pos = `search-pos-abs`;
      const tagline = `tagline-sm`;
      const clear = '';

      return {...state,
        userSearchTerms: [...state.userSearchTerms, query],
        userValue: clear,
        stateStyles: {...state.stateStyles,
          vh,
          pos,
          tagline,
        }
      };

    case USER_INPUT:
      const input = action.payload;
      return {...state, userValue: input };

    case TOGGLE_LIST:
      let toggleList = !state.stateStyles.toggleList;
      let listShow = '';
      state.stateStyles.toggleList === true ?
      listShow = 'show-list' : listShow = 'hide-list'

      return {...state,
        stateStyles: {...state.stateStyles, toggleList, listShow }
      };

    case GET_TAGS:
      const tags = action.tags;
      console.log('reducerTags', tags);
      return {...state,
        tagsFromDB: tags,
      };

    default:
      return state;
  }
}

module.exports = {
  search
};
