import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import modules from './modules';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  modules,
});

export default createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunk)));
