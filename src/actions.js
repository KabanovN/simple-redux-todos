import { createStore } from 'redux';
import reducer from './reducer';

export const store = createStore(reducer);

export const addTodo = (title) => ({ type: 'ADD_TODO', title });
export const removeTodo = (id) => ({ type: 'REMOVE_TODO', id });
export const toggleTodo = (id) => ({ type: 'TOGGLE_TODO', id });
