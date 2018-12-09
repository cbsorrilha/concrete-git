const initialState = {
  loading: true,
  error: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'FETCH_REPO_REQUEST':
      return { ...state, loading: true, error: false };
    case 'FETCH_REPO_SUCCESS':
      return { ...state, loading: false };
    case 'FETCH_REPO_ERROR':
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
