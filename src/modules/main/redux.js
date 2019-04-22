import { combineReducers, createModuleSelector } from 'modules/redux';
import packageJson from 'modules/../../package.json';

export const STORE_NAME = 'main';

/**
 * Selectors
 */
const mainModuleSelector = createModuleSelector(STORE_NAME);
export const getVersion = state => mainModuleSelector(state).version;

export default combineReducers({
  version: () => packageJson.version,
});
