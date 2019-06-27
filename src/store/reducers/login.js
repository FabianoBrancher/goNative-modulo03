const INITIAL_STATE = {
  username: null,
  loading: false,
  error: false,
};

// Reducer
export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, username: action.payload.username, error: false, loading: false };
    case 'LOGIN_FAILURE':
      return { ...state, error: true, loading: false };
    case 'LOGIN_REQUEST':
      return { ...state, loading: true };
    default:
      return state;
  }
}
