const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

// Reducer
export default function repositories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOAD_REPOSITORIES_SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case 'LOAD_REPOSITORIES_FAILURE':
      return {
        ...state,
        loading: false,
        error: true,
      };
    case 'LOAD_REPOSITORIES_REQUEST':
      return { ...state, loading: true };
    default:
      return state;
  }
}
