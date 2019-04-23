import { moduleStore as tasksModuleStore } from 'modules/tasks';
import { moduleStore as authModuleStore } from 'modules/auth';
import reducer, { STORE_NAME } from '../redux';

const [authStoreName, authReducer] = authModuleStore;
const [tasksStoreName, tasksReducer] = tasksModuleStore;

export default {
  reducers: {
    [STORE_NAME]: reducer,
    [authStoreName]: authReducer,
    [tasksStoreName]: tasksReducer,
  },
  middlewares: [],
};