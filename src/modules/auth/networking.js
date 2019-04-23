import { sendRequest, setRequestInterceptor, setResponseInterceptor } from 'modules/core';
import { getStore } from 'modules/redux';
import { getAccessToken } from './redux';

function onRequest(config) {
  const store = getStore();

  // Store is not created, ignore this interceptor
  if (!store) {
    return config;
  }

  const { headers = {} } = config;
  const accessToken = getAccessToken(store.getState());

  if (accessToken && !headers.Authorization) {
    headers.Authorization = `Bearer ${accessToken}`;
    config.headers = headers;
  }

  return config;
}

function onResponse(response) {
  return response;
}

function onResponseError(error) {
  const responseStatus = error.response.status;

  if (responseStatus === 401) {
    if (error.config.retryCount === 0) {
      return Promise.reject(error);
    }

    return new Promise((resolve, reject) => {
      const requestConfig = {
        ...error.config,
        retryCount: error.config.retryCount - 1,
      };

      return sendRequest(requestConfig)
        .then(resolve).catch(reject);
    });
  }

  return Promise.reject(error);
}

setRequestInterceptor(onRequest);
setResponseInterceptor(onResponse, onResponseError);