import React from 'react';
import {Provider} from 'react-redux';

import {StatusBar} from 'react-native';

import './config/ReactotronConfig';

import App from './App';

import store from './store';

export default function Index() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <App />
    </Provider>
  );
}
