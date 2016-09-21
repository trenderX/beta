import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../redux/reducers';
import thunk from 'redux-thunk';

const finalCreateStore = compose(
  applyMiddleware(thunk)
)(createStore);

module.exports = function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
};
