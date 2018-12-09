const initialState = {
  user: {},
  repoList: {
    order: 'Descending',
    loading: true,
    error: false,
    keys: [],
    entities: {},
  },
  loading: true,
  error: null,
};

const getSortedKeys = entities => {
  return Object.keys(entities).sort((a, b) => entities[b].stargazers_count - entities[a].stargazers_count);
};

const parseRepoData = serverData => {
  const entities = serverData.reduce((stack, next) => {
    stack[next.full_name] = next;
    return stack;
  }, {});
  return { keys: getSortedKeys(entities), entities };
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'FETCH_USER_REQUEST':
      return { ...state, loading: true, error: false };
    case 'FETCH_USER_SUCCESS':
      return { ...state, user: payload.data, loading: false };
    case 'FETCH_USER_ERROR':
      return { ...state, loading: false, error: payload };
    case 'FETCH_REPO_LIST_REQUEST':
      return { ...state, repoList: { ...state.repoList, loading: true, error: false } };
    case 'FETCH_REPO_LIST_SUCCESS':
      return { ...state, repoList: { ...state.repoList, loading: false, ...parseRepoData(payload.data) } };
    case 'FETCH_REPO_LIST_ERROR':
      return { ...state, repoList: { ...state.repoList, loading: false, error: payload } };
    case 'FETCH_REPO_SUCCESS':
      return {
        ...state,
        repoList: {
          ...state.repoList,
          loading: false,
          keys: [...state.repoList.keys, payload.data.full_name],
          entities: {
            ...state.repoList.entities,
            [payload.data.full_name]: payload.data,
          },
        },
      };
    case 'REVERT_ORDER':
      return {
        ...state,
        repoList: {
          ...state.repoList,
          loading: false,
          order: state.repoList.order === 'Descending' ? 'Ascending' : 'Descending',
          keys: [...state.repoList.keys].reverse(),
        },
      };
    default:
      return state;
  }
};
