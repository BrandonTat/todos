import React from 'react';
import configureStore from './store/store';

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
  root.innerHTML = "Todo App";
});
