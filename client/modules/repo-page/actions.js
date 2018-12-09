export const fetchRepoRequest = () => ({
  type: 'FETCH_REPO_REQUEST',
});
export const fetchRepoSuccess = data => ({
  type: 'FETCH_REPO_SUCCESS',
  payload: data,
});
export const fetchRepoError = error => ({
  type: 'FETCH_REPO_ERROR',
  payload: error,
});
