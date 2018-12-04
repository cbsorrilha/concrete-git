import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import entities from './entities';

export default history =>
  combineReducers({
    entities,
    router: connectRouter(history),
  });
