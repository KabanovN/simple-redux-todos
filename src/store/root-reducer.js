import { combineReducers } from 'redux';

import todosReducer from './todos/todos-reducer';
import filterReducer from './filters/filters-reducer';

export const rootReducer = combineReducers({ todosReducer, filterReducer });
