import {
  combineReducers,
  createActionType,
  createModuleSelector,
  createRequestAction,
  createRequestReducer,
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

// Request actions
const fetchTasksRquest = createRequestAction(FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, FETCH_TASKS_ERROR);
const createTaskRequest = createRequestAction(CREATE_TASK_REQUEST, CREATE_TASK_SUCCESS, CREATE_TASK_ERROR);
const updateTaskRequest = createRequestAction(UPDATE_TASK_REQUEST, UPDATE_TASK_SUCCESS, UPDATE_TASK_ERROR);

// Selectors
const tasksModuleSelector = createModuleSelector(STORE_NAME);
export const getTasks = state => tasksModuleSelector(state).tasks;
export const getCompletedTasks = state => getTasks(state).response.filter(task => task.completed);
export const getPendingTasks = state => getTasks(state).response.filter(task => !task.completed);

/**
 * Action creators
 */

export function fetchTasks(params) {
  const config = {
    url: 'https://jsonplaceholder.typicode.com/todos',
  };

  return fetchTasksRquest(config);
}

export function createTask(data) {
  const config = {
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/todos',
  };

  return createTaskRequest(config);
}

export function updateTask(id, data) {
  const config = {
    method: 'post',
    url: `https://jsonplaceholder.typicode.com/todos/${id}`,
  };

  return updateTaskRequest(config);
}

/**
 * Reducers
 */

const tasksRequestReducer = createRequestReducer(FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, FETCH_TASKS_ERROR, []);
export default combineReducers({
  tasks: tasksRequestReducer,
});
