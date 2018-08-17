import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './js/redux/store/index';
import App from './js/App';
import style from './_scss/styles.scss';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);