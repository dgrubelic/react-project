export function createModuleSelector(moduleName) {
  return function moduleSelector(state) {
    return state[moduleName] || undefined;
  }
}