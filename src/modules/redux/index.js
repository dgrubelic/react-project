import { combineReducers } from 'redux';
import { connect } from 'react-redux';
import StoreProvider from './providers/store-provider';
import createStore, { getStore, getState } from './store';
import { createActionType, dispatchRequest } from './actions';
import { createReducer, createRequestReducer } from './reducers';
import { createModuleSelector } from './selectors';

export {
  StoreProvider,
  combineReducers,
  connect,
  createActionType,
  createModuleSelector,
  createReducer,
  createRequestReducer,
  createStore,
  dispatchRequest,
  getStore,
  getState,
}