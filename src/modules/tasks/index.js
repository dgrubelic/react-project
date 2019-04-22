import Tasks from './containers/tasks';
import reducer, { STORE_NAME } from './redux';

const moduleStore = [STORE_NAME, reducer];

export {
  Tasks,
  moduleStore,
};
