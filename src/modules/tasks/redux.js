import { apiRequestUrl } from 'modules/core';
import {
  combineReducers,
  createActionType,
  createModuleSelector,
  createRequestReducer,
  createReducer,
  dispatchRequest,
} from 'modules/redux';

export const STORE_NAME = 'tasks';
export const FETCH_TASKS_REQUEST = createActionType(STORE_NAME, 'FETCH_TASKS_REQUEST');
export const FETCH_TASKS_SUCCESS = createActionType(STORE_NAME, 'FETCH_TASKS_SUCCESS');
export const FETCH_TASKS_ERROR = createActionType(STORE_NAME, 'FETCH_TASKS_ERROR');
export const CREATE_TASK_REQUEST = createActionType(STORE_NAME, 'CREATE_TASK_REQUEST');
export const CREATE_TASK_SUCCESS = createActionType(STORE_NAME, 'CREATE_TASK_SUCCESS');
export const CREATE_TASK_ERROR = createActionType(STORE_NAME, 'CREATE_TASK_ERROR');
export const UPDATE_TASK_REQUEST = createActionType(STORE_NAME, 'UPDATE_TASK_REQUEST');
export const UPDATE_TASK_SUCCESS = createActionType(STORE_NAME, 'UPDATE_TASK_SUCCESS');
export const UPDATE_TASK_ERROR = createActionType(STORE_NAME, 'UPDATE_TASK_ERROR');
export const DELETE_TASK_REQUEST = createActionType(STORE_NAME, 'DELETE_TASK_REQUEST');
export const DELETE_TASK_SUCCESS = createActionType(STORE_NAME, 'DELETE_TASK_SUCCESS');
export const DELETE_TASK_ERROR = createActionType(STORE_NAME, 'DELETE_TASK_ERROR');

// Selectors
const tasksModuleSelector = createModuleSelector(STORE_NAME);
export const getTasks = state => tasksModuleSelector(state).tasks;
export const getCompletedTasks = state => getTasks(state).filter(task => task.completed);
export const getPendingTasks = state => getTasks(state).filter(task => !task.completed);

/**
 * Action creators
 */

export function fetchTasks(params) {
  const config = {
    endpoint: apiRequestUrl('tasks'),
    params,
    types: [
      FETCH_TASKS_REQUEST,
      FETCH_TASKS_SUCCESS,
      FETCH_TASKS_ERROR,
    ],
  };

  return dispatchRequest(config);
}

export function createTask(data) {
  const config = {
    method: 'post',
    endpoint: apiRequestUrl('tasks'),
    types: [
      CREATE_TASK_REQUEST,
      CREATE_TASK_SUCCESS,
      CREATE_TASK_ERROR,
    ],
  };

  return dispatchRequest(config);
}

export function updateTask(id, data) {
  const config = {
    method: 'put',
    endpoint: apiRequestUrl(`tasks/${id}`),
    types: [
      UPDATE_TASK_REQUEST,
      UPDATE_TASK_SUCCESS,
      UPDATE_TASK_ERROR,
    ],
  };

  return dispatchRequest(config);
}

export function deleteTask(id) {
  const config = {
    method: 'delete',
    endpoint: apiRequestUrl(`tasks/${id}`),
    types: [
      DELETE_TASK_REQUEST,
      DELETE_TASK_SUCCESS,
      DELETE_TASK_ERROR,
    ],
  };

  return dispatchRequest(config);
}

/**
 * Reducers
 */

const fetchTasksRequestReducer = createRequestReducer(FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, FETCH_TASKS_ERROR, []);
const tasksReducer = createReducer({
  [FETCH_TASKS_SUCCESS]: (state, action) => ([...state, ...action.payload])
}, []);
export default combineReducers({
  fetchTasksRequest: fetchTasksRequestReducer,
  tasks: tasksReducer,
});
