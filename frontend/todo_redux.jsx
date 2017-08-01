import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//REMOVE AFTER TESTING
import {receiveTodos, receiveTodo} from './actions/todo_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore;

  // REMOVE AFTER TESTING
  window.store = store;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  //

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={ store }/>, root);
});
