import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { compose, createStore, applyMiddleware } from 'redux'; //сам редакс у которого есть стор
import { Provider } from 'react-redux'; //обертка которая оборачивает все компоненты и передает по ним стор
import { rootReducer } from '../src/redux/rootReducer.js'; //тут все редьюсеры объеденены в один
import createSagaMiddleware from 'redux-saga'; // импорт саги
import { rootSagas } from './redux/rootSagas.js'; // тут все саги
import {
  localStorageMiddleware,
  reHydrateStore,
} from './redux/middleware/mcdLocalStorage';

const saga = createSagaMiddleware(); // это сама сага

//это стор, он принимает в себя все редьюсеры с их стейтами
const store = createStore(
  rootReducer,
  reHydrateStore(),
  compose(
    applyMiddleware(saga, localStorageMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

saga.run(rootSagas); // запускаем сагу

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
