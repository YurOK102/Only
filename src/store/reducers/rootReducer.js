import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import commonReducer from './commonReducer';

export const rootReducer = combineReducers({
  taskReducer,
  commonReducer,
});
