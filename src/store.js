import {createStore} from 'redux';
import {todoReducer} from './MainModule/Model/ToDoList/reducer';

/* 
redux
  createStore: 创建store
*/

let store  = createStore(todoReducer);
export default store;