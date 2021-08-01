import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import { rootReducer } from './store/reducers/rootReducer';

import App from './App';
import {
  localStorageMiddleware,
  reHydrateStore,
} from './store/middleware/mcdLocalStorage.js';

import { theme } from './theme/theme';

const sagaMiddleware = createSagaMiddleware();
const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  reHydrateStore(),
  enhancers(applyMiddleware(sagaMiddleware, localStorageMiddleware))
);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
