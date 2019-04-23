import axios from 'axios';

export function sendRequest(config) {
  return axios({ ...config, retryCount: 1 });
}

export function apiRequestUrl(url) {
  return `http://localhost:4000/${url}`;
}

export function setRequestInterceptor(onRequest, onRequestError) {
  axios.interceptors.request.use(onRequest, onRequestError);
}

export function setResponseInterceptor(onResponse, onResponseError) {
  axios.interceptors.response.use(onResponse, onResponseError);
}