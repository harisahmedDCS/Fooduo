import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import App from './src/App';
import {name as appName} from './app.json';

const root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => root);
