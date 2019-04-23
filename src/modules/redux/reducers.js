const initialRequestState = {
  config: null,
  error: false,
  isLoading: false,
  response: null,
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
    [requestAction]: (state, action) => ({
      ...state,
      config: action.payload,
      error: false,
      isLoading: true,
      response: initialResponseState
    }),
    [successAction]: (state, action) => ({
      ...state,
      config: null,
      error: false,
      isLoading: false,
      response: action.payload,
    }),
    [errorAction]: (state, action) => ({
      ...state,
      config: null,
      error: true,
      isLoading: false,
      response: action.payload,
    })
  }, { ...initialRequestState, response: initialResponseState });
}