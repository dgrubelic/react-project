import {
  combineReducers,
  createActionType,
  createReducer,
  createModuleSelector,
  createRequestReducer,
} from 'modules/redux';

export const STORE_NAME = 'auth';
export const FETCH_AUTH_REQUEST = createActionType(STORE_NAME, 'FETCH_AUTH_REQUEST');
export const FETCH_AUTH_SUCCESS = createActionType(STORE_NAME, 'FETCH_AUTH_SUCCESS');
export const FETCH_AUTH_ERROR = createActionType(STORE_NAME, 'FETCH_AUTH_ERROR');

/**
 * Selectors
 */

const mainModuleSelector = createModuleSelector(STORE_NAME);
export const getAccessToken = state => mainModuleSelector(state).accessToken;
export const getRefreshToken = state => mainModuleSelector(state).refreshToken;
export const getUser = state => mainModuleSelector(state).user;

/**
 * Reducers
 */

const authRequestReducer = createRequestReducer(FETCH_AUTH_REQUEST, FETCH_AUTH_SUCCESS, FETCH_AUTH_ERROR, {});
const accessTokenReducer = createReducer({
  [FETCH_AUTH_REQUEST]: () => null,
  [FETCH_AUTH_SUCCESS]: (state, action) => action.payload.accessToken,
  [FETCH_AUTH_ERROR]: () => null,
}, null);
const refreshTokenReducer = createReducer({
  [FETCH_AUTH_REQUEST]: () => null,
  [FETCH_AUTH_SUCCESS]: (state, action) => action.payload.refreshToken,
  [FETCH_AUTH_ERROR]: () => null,
}, null);
const userProfileReducer = createReducer({
  [FETCH_AUTH_REQUEST]: () => ({ }),
  [FETCH_AUTH_SUCCESS]: (state, action) => action.payload.user,
  [FETCH_AUTH_ERROR]: () => ({ }),
}, null);

export default combineReducers({
  authRequest: authRequestReducer,
  accessToken: accessTokenReducer,
  refreshToken: refreshTokenReducer,
  user: userProfileReducer,
});
