import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';

export const history = createBrowserHistory();
const middleware = applyMiddleware(routerMiddleware(history));

export default createStore(createRootReducer(history), {}, compose(middleware));
