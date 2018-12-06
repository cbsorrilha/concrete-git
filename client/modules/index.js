import { combineReducers } from 'redux';
import searchPage from './search-page';

export default combineReducers({
  searchPage: searchPage.reducer,
});
