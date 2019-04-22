import * as Redux from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

let store = null;

export default function createStore(config) {
  if (store) {
    return store;
  }

  const { reducers } = config;
  const rootReducer = Redux.combineReducers(reducers);
  let middlewares;

  if (process.env.NODE_ENV === 'development') {
    middlewares = composeWithDevTools(
      Redux.applyMiddleware(thunk, logger)
    );
  } else {
    middlewares = Redux.applyMiddleware(thunk, logger);
  }

  store = Redux.createStore(rootReducer, {}, middlewares);
  return store;
}

export function getStore() {
  return store;
}

export function getState() {
  return store && store.getState();
}