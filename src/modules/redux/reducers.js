const initialRequestState = {
  isLoading: false,
  response: null,
  error: null,
};

export function createReducer(actions, initialState) {
  return function (state = initialState, action) {
    if (!actions[action.type]) {
      return state;
    }

    return actions[action.type](state, action);
  }
}

export function createRequestReducer(requestAction, successAction, errorAction, initialResponseState) {
  return createReducer({
    [requestAction]: state => ({ ...state, error: null, isLoading: true }),
    [successAction]: (state, action) => ({
      ...state,
      error: null,
      isLoading: false,
      response: action.payload,
    }),
    [errorAction]: (state, action) => ({
      ...state,
      error: action.payload,
      isLoading: false,
    })
  }, { ...initialRequestState, response: initialResponseState });
}