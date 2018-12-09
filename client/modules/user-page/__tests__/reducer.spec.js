import reducer from '../reducer';

describe('Testing the reducer for UserPage', () => {
  let initialState = {
    user: {},
    repoList: {
      loading: true,
      error: false,
      keys: [],
      entities: {},
      order: 'Descending',
    },
    loading: true,
    error: null,
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, { type: 'NONE' })).toEqual(initialState);
  });

  it('should return the user on the state', () => {
    const newState = reducer(undefined, { type: 'FETCH_USER_SUCCESS', payload: { data: { username: 'Roraima' } } });
    expect(newState.user).toEqual({ username: 'Roraima' });
  });

  it('should return the user on the state', () => {
    const newState = reducer(undefined, { type: 'FETCH_USER_SUCCESS', payload: { data: { username: 'Roraima' } } });
    expect(newState.user).toEqual({ username: 'Roraima' });
  });

  it('should return a normalized payload of data on the repoList', () => {
    const newState = reducer(undefined, {
      type: 'FETCH_REPO_LIST_SUCCESS',
      payload: { data: [{ full_name: 'roraima/roraima', stargazers_count: 0 }] },
    });
    expect(newState.repoList.keys).toContain('roraima/roraima');
  });

  it('should return a normalized payload of data on the repoList on the correct order', () => {
    const newState = reducer(undefined, {
      type: 'FETCH_REPO_LIST_SUCCESS',
      payload: {
        data: [
          { full_name: 'roraima/roraima', stargazers_count: 1 },
          { full_name: 'minasgerais/minasgerais', stargazers_count: 0 },
          { full_name: 'matogrosso/matogrosso', stargazers_count: 3 },
        ],
      },
    });
    expect(newState.repoList.keys[0]).toEqual('matogrosso/matogrosso');
    expect(newState.repoList.keys[2]).toEqual('minasgerais/minasgerais');
  });

  it('should return the keys on reverted order', () => {
    let initialState = {
      user: {},
      repoList: {
        loading: true,
        error: false,
        keys: ['matogrosso/matogrosso', 'roraima/roraima', 'minasgerais/minasgerais'],
        entities: {
          'roraima/roraima': { full_name: 'roraima/roraima', stargazers_count: 1 },
          'minasgerais/minasgerais': { full_name: 'minasgerais/minasgerais', stargazers_count: 0 },
          'matogrosso/matogrosso': { full_name: 'matogrosso/matogrosso', stargazers_count: 3 },
        },
      },
      loading: true,
      error: null,
    };
    const newState = reducer(initialState, {
      type: 'REVERT_ORDER',
    });
    expect(newState.repoList.keys[2]).toEqual('matogrosso/matogrosso');
    expect(newState.repoList.keys[0]).toEqual('minasgerais/minasgerais');
  });
});
