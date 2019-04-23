
import {
  combineReducers,
  createActionType,
  createReducer,
  createModuleSelector,
  createRequestReducer,
} from 'modules/redux';

export const STORE_NAME = 'auth';
export const FETCH_LOGIN_REQUEST = createActionType(STORE_NAME, 'FETCH_LOGIN_REQUEST');
export const FETCH_LOGIN_SUCCESS = createActionType(STORE_NAME, 'FETCH_LOGIN_SUCCESS');
export const FETCH_LOGIN_ERROR = createActionType(STORE_NAME, 'FETCH_LOGIN_ERROR');
export const FETCH_REGISTER_REQUEST = createActionType(STORE_NAME, 'FETCH_REGISTER_REQUEST');
export const FETCH_REGISTER_SUCCESS = createActionType(STORE_NAME, 'FETCH_REGISTER_SUCCESS');
export const FETCH_REGISTER_ERROR = createActionType(STORE_NAME, 'FETCH_REGISTER_ERROR');

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

const loginRequestReducer = createRequestReducer(FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_ERROR, {});
const registerRequestReducer = createRequestReducer(FETCH_REGISTER_REQUEST, FETCH_REGISTER_SUCCESS, FETCH_REGISTER_ERROR, {});
const accessTokenReducer = createReducer({
  [FETCH_LOGIN_REQUEST]: () => null,
  [FETCH_LOGIN_SUCCESS]: (state, action) => action.payload.accessToken,
  [FETCH_LOGIN_ERROR]: () => null,
}, null);
const refreshTokenReducer = createReducer({
  [FETCH_LOGIN_REQUEST]: () => null,
  [FETCH_LOGIN_SUCCESS]: (state, action) => action.payload.refreshToken,
  [FETCH_LOGIN_ERROR]: () => null,
}, null);
const userProfileReducer = createReducer({
  [FETCH_LOGIN_REQUEST]: () => ({ }),
  [FETCH_LOGIN_SUCCESS]: (state, action) => action.payload.user,
  [FETCH_LOGIN_ERROR]: () => ({ }),
}, null);

export default combineReducers({
  loginRequest: loginRequestReducer,
  registerRequest: registerRequestReducer,
  accessToken: accessTokenReducer,
  refreshToken: refreshTokenReducer,
  user: userProfileReducer,
});
