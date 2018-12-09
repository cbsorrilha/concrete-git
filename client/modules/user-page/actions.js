export const fetchUserRequest = () => ({
  type: 'FETCH_USER_REQUEST',
});
export const fetchUserSuccess = data => ({
  type: 'FETCH_USER_SUCCESS',
  payload: data,
});
export const fetchUserError = error => ({
  type: 'FETCH_USER_ERROR',
  payload: error,
});

export const fetchRepoListRequest = () => ({
  type: 'FETCH_REPO_LIST_REQUEST',
});
export const fetchRepoListSuccess = data => ({
  type: 'FETCH_REPO_LIST_SUCCESS',
  payload: data,
});
export const fetchRepoListError = error => ({
  type: 'FETCH_REPO_LIST_ERROR',
  payload: error,
});

export const reverseOrder = () => ({
  type: 'REVERT_ORDER',
});
