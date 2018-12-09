import { combineReducers } from 'redux';
import { reducer as searchPageReducer } from './search-page';
import { reducer as userPageReducer } from './user-page';
import { reducer as repoPageReducer } from './user-page';

export default combineReducers({
  searchPage: searchPageReducer,
  userPage: userPageReducer,
  repoPage: repoPageReducer,
});
