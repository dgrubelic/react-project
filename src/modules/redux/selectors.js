export function createModuleSelector(moduleName) {
  return function moduleSelector(state) {
    return state && state[moduleName];
  }
}