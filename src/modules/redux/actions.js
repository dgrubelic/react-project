import { sendRequest } from 'modules/core';

export function createActionType(moduleName, actionType) {
  return `${moduleName}/${actionType}`;
}

export function dispatchRequest(config) {
  const { endpoint, types, ...requestConfig } = config;
  const [requestAction, successAction, errorAction] = types;

  return dispatch => {
    dispatch({ type: requestAction, payload: config });
    sendRequest({ url: endpoint, ...requestConfig }).then(response => {
      dispatch({ type: successAction, payload: response.data });
    }).catch(error => {
      dispatch({ type: errorAction, payload: error });
    })
  }
}
