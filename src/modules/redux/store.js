import * as Redux from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

let store = null;

export default function createStore(config) {
  if (store) {
    return store;
  }

  const { reducers, middlewares = [] } = config;
  const rootReducer = Redux.combineReducers(reducers);
  const coreMiddlewares = [thunk, logger, ...middlewares,];
  const appliedMiddlewares = (process.env.NODE_ENV === 'development')
    ? composeWithDevTools(Redux.applyMiddleware(...coreMiddlewares))
    : Redux.applyMiddleware(...coreMiddlewares);

  store = Redux.createStore(rootReducer, {}, appliedMiddlewares);
  return store;
}

export function getStore() {
  return store;
}

export function getState() {
  return store && store.getState();
}