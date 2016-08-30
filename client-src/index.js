import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import App from './containers/App'
import { configureStore } from './store/configureStore';
import { AppContainer } from 'react-hot-loader';

const mountApp = document.getElementById('root');

//configureStore returns value based on ENV.
const store = configureStore();

ReactDOM.render(
  <App store={store} />,
mountApp
);