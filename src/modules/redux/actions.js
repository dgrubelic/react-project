import { sendRequest } from 'modules/core';

export function createActionType(moduleName, actionType) {
  return `${moduleName}/${actionType}`;
}

export function createRequestAction(requestAction, successAction, errorAction) {
  return config => dispatch => {
    dispatch({ type: requestAction });
    sendRequest(config).then(response => {
      dispatch({ type: successAction, payload: response.data });
    }).catch(error => {
      dispatch({ type: errorAction, payload: error });
    })
  }
}
