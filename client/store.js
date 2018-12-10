import { compose, createStore, combineReducers } from 'redux';
import modules from './modules';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  modules,
});

export default createStore(rootReducer, {}, composeEnhancers());
